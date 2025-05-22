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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NewsResponseDto } from './dto/news.dto';
import { FullNewsResponseDto } from './dto/full-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @ApiOperation({ summary: 'Создание новости с превью' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'Новость создана',
    type: FullNewsResponseDto,
  })
  @ApiConsumes('multipart/form-data')
  @Authorization()
  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseInterceptors(FileInterceptor('previewFile'))
  createWithPreview(
    @Body() createDto: CreateNewsDto,
    @Authorized('id') authorId: string,
    @UploadedFile() previewFile?: Express.Multer.File,
  ) {
    return this.newsService.create(createDto, authorId, previewFile);
  }

  @ApiOperation({ summary: 'Обновление новости с превью' })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('previewFile'))
  updateWithPreview(
    @Param('id') id: string,
    @Body() updateDto: UpdateNewsDto,
    @Authorized('id') authorId: string,
    @UploadedFile() previewFile?: Express.Multer.File,
  ) {
    return this.newsService.update(id, updateDto, authorId, previewFile);
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
