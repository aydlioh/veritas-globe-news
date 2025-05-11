'use client';

import Image from 'next/image';
import { INews } from '../model/types';
import fallbackImage from '@/shared/assets/Logo1.png';
import ReactMarkdown from 'react-markdown';
import { ImagePreview } from '@/shared/ui/image-preview';

interface ShopCardProps {
  news: INews;
  image?: string;
  actionSlot?: React.ReactNode;
}

export const NewsCard = ({ news, image, actionSlot }: ShopCardProps) => {
  return (
    <div className="cursor-pointer relative p-4 w-[320px] min-h-[92px] bg-base rounded-xl overflow-hidden flex flex-col justify-between gap-4 h-full">
      <div className="flex flex-col gap-4">
        {image ? (
          <ImagePreview
            blockKey={image}
            className="rounded-md"
            height={'w-[288px]'}
          />
        ) : (
          news.image && (
            <Image
              src={news.image || fallbackImage}
              alt={news.name || 'News image'}
              width={288}
              height={225}
              className="rounded-md"
              unoptimized={true}
            />
          )
        )}

        <div className="prose text-[16px]">
          <ReactMarkdown>{news.name}</ReactMarkdown>
        </div>
      </div>

      <div className="flex justify-end">
        <span className="text-gray-500 text-sm">{news.date}</span>
      </div>
      <div className="absolute left-2 bottom-2">{actionSlot}</div>
    </div>
  );
};
