import { ConfigService } from '@nestjs/config';

export const isDev = (config: ConfigService): boolean =>
  config.getOrThrow('NODE_ENV') === 'development';
