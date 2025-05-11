'use client';

import { Button } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className=" left-4 top-4 rounded-full w-10 h-10 "
      onClick={handleBackClick}
    >
      <ArrowLeft className="w-5 h-5" />
    </Button>
  );
}
