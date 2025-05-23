'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Modal = ({
  open,
  onOpenChange,
  children,
  className = '',
  title,
}: ModalProps) => {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`reltive p-6 rounded-xl w-[400px] ${className}`}
        onClick={handleContentClick}
      >
        {children}
      </DialogContent>

      <DialogHeader>
        <DialogTitle>{title ? title : ''}</DialogTitle>
      </DialogHeader>
    </Dialog>
  );
};
