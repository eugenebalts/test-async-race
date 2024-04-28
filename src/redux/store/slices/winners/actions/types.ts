import { IWinner } from '../types';

export type ICreateOrUpdateDto = Omit<IWinner, 'wins'>;
