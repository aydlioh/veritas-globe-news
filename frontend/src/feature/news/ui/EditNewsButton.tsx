'use client';

import { Button } from '@/shared/ui/button';
import { Pencil } from 'lucide-react';
// import { useRouter } from 'next/navigation';

interface EditNewsButtonProps {
  newsId: string;
}

export const EditNewsButton = ({ newsId }: EditNewsButtonProps) => {
  //   const router = useRouter();

  const handleEdit = () => {
    // router.push(`/news/${newsId}/edit`);
    console.log('edit', newsId);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleEdit} className="p-1">
      <Pencil />
    </Button>
  );
};
