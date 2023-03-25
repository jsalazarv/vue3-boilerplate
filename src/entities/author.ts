import { IContact } from '~/entities/contact';
import { IAddress } from '~/entities/address';
import { IImage } from '~/entities/IImage';

export interface IAuthor {
  id: 1;
  name: string;
  description: string;
  contact: IContact;
  addresses: IAddress[];
  images: IImage[];
}
