'use client';

import { DescriptionArea } from '@/feature/description-area';

import { ImagePicker } from '@/shared/ui/image-picker';
import { ImagePreview } from '@/shared/ui/image-preview';
import { useState } from 'react';

export default function CreateNewsSection() {
  const [description, setDescription] = useState('');

  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <div className="w-full mx-auto py-6 flex flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <ImagePicker blockKey="news-image" className="w-full h-auto" />
          <ImagePreview
            blockKey="news-image"
            className="h-full"
            height={'h-80'}
          />
        </div>
      </div>
      <DescriptionArea
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}
