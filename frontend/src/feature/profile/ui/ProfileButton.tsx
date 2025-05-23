'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';
import { User } from 'lucide-react';

export const ProfileButton = () => {
  const { router } = useAppRouter();

  const handleClick = () => {
    router.push('/auth-select');
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <User />
    </Button>
  );
};
