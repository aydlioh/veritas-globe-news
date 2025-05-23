'use client';

import { NewsCard } from '@/entities/news/ui/NewsCard';
import { INews } from '@/entities/news/model/types';

export default function Preview() {
  const emptyNews: INews = {
    id: '-1',
    title: '',
    previewUrl: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    authorId: '',
  };

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <p className="text-xl font-bold">Превью</p>
      <NewsCard news={emptyNews} />
    </div>
  );
}
