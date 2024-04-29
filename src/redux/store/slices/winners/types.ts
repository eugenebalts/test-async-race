import { IPageState } from '../types';

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersState extends IPageState {
  winners: Record<string, IWinner>;
  sortedWinners: IWinner[];
  sortedBy: WinnersSortOptions,
}

export type WinnersSortOptions = {
  [K in keyof Partial<IWinner>]: SortOption;
}

export type SortOption = 'none' | 'ascending' | 'descending';
