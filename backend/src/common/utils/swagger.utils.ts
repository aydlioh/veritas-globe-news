import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { getSwaggerConfig } from 'src/config/swagger.config';

export const setupSwagger = (app: INestApplication) => {
  const config = getSwaggerConfig();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document, {
    yamlDocumentUrl: '/docs.yaml',
    jsonDocumentUrl: '/docs.json',
    swaggerOptions: {
      defaultModelExpandDepth: -1,
      displayRequestDuration: true,
      tryItOutEnabled: true,
      requestInterceptor: (req: Request) => {
        if (req.body && req.body instanceof FormData) {
          req.headers['Content-Type'] = 'multipart/form-data';
        }
        return req;
      },
    },
  });
};
