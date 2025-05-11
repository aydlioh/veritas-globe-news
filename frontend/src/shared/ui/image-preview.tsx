'use client';

import Image from 'next/image';
import { useAtomValue, useSetAtom } from 'jotai';
import { imageBlocksAtom, clearImageBlockAtom } from '../lib/image-store';
import { X } from 'lucide-react';

type ImagePreviewProps = {
  blockKey: string;
  className?: string;
  height: string;
  alt?: string;
};

export const ImagePreview = ({
  blockKey,
  className,
  height,
  alt = '',
}: ImagePreviewProps) => {
  const blocks = useAtomValue(imageBlocksAtom);
  const clearImage = useSetAtom(clearImageBlockAtom);
  const block = blocks[blockKey];

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearImage(blockKey);
  };
  if (!block || block.url.length == 0) return null;

  return (
    <div className={`relative ${height} group`}>
      {block?.url && (
        <div>
          <Image
            src={block.url}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            unoptimized
            className={`${className} w-full h-full object-contain`}
            style={{ height: '100%', width: '100%' }}
          />
          <button
            onClick={handleClear}
            className="cursor-pointer absolute top-2 right-2 p-1 bg-red-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600/90"
            aria-label="Remove image"
          >
            <X className="w-2 h-2 font-extrabold text-white" />
          </button>
        </div>
      )}
    </div>
  );
};
