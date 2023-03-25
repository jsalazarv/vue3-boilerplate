import { IImage } from '~/entities/IImage';
import { IAddress } from '~/entities/address';

export interface IEvents {
  id: number;
  title: string;
  short_description: string;
  description: string;
  addresses: IAddress[];
  enabled: boolean;
  created_date: string;
  last_update: string;
  date: {
    start_date: string;
    end_date: string;
  };
  image: IImage;
}
