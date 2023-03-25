import { IPicture } from '~/entities/picture';

export interface ICollection {
  id: number;
  title: string;
  is_new_collection: boolean;
  is_available: boolean;
  publication_date: string;
  enabled: boolean;
  created_date: string;
  last_update: string;
  pictures: IPicture[];
}
