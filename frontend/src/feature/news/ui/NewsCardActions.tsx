'use client';

import { INews } from '@/entities/news/model/types';
import { NewsCard } from '@/entities/news/ui/NewsCard';

interface NewsCardActionsProps {
  news: INews;
  actionSlot?: React.ReactNode;
}

export const NewsCardActions = ({ news, actionSlot }: NewsCardActionsProps) => {
  const handleClick = () => {
    console.log('go news', news.id);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <NewsCard news={news} actionSlot={actionSlot} />
    </div>
  );
};
