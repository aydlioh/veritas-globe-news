import { StaticImageData } from 'next/image';

export interface INews {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string | StaticImageData;
}
