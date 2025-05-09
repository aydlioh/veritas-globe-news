'use client';

import { DescriptionArea } from '@/feature/description-area';
import Preview from '@/feature/preview/ui/Preview';

import { ImagePicker } from '@/shared/ui/image-picker';
// import { ImagePreview } from '@/shared/ui/image-preview';
import { useState } from 'react';

export default function CreateNewsSection() {
  const [description, setDescription] = useState('');

  return (
    <div className="flex flex-col gap-6 w-full pt-2">
      <div className="w-full mx-auto flex flex-row gap-6">
        {/* <div className=" flex flex-1 flex-col gap-4"> */}
        <ImagePicker
          blockKey="news-image-preview"
          className="w-full h-auto flex-1"
        />

        {/* </div> */}
        <Preview />
      </div>
      <DescriptionArea
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}
