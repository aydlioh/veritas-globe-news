'use client';

import { useState, useEffect } from 'react';
import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';
import { User } from 'lucide-react';
import { Modal } from '@/shared/ui/modal';

export const ProfileButton = () => {
  const { router } = useAppRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    setIsAuthenticated(!!token);
  }, []);

  const handleClick = () => {
    if (isAuthenticated) {
      setIsModalOpen(true);
    } else {
      router.push('/auth-select');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access-token');
    setIsModalOpen(false);
    router.push('/auth-select');
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleClick}>
        <User />
      </Button>

      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="flex flex-col gap-4">
          <p>Вы уверены, что хотите выйти?</p>
          <div className="flex flex-col gap-2">
            <Button variant="destructive" onClick={handleLogout}>
              Выйти
            </Button>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Отмена
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
