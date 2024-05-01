import { IPageState } from '../types';

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export type SortKeys = keyof IWinner;
export type SortOrder = 'ASC' | 'DESC';

export interface IWinnersSortOptions {
  sort: SortKeys;
  order: SortOrder;
}

export interface IWinnersState extends IPageState {
  winners: IWinner[];
  sortOptions: IWinnersSortOptions;
  reloadTrigger: boolean;
}
