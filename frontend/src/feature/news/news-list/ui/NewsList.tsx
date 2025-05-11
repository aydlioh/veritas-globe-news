'use client';

import { NewsCardActions } from '../../news-card/ui/NewsCardActions';
import { INews } from '@/entities/news/model/store';
import { useNewsList } from '../api/useNewsList';

export default function NewsList() {
  const { data, isLoading, isError } = useNewsList();

  if (isLoading) return <p>loader..</p>;
  if (isError) return <p>error</p>;

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((newItem: INews) => (
          <NewsCardActions key={newItem.id} news={newItem} />
        ))}
      </div>
    </div>
  );
}
