'use client';

import { Button } from '@/shared/ui/button';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface EditNewsButtonProps {
  newsId: string;
}

export const EditNewsButton = ({ newsId }: EditNewsButtonProps) => {
  const router = useRouter();

  const handleEdit = (e: React.MouseEvent) => {
    router.push(`/news/${newsId}/edit-news`);
    e.stopPropagation();

    console.log('edit', newsId);
  };

  return (
    <Button
      variant="ghost"
      size="iconsm"
      onClick={handleEdit}
      className="p-1 hover:bg-gray-200"
    >
      <Pencil />
    </Button>
  );
};
