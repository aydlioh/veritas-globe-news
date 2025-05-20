import { DocumentBuilder } from '@nestjs/swagger';

export const getSwaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('Documentation')
    .setVersion('1.0')
    .setContact('Teacoder', 'https://github.com/teacoder', '2yH8t@example.com')
    .addBearerAuth()
    .build();
};
