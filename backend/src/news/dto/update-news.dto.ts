import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UpdateNewsDto {
  @ApiProperty({
    example: 'Заголовок новости',
    description: 'Заголовок статьи новости',
  })
  @IsNotEmpty({ message: 'Заголовок обязателен для заполнения' })
  @IsString({ message: 'Заголовок должен быть строкой' })
  title?: string;

  @ApiProperty({
    example: 'Это содержание статьи новости.',
    description: 'Содержание статьи новости',
  })
  @IsNotEmpty({ message: 'Содержание обязательно для заполнения' })
  @IsString({ message: 'Содержание должно быть строкой' })
  content?: string;

  @ApiProperty({
    example: 'https://example.com/preview.jpg',
    description: 'URL для превью изображения',
    required: false,
  })
  @IsUrl({}, { message: 'URL превью должен быть валидным URL' })
  previewUrl?: string; // TODO: Или файл?
}
