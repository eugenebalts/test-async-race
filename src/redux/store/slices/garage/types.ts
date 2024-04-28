import { IPageState } from '../types';

export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IGarageState extends IPageState {
  isOpen: boolean;
  cars: Record<string, ICar>;
}
