import { CreateCarDto } from '../../../services/endpoints/garage/types';
import { IUpdateCarProps } from '../types';

export interface IUpdateFormProps extends Pick<IUpdateCarProps, 'onApply'> {
  initialData: CreateCarDto;
}
