import type { Service } from '@/services/api/types';
import type { ICollection } from '@/entities/collection';

export interface ICollectionsAvailableService<T = ICollection>
  extends Service<T> {
  // customAction: ()=>Promise<T[]>
}
