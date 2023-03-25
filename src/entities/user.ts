import type { IContact } from '@/entities/contact';
import type { IAddress } from '@/entities/address';

export interface IUser {
  id: number;
  name: string;
  last_name: string;
  contact: IContact;
  addresses: IAddress[];
}
