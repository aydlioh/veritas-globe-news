import { Input } from '@/shared/ui/input';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function NewsTitleInput({ value, onChange }: Props) {
  return (
    <Input
      placeholder="Заголовок новости"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
