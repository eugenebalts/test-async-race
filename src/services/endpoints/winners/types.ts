import { IWinner, IWinnersSortOptions } from '../../../redux/store/slices/winners/types';
import { IGetPageParams } from '../types';

export type UpdateWinnerDto = Omit<IWinner, 'id'>;

export type GetWinnersParams = IGetPageParams & IWinnersSortOptions;

export interface IGetWinnersResponse {
  winners: IWinner[];
  total: number;
}
