import { ChangeEvent } from 'react';

export interface IPaginationProps {
  count: number;
  page: number;
  color?: 'primary' | 'secondary';
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
}
