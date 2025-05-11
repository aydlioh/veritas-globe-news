'use client';

import { useCreateNews } from '../model/useCreateNews';
import { NewsTitleInput } from './NewsTitleInput';
import { NewsImagePicker } from './NewsImagePicker';
import { NewsPreviewCard } from './NewsPreviewCard';
import { NewsDescriptionEditor } from './NewsDescriptionEditor';
import { NewsSubmitButton } from './NewsSubmitButton';

interface Props {
  newsId?: string;
}

export function CreateNewsForm({ newsId }: Props) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    news,
    submitNews,
    isSubmitting,
    isValid,
  } = useCreateNews(newsId);

  if (isSubmitting) {
    return <p className="text-muted">Загрузка новости...</p>;
  }

  return (
    <div className="flex flex-col gap-6 w-full pt-2">
      <div className="flex flex-row gap-6">
        <div className="w-full flex flex-col gap-2">
          <NewsTitleInput value={title} onChange={setTitle} />
          <NewsImagePicker />
        </div>
        <NewsPreviewCard news={{ ...news, id: '0' }} />
      </div>
      <NewsDescriptionEditor value={description} onChange={setDescription} />
      <NewsSubmitButton
        onSubmit={submitNews}
        isEdit={!!newsId}
        disabled={!isValid || isSubmitting}
      />
    </div>
  );
}
