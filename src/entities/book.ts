import type { IPdf } from '@/entities/pdf';
import type { IImage } from '@/entities/IImage';
import type { IAuthor } from '@/entities/author';

export interface IBook {
  id: number;
  title: string;
  enabled: boolean;
  created_date: string;
  last_update: string;
  pdf: IPdf;
  image: IImage;
  author: IAuthor;
}
