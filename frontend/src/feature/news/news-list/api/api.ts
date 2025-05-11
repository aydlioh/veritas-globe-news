import { mockNewsList } from '../model/mock';
import { INews } from '@/entities/news/model/store';

export const NewsApi = {
  async getNewsList(): Promise<INews[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockNewsList;
  },
};
