import { CreateCarDto } from '../../services/endpoints/garage/types';

export interface UpdateCarProps {
  type: 'create' | 'update';
  onApply: (updatedCarData: CreateCarDto) => void;
  initialData?: CreateCarDto;
}
