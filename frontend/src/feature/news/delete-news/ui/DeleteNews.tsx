'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Trash2 } from 'lucide-react';
import { Modal } from '@/shared/ui/modal';
import { useDeleteNews } from '../api/useDeleteNews';

interface DeleteNewsButtonProps {
  newsId: string;
}

export const DeleteNewsButton = ({ newsId }: DeleteNewsButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteMutation = useDeleteNews();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteMutation.mutate(newsId, {
      onSuccess: () => {
        setIsModalOpen(false);
      },
      onError: (error) => {
        setIsModalOpen(false);
        console.error(error);
      },
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        size="iconsm"
        onClick={handleDelete}
        className="p-1 hover:bg-gray-200"
        disabled={deleteMutation.isPending}
      >
        <Trash2 />
      </Button>

      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="flex flex-col gap-6 ">
          <h3 className="text-lg font-bold">Удаление новости</h3>
          <p className="text-M">Вы уверены, что хотите удалить эту новость?</p>

          <div className="w-full flex gap-2 flex-col">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Отмена
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? 'Удаление...' : 'Удалить'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
