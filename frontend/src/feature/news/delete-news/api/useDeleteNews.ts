import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NewsApi } from '../../news-list/api/newsApi';

export const useDeleteNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => NewsApi.deleteNews(id),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.invalidateQueries(['news'] as any);
    },
  });
};
