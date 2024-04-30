import { CreateCarDto } from '../../services/endpoints/garage/types';

export interface IUpdateCarProps {
  type: 'create' | 'update';
  onApply: (updatedCarData: CreateCarDto) => void;
  initialData?: CreateCarDto;
}
