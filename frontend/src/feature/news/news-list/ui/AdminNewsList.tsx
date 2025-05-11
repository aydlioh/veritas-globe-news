'use client';

import { INews } from '@/entities/news/model/store';
import { CreateNews } from '../../create-news/ui/CreateNewsBtn';
import { NewsCardActions } from '../../news-card/ui/NewsCardActions';
import { NewsCardActionsGroup } from '../../news-card/ui/NewsCardActionsGroup';
import { useNewsList } from '../api/useNewsList';

export default function AdminNewsList() {
  const { data, isLoading, isError } = useNewsList();

  if (isLoading) return <p>loader..</p>;
  if (isError) return <p>error</p>;

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-6">
        <CreateNews />
        {data?.map((newItem: INews) => (
          <NewsCardActions
            key={newItem.id}
            news={newItem}
            actionSlot={<NewsCardActionsGroup newsId={newItem.id} />}
          />
        ))}
      </div>
    </div>
  );
}
