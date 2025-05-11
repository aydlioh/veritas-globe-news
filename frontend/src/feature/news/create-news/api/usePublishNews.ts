import { useMutation } from '@tanstack/react-query';
import { NewsApi } from './api';
import { INewsForm } from '@/entities/news/model/types';

export const usePublishNews = () => {
  return useMutation({
    mutationKey: ['publish-news'],
    mutationFn: (news: INewsForm) => NewsApi.publishNews(news),
  });
};
