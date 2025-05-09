'use client';

import { DeleteNewsButton } from './DeleteNewsButton';
import { EditNewsButton } from './EditNewsButton';

interface NewsCardActionsGroupProps {
  newsId: string;
}

export const NewsCardActionsGroup = ({ newsId }: NewsCardActionsGroupProps) => {
  return (
    <div className="flex flex-row gap-0 bg-white rounded-md">
      <EditNewsButton newsId={newsId} />
      <DeleteNewsButton newsId={newsId} />
    </div>
  );
};
