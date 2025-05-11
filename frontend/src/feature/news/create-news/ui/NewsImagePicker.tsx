import { ImagePicker } from '@/shared/ui/image-picker';

export function NewsImagePicker() {
  return (
    <ImagePicker
      blockKey="news-image-preview"
      text="Картинка новости"
      className="w-full h-full flex-1"
    />
  );
}
