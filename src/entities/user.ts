import { IContact } from '~/entities/contact';
import { IAddress } from '~/entities/address';

export interface IUser {
  id: number;
  name: string;
  last_name: string;
  contact: IContact;
  addresses: IAddress[];
}
