import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/dialog';
import { cn } from '../lib/utils';

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
  title = 'Модальное окно', // значение по умолчанию
}: ModalProps) => {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50',
          'p-6 w-[400px] rounded-xl bg-white shadow-lg',
          className,
        )}
        onClick={handleContentClick}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};
