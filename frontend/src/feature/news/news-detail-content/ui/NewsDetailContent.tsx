'use client';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { useNewsDetail } from '../api/useNewsDetail';
import { useParams } from 'next/navigation';

export const NewsDetailContent = () => {
  const params = useParams();
  const newsId = params.id as string;

  const { news, error, isLoading } = useNewsDetail(newsId);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  if (!news) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
      <h1 className="text-3xl font-bold">{news.title}</h1>

      <div className="text-gray-500 text-sm">{news.date}</div>

      {news.image && (
        <div className="mb-6 rounded-lg">
          <Image
            src={news.image}
            alt={news.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>
      )}

      <div className="prose text-[16px]">
        <ReactMarkdown>{news.content}</ReactMarkdown>
      </div>
    </div>
  );
};
