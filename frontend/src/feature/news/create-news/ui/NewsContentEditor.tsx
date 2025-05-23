import { DescriptionArea } from '@/feature/description-area';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function NewsContentEditor({ value, onChange }: Props) {
  return <DescriptionArea description={value} setDescription={onChange} />;
}
