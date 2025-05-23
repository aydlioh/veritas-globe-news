import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getStorageConfig } from 'src/config/storage.config';
import { STORAGE_CLIENT } from './tokens/storage.token';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: STORAGE_CLIENT,
      useFactory: getStorageConfig,
      inject: [ConfigService],
    },
    StorageService,
  ],
  exports: [StorageService],
})
export class StorageModule {}
