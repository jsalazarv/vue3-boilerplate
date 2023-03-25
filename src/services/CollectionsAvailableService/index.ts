import { useAxios } from '../api';
import type { ICollectionsAvailableService } from '@/services/CollectionsAvailableService/types';
import type { ICollection } from '@/entities/collection';

export const useCollectionsAvailableService =
  (): ICollectionsAvailableService => {
    const client = useAxios();

    return {
      async fetchAll(): Promise<ICollection[]> {
        const response = await client.get<ICollection[]>(
          '/collections/get_collection_available',
        );
        return response.data;
      },

      async fetchOne(id): Promise<ICollection> {
        const response = await client.get<ICollection>(`/users/${id}`);
        return response.data;
      },
    };
  };
