import { IImage } from '~/entities/IImage';

export interface IPicture {
  id: number;
  title: string;
  sku: string;
  technique: string;
  sizes: string;
  price: string;
  short_description: string;
  description: string;
  sold: boolean;
  enabled: boolean;
  created_date: string;
  last_update: string;
  images: IImage[];
}
