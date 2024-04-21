import { Car } from '../../../redux/store/slices/garage/types';

export type CreateCarDto = Omit<Car, 'id'>;

export type UpdateCarDto = Partial<CreateCarDto>;
