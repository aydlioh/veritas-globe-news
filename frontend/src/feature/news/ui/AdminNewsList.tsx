'use client';

import { news } from '../model/mock';
import { NewsCardActions } from './NewsCardActions';
import { NewsCardActionsGroup } from './NewsCardActionsGroup';

export default function AdminNewsList() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6">
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
