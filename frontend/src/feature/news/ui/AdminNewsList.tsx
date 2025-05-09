'use client';

import { news } from '../model/mock';
import { CreateNews } from './CreateNews';
import { NewsCardActions } from './NewsCardActions';
import { NewsCardActionsGroup } from './NewsCardActionsGroup';

export default function AdminNewsList() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-6">
        <CreateNews />
        {news.map((newItem) => (
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
