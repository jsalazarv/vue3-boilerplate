import type { IAddress } from '@/entities/address';
import type { IImage } from '@/entities/IImage';

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
