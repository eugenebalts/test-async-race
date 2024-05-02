import { ICar } from '../../../redux/store/slices/garage/types';

export type CreateCarDto = Omit<ICar, 'id'>;

export type UpdateCarDto = Partial<CreateCarDto>;

export interface IGetGarageResponse {
  cars: ICar[];
  total: number;
}
