import { IWinner } from '../../../redux/store/slices/winners/types';

export type UpdateWinnerDto = Omit<IWinner, 'id'>;
