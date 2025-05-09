import { StaticImageData } from 'next/image';

export interface INews {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
}
