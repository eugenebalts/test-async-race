import { UpdateCarDto } from '../../../../../services/endpoints/garage/types';

export interface IUpdateCarPayload {
  id: number;
  data: UpdateCarDto;
}
