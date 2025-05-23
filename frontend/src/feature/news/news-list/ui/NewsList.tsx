'use client';

import { NewsCardActions } from '../../news-card/ui/NewsCardActions';
import { NewsCardActionsGroup } from '../../news-card/ui/NewsCardActionsGroup';
import { CreateNews } from '../../create-news/ui/CreateNewsBtn';
import { useNews } from '../api/useNews';
import { INews } from '@/entities/news/model/types';

interface NewsListProps {
  isAdmin?: boolean;
}

export const NewsList = ({ isAdmin = false }: NewsListProps) => {
  const { data: news, isLoading, isError } = useNews();
  // const news = [
  //     {
  //       id: '1',
  //       title: 'Пример новости 1',
  //       previewUrl: '/images/news1.jpg',
  //       createdAt: '2023-05-15T10:00:00Z',
  //       updatedAt: '2023-05-15T10:00:00Z',
  //       authorId: 'user1'
  //     },
  //     {
  //       id: '2',
  //       title: 'Пример новости 2',
  //       previewUrl: '/images/news2.jpg',
  //       createdAt: '2023-05-10T14:30:00Z',
  //       updatedAt: '2023-05-12T09:15:00Z',
  //       authorId: 'user2'
  //     }
  //   ];
  if (isLoading) return <p>loader..</p>;
  if (isError) return <p>error</p>;

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isAdmin && <CreateNews />}
        {news?.map((newsItem: INews) => (
          <NewsCardActions
            key={newsItem.id}
            news={newsItem}
            actionSlot={
              isAdmin ? <NewsCardActionsGroup newsId={newsItem.id} /> : null
            }
          />
        ))}
      </div>
    </div>
  );
};
