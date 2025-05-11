'use client';

import { imageBlocksAtom } from '@/shared/lib/image-store';
import { atom } from 'jotai';
import { INewsForm } from './types';

export interface INews {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
}

export const newsTitleAtom = atom('');
export const newsDescriptionAtom = atom('');
export const newsImageAtom = atom((get) => {
  const imageBlocks = get(imageBlocksAtom);
  return imageBlocks['news-image-preview']?.url || '';
});

export const newsDateAtom = atom(() => {
  const now = new Date();
  return now.toLocaleDateString('ru-RU');
});

export const newsFormDataAtom = atom<INewsForm>((get) => ({
  name: get(newsTitleAtom),
  description: get(newsDescriptionAtom),
  image: get(newsImageAtom),
  date: get(newsDateAtom),
}));

export const submitNewsAtom = atom(null, (get) => {
  const formData = get(newsFormDataAtom);
  console.log('Данные новости:', formData);
  return formData;
});
