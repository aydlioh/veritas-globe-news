import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  newsTitleAtom,
  newsContentAtom,
  newsFormDataAtom,
  loadNewsDataAtom,
} from '@/entities/news/model/store';
import {
  imageBlocksAtom,
  updateImageBlockUrlAtom,
} from '@/shared/lib/imageStore';
import { useNewsById } from '../../news-list/api/useNewsByID';
import { usePublishNews, useEditNews } from '../api/usePublishNews';

export function useManageNews(newsId?: string) {
  const router = useRouter();
  const [title, setTitle] = useAtom(newsTitleAtom);
  const [content, setContent] = useAtom(newsContentAtom);
  const [news] = useAtom(newsFormDataAtom);
  const imageBlocks = useAtomValue(imageBlocksAtom);
  const file = imageBlocks['news-image-preview']?.file;
  const setImageBlockUrl = useSetAtom(updateImageBlockUrlAtom);
  const loadNewsData = useSetAtom(loadNewsDataAtom);
  const { data: loadedNews } = useNewsById(newsId);

  const publishNewsMutation = usePublishNews();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const editNewsMutation = newsId ? useEditNews(newsId) : null;

  useEffect(() => {
    if (loadedNews) {
      loadNewsData(loadedNews);
    } else if (!newsId) {
      setTitle('');
      setContent('');
      setImageBlockUrl({ blockKey: 'news-image-preview', url: '' });
    }
  }, [
    loadedNews,
    newsId,
    loadNewsData,
    setTitle,
    setContent,
    setImageBlockUrl,
  ]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (file) {
      formData.append('previewFile', file);
    }

    if (newsId && editNewsMutation) {
      editNewsMutation.mutate(formData, {
        onSuccess: (data) => {
          console.log('новость обновлена:', data);
          router.push('/news');
        },
        onError: (error) => {
          console.error('ошибка обновления новости:', error);
        },
      });
    } else {
      publishNewsMutation.mutate(formData, {
        onSuccess: (data) => {
          console.log('новость создана:', data);
          router.push('/news');
        },
        onError: (error) => {
          console.error('ошибка создания новости:', error);
        },
      });
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    news,
    submitNews: handleSubmit,
    isSubmitting:
      publishNewsMutation.isPending || editNewsMutation?.isPending || false,
    isValid: Boolean(title.trim() && content.trim()),
  };
}
