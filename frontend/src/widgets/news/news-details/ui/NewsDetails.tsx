'use client';

import { NewsDetailContent } from '@/feature/news/news-detail-content/ui/NewsDetailContent';
import BackBtn from '@/shared/ui/backbtn';

export const NewsDetails = () => {
  return (
    <div className="relative py-4">
      <div className="absolute top-4 left-0">
        <BackBtn />
      </div>

      <div className="w-full max-w-[600px] mx-auto px-4">
        <NewsDetailContent />
      </div>
    </div>
  );
};
