import { NewsCard } from '@/entities/news/ui/NewsCard';
import { INews } from '@/entities/news/model/types';

interface Props {
  news: INews;
}

export function NewsPreviewCard({ news }: Props) {
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <p className="text-xl font-bold">Превью</p>
      <NewsCard news={{ ...news, id: '-1' }} image="news-image-preview" />
    </div>
  );
}
