import { IImage } from '~/entities/IImage';
import { IAuthor } from '~/entities/author';
import { IPdf } from '~/entities/pdf';

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
