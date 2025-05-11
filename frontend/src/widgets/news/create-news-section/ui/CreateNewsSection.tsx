'use client';

import { CreateNewsForm } from '@/feature/news/create-news/ui/CreateNewsForm';

interface Props {
  newsId?: string;
}

export default function CreateNewsSection({ newsId }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full pt-2">
      <CreateNewsForm newsId={newsId} />
    </div>
  );
}
