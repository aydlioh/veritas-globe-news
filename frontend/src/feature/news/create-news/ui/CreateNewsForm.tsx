'use client';

import { NewsTitleInput } from './NewsTitleInput';
import { NewsImagePicker } from './NewsImagePicker';
import { NewsPreviewCard } from './NewsPreviewCard';
import { NewsContentEditor } from './NewsContentEditor'; // новое название компонента
import { NewsSubmitButton } from './NewsSubmitButton';
import { useManageNews } from '../model/useManageNews';

interface Props {
  newsId?: string;
}

export function CreateNewsForm({ newsId }: Props) {
  const {
    title,
    setTitle,
    content,
    setContent,
    news,
    submitNews,
    isSubmitting,
    isValid,
  } = useManageNews(newsId);

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
        <NewsPreviewCard news={{ ...news, id: news.id ?? '0' }} />
      </div>
      <NewsContentEditor value={content} onChange={setContent} />
      <NewsSubmitButton
        onSubmit={submitNews}
        isEdit={!!newsId}
        disabled={!isValid || isSubmitting}
      />
    </div>
  );
}
