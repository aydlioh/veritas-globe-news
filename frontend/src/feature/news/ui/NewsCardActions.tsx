'use client';

import { INews } from '@/entities/news/model/types';
import { NewsCard } from '@/entities/news/ui/NewsCard';
import { useRouter } from 'next/navigation';

interface NewsCardActionsProps {
  news: INews;
  actionSlot?: React.ReactNode;
}

export const NewsCardActions = ({ news, actionSlot }: NewsCardActionsProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${news.id}`);
    console.log('go news', news.id);
  };

  return (
    <div onClick={handleClick}>
      <NewsCard news={news} actionSlot={actionSlot} />
    </div>
  );
};
