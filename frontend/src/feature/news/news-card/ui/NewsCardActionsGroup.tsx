'use client';

import { DeleteNewsButton } from '../../delete-news/ui/DeleteNews';
import { EditNewsButton } from '../../edit-news/ui/EditNews';

interface NewsCardActionsGroupProps {
  newsId: string;
}

export const NewsCardActionsGroup = ({ newsId }: NewsCardActionsGroupProps) => {
  return (
    <div className="flex flex-row gap-0 bg-gray-50 rounded-md">
      <DeleteNewsButton newsId={newsId} />
      <EditNewsButton newsId={newsId} />
    </div>
  );
};
