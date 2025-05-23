import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NewsApi } from '../../news-list/api/newsApi';

export const usePublishNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => NewsApi.createNews(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};

export const useEditNews = (newsId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => NewsApi.updateNews(newsId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};
