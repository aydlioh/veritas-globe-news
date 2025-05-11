import { Button } from '@/shared/ui/button';

interface Props {
  onSubmit: () => void;
  isEdit: boolean;
  disabled?: boolean;
}

export function NewsSubmitButton({ onSubmit, isEdit, disabled }: Props) {
  return (
    <Button size="lg" onClick={onSubmit} disabled={disabled}>
      {isEdit ? 'Сохранить изменения' : 'Опубликовать новость'}
    </Button>
  );
}
