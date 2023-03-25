import type { IContact } from '@/entities/contact';
import type { IAddress } from '@/entities/address';
import type { IImage } from '@/entities/IImage';

export interface IAuthor {
  id: 1;
  name: string;
  description: string;
  contact: IContact;
  addresses: IAddress[];
  images: IImage[];
}
