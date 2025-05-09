'use client';

import Image from 'next/image';
import { INews } from '../model/types';
import fallbackImage from '@/shared/assets/Logo.svg';
import ReactMarkdown from 'react-markdown';

interface ShopCardProps {
  news: INews;
  actionSlot?: React.ReactNode;
}

export const NewsCard = ({ news, actionSlot }: ShopCardProps) => {
  return (
    <div className="relative p-4 bg-base rounded-xl overflow-hidden">
      {news.image && (
        <div className="lg:float-right lg:ml-4 w-[400px]">
          <Image
            src={news.image || fallbackImage}
            alt={news.name || 'News image'}
            width={400}
            height={225}
            className="rounded-md w-full h-auto"
            unoptimized={true}
          />
        </div>
      )}

      <div className="prose [&>p]:mb-4 text-[16px]">
        <ReactMarkdown>{news.description}</ReactMarkdown>
      </div>
      <div className="absolute right-2 bottom-2">{actionSlot}</div>
    </div>
  );
};
