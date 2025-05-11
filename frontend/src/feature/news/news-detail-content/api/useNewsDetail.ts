import { useQuery } from '@tanstack/react-query';
import { NewsApi } from './api';
import { NewsDetail } from '../model/types';

export const useNewsDetail = (id: string) => {
  const {
    data: news,
    error,
    isLoading,
    refetch,
  } = useQuery<NewsDetail>({
    queryKey: ['news-detail', id],
    queryFn: async () => {
      const response = await NewsApi.getNewsDetailMock(id);
      return response;
    },
    retry: 1,
  });

  return { news, error, isLoading, refetch };
};
