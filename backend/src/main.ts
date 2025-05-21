import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { setupSwagger } from './common/utils/swagger.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app
    .setGlobalPrefix('api')
    .use(cookieParser())
    .useGlobalPipes(new ValidationPipe());

  setupSwagger(app);

  await app.listen(process.env.BACKEND_PORT ?? 3000);
}
bootstrap();
