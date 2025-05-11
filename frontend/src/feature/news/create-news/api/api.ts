// features/news/api/api.ts
import { INews } from '@/entities/news/model/store';
import { mockNewsList } from '../../news-list/model/mock';
import { INewsForm } from '@/entities/news/model/types';

export const NewsApi = {
  async getNewsList(): Promise<INews[]> {
    await delay(500);
    return mockNewsList;
  },

  async getNewsById(id: string): Promise<INews> {
    await delay(500);
    const news = mockNewsList.find((n) => n.id === id);
    if (!news) throw new Error('Новость не найдена');
    return news;
  },

  async publishNews(news: INewsForm): Promise<{ success: boolean }> {
    await delay(500);
    console.log('Опубликовано:', news);
    return { success: true };
  },
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
