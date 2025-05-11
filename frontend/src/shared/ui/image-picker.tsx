'use client';

import { useSetAtom } from 'jotai';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { updateImageBlockAtom } from '../lib/image-store';

type ImagePickerProps = {
  blockKey: string;
  className?: string;
  aspectRatio?: string;
  text?: string;
};

export const ImagePicker = ({
  blockKey,
  className,
  text,
}: ImagePickerProps) => {
  const updateBlock = useSetAtom(updateImageBlockAtom);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1,
    onDrop: (files) => {
      if (files[0]) {
        updateBlock({ blockKey, file: files[0] });
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-1 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-graphite/40 bg-primary/0' : 'border-graphite/20',
        className,
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2 h-full">
        <div className="my-auto flex flex-row items-center gap-2">
          <Upload className="w-6 h-6 text-muted-foreground" />
          <p className="font-medium">
            {isDragActive
              ? 'Отпустите изображение'
              : text || 'Перетащите или нажмите'}
          </p>
        </div>
      </div>
    </div>
  );
};
