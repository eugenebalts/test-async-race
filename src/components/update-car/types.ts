import { CreateCarDto } from '../../services/endpoints/garage/types';

export interface UpdateCarProps {
  type: 'create' | 'update';
  onApply: (name: string, color: string) => void;
  initialData?: CreateCarDto;
}

