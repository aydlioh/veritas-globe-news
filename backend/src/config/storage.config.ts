import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import {
  STORAGE_ACCESS_KEY,
  STORAGE_ENDPOINT,
  STORAGE_REGION,
  STORAGE_SECRET_KEY,
} from 'src/common/consts/storage.const';

export const getStorageConfig = (config: ConfigService) =>
  new AWS.S3({
    s3ForcePathStyle: true,
    endpoint: config.getOrThrow(STORAGE_ENDPOINT),
    region: config.getOrThrow(STORAGE_REGION),
    credentials: {
      accessKeyId: config.getOrThrow(STORAGE_ACCESS_KEY),
      secretAccessKey: config.getOrThrow(STORAGE_SECRET_KEY),
    },
  });
