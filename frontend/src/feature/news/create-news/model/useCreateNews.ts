// features/news/create/model/useCreateNews.ts
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import {
  newsTitleAtom,
  newsDescriptionAtom,
  newsFormDataAtom,
} from '@/entities/news/model/store';
import { updateImageBlockUrlAtom } from '@/shared/lib/image-store';
import { useNewsById } from '../api/useNewsById';
import { usePublishNews } from '../api/usePublishNews';

export function useCreateNews(newsId?: string) {
  const router = useRouter();
  const [title, setTitle] = useAtom(newsTitleAtom);
  const [description, setDescription] = useAtom(newsDescriptionAtom);
  const [news] = useAtom(newsFormDataAtom);
  const setImageBlockUrl = useSetAtom(updateImageBlockUrlAtom);
  const { data: loadedNews } = useNewsById(newsId);
  const { mutate: publishNews, isPending } = usePublishNews();

  useEffect(() => {
    setTitle('');
    setDescription('');
    setImageBlockUrl({ blockKey: 'news-image-preview', url: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsId]);

  useEffect(() => {
    if (loadedNews) {
      setTitle(loadedNews.name);
      setDescription(loadedNews.description);
      setImageBlockUrl({
        blockKey: 'news-image-preview',
        url: loadedNews.image,
      });
    } else if (!newsId) {
      setTitle('');
      setDescription('');
      setImageBlockUrl({ blockKey: 'news-image-preview', url: '' });
    }
  }, [loadedNews, newsId, setTitle, setDescription, setImageBlockUrl]);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      return;
    }

    publishNews(news, {
      onSuccess: () => {
        router.push('/news');
      },
    });
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    news,
    submitNews: handleSubmit,
    isSubmitting: isPending,
    isValid: Boolean(title.trim() && description.trim()),
  };
}
