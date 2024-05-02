import { UpdateCarDto } from '../../../../../services/endpoints/garage/types';

export interface IUpdateCarPayload {
  id: number;
  data: UpdateCarDto;
}

export interface IDeleteCarPayload {
  id: number;
  shouldFetchNext: boolean;
}
