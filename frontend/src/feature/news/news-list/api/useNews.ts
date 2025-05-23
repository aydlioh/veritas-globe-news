import { useQuery } from '@tanstack/react-query';
import { NewsApi } from './newsApi';

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: NewsApi.getAllNews,
    staleTime: 5 * 60 * 1000,
  });
};
