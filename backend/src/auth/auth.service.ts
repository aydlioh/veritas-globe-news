import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { hash, verify } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.interface';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';
import { isDev } from 'src/common/utils/is-dev.utils';
import { parseTokenDuration } from 'src/common/utils/parse-duration.utils';
import { AuthResponse } from './dto/auth.dto';
import { Tokens } from './interfaces/tokens.interface';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  private readonly JWT_ACCESS_TOKEN_TTL: string;
  private readonly JWT_REFRESH_TOKEN_TTL: string;
  private readonly REFRESH_TOKEN_COOKIE_NAME = 'refreshToken';

  private readonly COOKIE_DOMAIN: string;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.JWT_ACCESS_TOKEN_TTL = configService.getOrThrow(
      'JWT_ACCESS_TOKEN_TTL',
    );
    this.JWT_REFRESH_TOKEN_TTL = configService.getOrThrow(
      'JWT_REFRESH_TOKEN_TTL',
    );
    this.COOKIE_DOMAIN = configService.getOrThrow('COOKIE_DOMAIN');
  }

  public async register(
    res: Response,
    dto: RegisterDto,
  ): Promise<AuthResponse> {
    const { username, email, password } = dto;

    const existUser = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (existUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const user = await this.prismaService.user.create({
      data: { username, email, password: await hash(password) },
    });

    return this.withTokens(res, user.id);
  }

  public async login(res: Response, dto: LoginDto): Promise<AuthResponse> {
    const { email, password } = dto;

    const user = await this.prismaService.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const isValidPassword = await verify(user.password, password);

    if (!isValidPassword) {
      throw new NotFoundException('Пользователь не найден');
    }

    return this.withTokens(res, user.id);
  }

  public async refresh(req: Request, res: Response): Promise<AuthResponse> {
    const refreshToken = req.cookies.refreshToken as string;

    if (!refreshToken) {
      throw new ForbiddenException('Невалидный refresh токен!');
    }

    const payload: JwtPayload = await this.jwtService.verifyAsync(refreshToken);

    if (!payload) {
      throw new ForbiddenException('Невалидный refresh токен!');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    return this.withTokens(res, user.id);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async logout(res: Response) {
    this.setCookie(res, this.REFRESH_TOKEN_COOKIE_NAME, new Date(0));

    return { message: 'Вы успешно вышли из системы!' };
  }

  public async validate(id: string): Promise<IUser> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        role: true,
        email: true,
        username: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    return user;
  }

  private withTokens(res: Response, id: string): AuthResponse {
    const { accessToken, refreshToken } = this.generateTokens(id);

    this.setCookie(
      res,
      refreshToken,
      parseTokenDuration(this.JWT_REFRESH_TOKEN_TTL),
    );

    return { accessToken };
  }

  private generateTokens(id: string): Tokens {
    const payload: JwtPayload = { id };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return { accessToken, refreshToken };
  }

  private setCookie(res: Response, cookie: string, expiresIn: Date) {
    const isDevelopment = isDev(this.configService);

    res.cookie(this.REFRESH_TOKEN_COOKIE_NAME, cookie, {
      httpOnly: true,
      domain: this.COOKIE_DOMAIN,
      expires: expiresIn,
      secure: !isDevelopment,
      sameSite: isDevelopment ? 'none' : 'lax',
    });
  }
}
