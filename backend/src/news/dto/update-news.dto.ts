import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateNewsDto {
  @ApiProperty({
    example: 'Заголовок новости',
    description: 'Заголовок статьи новости',
    required: false,
  })
  @IsNotEmpty({ message: 'Заголовок обязателен для заполнения' })
  @IsOptional()
  @IsString({ message: 'Заголовок должен быть строкой' })
  title?: string;

  @ApiProperty({
    example: 'Это содержание статьи новости.',
    description: 'Содержание статьи новости',
    required: false,
  })
  @IsNotEmpty({ message: 'Содержание обязательно для заполнения' })
  @IsOptional()
  @IsString({ message: 'Содержание должно быть строкой' })
  content?: string;

  @ApiProperty({
    example: 'https://example.com/preview.jpg',
    description: 'URL для превью изображения',
    required: false,
  })
  @IsOptional()
  @IsUrl({}, { message: 'URL превью должен быть валидным URL' })
  previewUrl?: string; // TODO: Или файл?
}
