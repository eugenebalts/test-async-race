import { IPageState } from '../types';

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersState extends IPageState {
  winners: Record<string, IWinner>;
  sortedWinners: IWinner[];
}
