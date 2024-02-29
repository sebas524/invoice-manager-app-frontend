import { Region } from './region.interface';

export interface Client {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string;
  image?: string;
  region: Region;
}
