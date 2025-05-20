import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AuthResponse } from './dto/auth.dto';
import { Authorization } from './decorators/authorization.decorator';
import { Authorized } from './decorators/authorized.decorator';
import { User } from '@prisma/client';
import { UserResponseDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Регистрация',
    description: 'Создает новый аккаунт для пользователя',
  })
  @ApiOkResponse({
    type: AuthResponse,
  })
  @ApiBadRequestResponse({
    description: 'Некорректные входные данные',
  })
  @ApiConflictResponse({
    description: 'Пользователь с таким email уже существует',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(
    @Res({
      passthrough: true,
    })
    res: Response,
    @Body() dto: RegisterDto,
  ) {
    return await this.authService.register(res, dto);
  }

  @ApiOperation({
    summary: 'Авторизация',
    description: 'Входит в систему',
  })
  @ApiOkResponse({
    type: AuthResponse,
  })
  @ApiBadRequestResponse({
    description: 'Некорректные входные данные',
  })
  @ApiNotFoundResponse({
    description: 'Пользователь не найден',
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Res({
      passthrough: true,
    })
    res: Response,
    @Body() dto: LoginDto,
  ) {
    return await this.authService.login(res, dto);
  }

  @ApiOperation({
    summary: 'Обновление токена',
  })
  @ApiOkResponse({
    type: AuthResponse,
  })
  @ApiForbiddenResponse({
    description: 'Невалидный refresh токен',
  })
  @ApiNotFoundResponse({
    description: 'Пользователь не найден',
  })
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refresh(
    @Res({
      passthrough: true,
    })
    res: Response,
    @Req() req: Request,
  ) {
    return await this.authService.refresh(req, res);
  }

  @ApiOperation({
    summary: 'Выход из системы',
  })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(
    @Res({
      passthrough: true,
    })
    res: Response,
  ) {
    return await this.authService.logout(res);
  }

  @ApiOperation({
    summary: 'Получение информации о пользователе',
  })
  @ApiOkResponse({
    type: UserResponseDto,
  })
  @Authorization()
  @Get('me')
  @HttpCode(HttpStatus.OK)
  // eslint-disable-next-line @typescript-eslint/require-await
  async me(@Authorized() user: User) {
    return user;
  }
}
