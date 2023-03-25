import { IPicture } from '~/entities/picture';

export interface IOrder {
  id: number;
  client_id: number;
  address_id: number;
  order_number: number;
  total: number;
  delivery_status: string;
  enabled: boolean;
  created_date: string;
  last_update: string;
  products: IPicture[];
}
