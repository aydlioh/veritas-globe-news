import { Injectable, Inject } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Body, BucketName } from 'aws-sdk/clients/s3';
import { STORAGE_CLIENT } from './tokens/storage.token';
import { STORAGE_BUCKET } from 'src/common/consts/storage.const';

@Injectable()
export class StorageService {
  constructor(
    @Inject(STORAGE_CLIENT) private readonly s3: S3,
    private config: ConfigService,
  ) {}

  async uploadFile(file: Express.Multer.File, path: string): Promise<string> {
    const bucket: BucketName = this.config.getOrThrow(STORAGE_BUCKET);

    const uploadResult = await this.s3
      .upload({
        Bucket: bucket,
        Key: path,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
      })
      .promise();

    return uploadResult.Location.replace('//minio', '//localhost');
  }

  async deleteFile(url: string): Promise<void> {
    const bucket: BucketName = this.config.getOrThrow(STORAGE_BUCKET);
    const key = this.extractKeyFromUrl(url);

    await this.s3
      .deleteObject({
        Bucket: bucket,
        Key: key,
      })
      .promise();
  }

  private extractKeyFromUrl(url: string): string {
    const bucket: BucketName = this.config.getOrThrow(STORAGE_BUCKET);
    return url.split(`/${bucket}/`)[1];
  }
}
