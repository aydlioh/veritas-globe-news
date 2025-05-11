import { useQuery } from '@tanstack/react-query';
import { NewsApi } from './api';
import { INews } from '@/entities/news/model/store';

export const useNewsById = (id?: string) => {
  return useQuery<INews>({
    queryKey: ['news', id],
    queryFn: () => NewsApi.getNewsById(id!),
    enabled: !!id,
  });
};
