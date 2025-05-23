'use client';

import Image from 'next/image';
import { INews } from '../model/types';
import { ImagePreview } from '@/shared/ui/image-preview';

interface NewsCardProps {
  news: INews;
  actionSlot?: React.ReactNode;
  isPreview?: boolean;
}

export const NewsCard = ({
  news,
  actionSlot,
  isPreview = false,
}: NewsCardProps) => {
  const formattedDate = new Date(news.createdAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="cursor-pointer relative p-4 w-[320px] min-h-[92px] bg-base rounded-xl overflow-hidden flex flex-col justify-between gap-4 h-full">
      <div className="flex flex-col gap-4">
        {!isPreview ? (
          news.previewUrl ? (
            <Image
              src={news.previewUrl}
              alt={news.title}
              width={288}
              height={225}
              className="rounded-md object-cover"
              unoptimized={true}
            />
          ) : null
        ) : (
          <ImagePreview
            blockKey="news-image-preview"
            className="rounded-md"
            height={'w-[288px]'}
          />
        )}

        <h3 className="text-lg font-semibold line-clamp-2">{news.title}</h3>
      </div>

      <div className="flex justify-between items-center h-[30px]">
        <p className="text-gray-500 text-sm ">{formattedDate}</p>
        {actionSlot && <div className="flex gap-2">{actionSlot}</div>}
      </div>
    </div>
  );
};
