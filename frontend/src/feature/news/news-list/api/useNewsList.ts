import { INews } from '@/entities/news/model/store';
import { useQuery } from '@tanstack/react-query';
import { NewsApi } from './api';

export const useNewsList = () => {
  return useQuery<INews[]>({
    queryKey: ['news-list'],
    queryFn: NewsApi.getNewsList,
    staleTime: 60 * 1000,
  });
};
