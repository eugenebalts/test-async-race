import { ChangeEvent } from 'react';

export interface IPaginationProps {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
}
