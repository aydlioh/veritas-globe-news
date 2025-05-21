import { DocumentBuilder } from '@nestjs/swagger';

export const getSwaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle('Veritas Globe News API')
    .setDescription('Документация к API Veritas Globe News бэкенда')
    .setVersion('1.0')
    .setContact('aydlioh', 'https://github.com/aydlioh/veritas-globe-news', '')
    .addBearerAuth()
    .build();
};
