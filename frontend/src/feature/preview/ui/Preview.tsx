'use client';

import { INews } from '@/entities/news/model/types';
import { NewsCard } from '@/entities/news/ui/NewsCard';

const news: INews = {
  id: '-1',
  name: 'Новые функции на платформе',
  description: 'Обновления, которые делают ваш магазин ещё мощнее',
  image: '',
  date: '10.05.2025',
};

export default function Preview() {
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <p className="text-xl font-bold">Превью</p>
      <NewsCard news={news} image="news-image-preview" />
    </div>
  );
}
