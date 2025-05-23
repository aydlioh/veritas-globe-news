'use client';

import { imageBlocksAtom } from '@/shared/lib/imageStore';
import { atom, Getter, Setter } from 'jotai';
import { INewsForm, INewsDetailsForm, INews, INewsDetails } from './types';

export const newsTitleAtom = atom('');
export const newsContentAtom = atom('');
export const newsPreviewUrlAtom = atom((get) => {
  const imageBlocks = get(imageBlocksAtom);
  return imageBlocks['news-image-preview']?.url || '';
});
export const newsImageFileAtom = atom<File | null>(null);

export const newsFormDataAtom = atom<INewsForm>((get) => ({
  title: get(newsTitleAtom),
  previewUrl: get(newsPreviewUrlAtom),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  authorId: '',
}));

export const newsDetailsFormDataAtom = atom<INewsDetailsForm>((get) => ({
  title: get(newsTitleAtom),
  content: get(newsContentAtom),
  previewUrl: get(newsPreviewUrlAtom),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  authorId: '',
  author: {
    id: '',
    username: '',
    email: '',
  },
}));

export const submitNewsAtom = atom(null, (get, set, isDetailed: boolean) => {
  const formData = isDetailed
    ? get(newsDetailsFormDataAtom)
    : get(newsFormDataAtom);
  console.log('данные новости:', formData);
  return formData;
});

export const resetNewsFormAtom = atom(null, (_, set) => {
  set(newsTitleAtom, '');
  set(newsContentAtom, '');
});

export const loadNewsDataAtom = atom(
  null,
  (get: Getter, set: Setter, data: INews | INewsDetails) => {
    set(newsTitleAtom, data.title);
    set(imageBlocksAtom, (prev) => ({
      ...prev,
      ['news-image-preview']: {
        ...prev['news-image-preview'],
        url: data.previewUrl,
      },
    }));

    if ('content' in data) {
      set(newsContentAtom, (data as INewsDetails).content);
    }
  },
);
