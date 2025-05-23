import { useQuery } from '@tanstack/react-query';
import { NewsApi } from './newsApi';

export const useNewsById = (id?: string) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => NewsApi.getNewsById(id!),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
