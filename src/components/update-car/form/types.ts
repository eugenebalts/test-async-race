import { CreateCarDto } from '../../../services/endpoints/garage/types';
import { UpdateCarProps } from '../types';

export interface IUpdateFormProps extends Pick<UpdateCarProps, 'initialData'> {
  initialData: CreateCarDto;
  onApply: (updatedCarData: CreateCarDto) => void;
}
