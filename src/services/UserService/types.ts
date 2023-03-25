import type { Service } from '@/services/api/types';
import type { IUser } from '@/entities/user';

export interface IUserService<T = IUser> extends Service<T> {
  // customAction: ()=>Promise<T[]>
}
