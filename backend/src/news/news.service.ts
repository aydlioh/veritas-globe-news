import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsResponseDto } from './dto/news.dto';
import { FullNewsResponseDto } from './dto/full-news.dto';

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
  constructor(private readonly prisma: PrismaService) {}

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
  ): Promise<FullNewsResponseDto> {
    const { title, content } = dto;

    return this.prisma.newsPost.create({
      data: {
        title,
        content,
        authorId,
      },
      include: withUser,
    });
  }

  public async update(
    id: string,
    dto: UpdateNewsDto,
    authorId: string,
  ): Promise<FullNewsResponseDto> {
    await this.getById(id);

    return this.prisma.newsPost.update({
      where: { id },
      data: {
        ...dto,
        authorId,
      },
      include: withUser,
    });
  }

  public async delete(id: string): Promise<boolean> {
    try {
      await this.getById(id);

      await this.prisma.newsPost.delete({
        where: { id },
      });

      return true;
    } catch {
      return false;
    }
  }
}
