import { ApiProperty } from '@nestjs/swagger';

export class FullNewsResponseDto {
  @ApiProperty({
    description: 'Уникальный идентификатор новости',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Заголовок новости',
    example: 'Это заголовок новости',
  })
  title: string;

  @ApiProperty({
    description: 'Содержание новости',
    example: 'Это содержание статьи новости.',
  })
  content: string;

  @ApiProperty({
    description: 'URL для превью изображения новости',
    example: 'https://example.com/preview.jpg',
    nullable: true,
  })
  previewUrl: string | null;

  @ApiProperty({
    description: 'Дата создания новости',
    example: '2023-08-23T10:12:45.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Дата обновления новости',
    example: '2023-08-24T12:15:30.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Идентификатор автора новости',
    example: 'abc123',
  })
  authorId: string;

  @ApiProperty({
    description: 'Информация об авторе',
    type: 'object',
    properties: {
      id: {
        description: 'Идентификатор пользователя',
        example: 'abc123',
      },
      username: {
        description: 'Имя пользователя',
        example: 'Teacoder',
      },
      email: {
        description: 'Email пользователя',
        example: 'teacoder@example.com',
      },
    },
  })
  author: {
    id: string;
    username: string;
    email: string;
  };
}
