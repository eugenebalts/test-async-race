import { ChangeEvent } from 'react';
import { SortOption } from '../../redux/store/slices/winners/types';

export interface IOrderSorterProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  currentValue: SortOption;
}
