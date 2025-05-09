'use client';

import Link from 'next/link';
import { Newspaper } from 'lucide-react';

export const CreateNews = () => {
  const handleClick = () => {
    console.log('create');
  };

  return (
    <Link
      href="/create-news"
      onClick={handleClick}
      className="animation flex justify-center items-center min-h-[240px] w-full rounded-[16px] border border-dashed border-graphite/20 bg-white"
    >
      <div className="flex flex-col justify-center h-full gap-4">
        <Newspaper className="h-20 w-20 mx-auto" />
        <p className="text-center font-semibold leading-[20px]">
          Создать новость
        </p>
      </div>
    </Link>
  );
};
