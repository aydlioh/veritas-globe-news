import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NewsResponseDto } from './dto/news.dto';
import { FullNewsResponseDto } from './dto/full-news.dto';

@ApiTags('Новости')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({ summary: 'Получение новости по идентификатору' })
  @ApiParam({ name: 'id', description: 'Идентификатор новости' })
  @ApiResponse({
    status: 200,
    description: 'Новость',
    type: FullNewsResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.newsService.getById(id);
  }

  @ApiOperation({ summary: 'Получение списка новостей' })
  @ApiResponse({
    status: 200,
    description: 'Список новостей',
    type: [NewsResponseDto],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.newsService.getAll();
  }

  @ApiOperation({ summary: 'Создание новости' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'Новость создана',
    type: FullNewsResponseDto,
  })
  @Authorization()
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createDto: CreateNewsDto, @Authorized('id') authorId: string) {
    return this.newsService.create(createDto, authorId);
  }

  @ApiOperation({ summary: 'Обновление новости' })
  @ApiParam({ name: 'id', description: 'Идентификатор новости' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Новость обновлена',
    type: FullNewsResponseDto,
  })
  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateNewsDto,
    @Authorized('id') authorId: string,
  ) {
    return this.newsService.update(id, updateDto, authorId);
  }

  @ApiOperation({ summary: 'Удаление новости' })
  @ApiParam({ name: 'id', description: 'Идентификатор новости' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 204,
    description: 'Новость удалена',
  })
  @Authorization()
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.newsService.delete(id);
  }
}
