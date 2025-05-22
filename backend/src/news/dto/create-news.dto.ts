import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    example: 'Заголовок новости',
    description: 'Заголовок статьи новости',
  })
  @IsNotEmpty({ message: 'Заголовок обязателен для заполнения' })
  @IsString({ message: 'Заголовок должен быть строкой' })
  title: string;

  @ApiProperty({
    example: 'Это содержание статьи новости.',
    description: 'Содержание статьи новости',
  })
  @IsNotEmpty({ message: 'Содержание обязательно для заполнения' })
  @IsString({ message: 'Содержание должно быть строкой' })
  content: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Файл превью новости',
    required: false,
  })
  previewFile?: Express.Multer.File;
}
