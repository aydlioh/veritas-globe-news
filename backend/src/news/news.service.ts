import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsResponseDto } from './dto/news.dto';
import { FullNewsResponseDto } from './dto/full-news.dto';
import { StorageService } from 'src/storage/storage.service';

const withUser = {
  author: {
    select: {
      id: true,
      username: true,
      email: true,
    },
  },
};

@Injectable()
export class NewsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  public async getById(id: string): Promise<FullNewsResponseDto> {
    const post = await this.prisma.newsPost.findUnique({
      where: { id },
      include: withUser,
    });

    if (!post) {
      throw new NotFoundException(`Новость не найдена`);
    }

    return post;
  }

  public async getAll(): Promise<NewsResponseDto[]> {
    return this.prisma.newsPost.findMany({
      select: {
        id: true,
        title: true,
        previewUrl: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  public async create(
    dto: CreateNewsDto,
    authorId: string,
    previewFile?: Express.Multer.File,
  ): Promise<FullNewsResponseDto> {
    let previewUrl: string | undefined;

    if (previewFile) {
      const filePath = `previews/${Date.now()}-${previewFile.originalname}`;
      previewUrl = await this.storageService.uploadFile(previewFile, filePath);
    }

    return this.prisma.newsPost.create({
      data: {
        title: dto.title,
        content: dto.content,
        previewUrl,
        authorId,
      },
      include: withUser,
    });
  }

  public async update(
    id: string,
    dto: UpdateNewsDto,
    authorId: string,
    previewFile?: Express.Multer.File,
  ): Promise<FullNewsResponseDto> {
    const news = await this.getById(id);
    let previewUrl = news.previewUrl;

    if (previewFile) {
      if (previewUrl) {
        await this.storageService.deleteFile(previewUrl);
      }

      const filePath = `previews/${Date.now()}-${previewFile.originalname}`;
      previewUrl = await this.storageService.uploadFile(previewFile, filePath);
    }

    return this.prisma.newsPost.update({
      where: { id },
      data: {
        title: dto.title,
        content: dto.content,
        previewUrl,
        authorId,
      },
      include: withUser,
    });
  }

  public async delete(id: string): Promise<boolean> {
    try {
      const news = await this.getById(id);

      if (news.previewUrl) {
        await this.storageService.deleteFile(news.previewUrl);
      }

      await this.prisma.newsPost.delete({
        where: { id },
      });

      return true;
    } catch {
      return false;
    }
  }
}
