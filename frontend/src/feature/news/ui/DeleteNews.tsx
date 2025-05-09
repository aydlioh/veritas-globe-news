'use client';

import { Button } from '@/shared/ui/button';
import { Trash2 } from 'lucide-react';

interface DeleteNewsButtonProps {
  newsId: string;
}

export const DeleteNewsButton = ({ newsId }: DeleteNewsButtonProps) => {
  const handleDelete = () => {
    console.log('delete', newsId);
  };

  return (
    <Button
      variant="ghost"
      size="iconsm"
      onClick={handleDelete}
      className="p-1 "
    >
      <Trash2 />
    </Button>
  );
};
