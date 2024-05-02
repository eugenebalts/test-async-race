import { IWinner } from '../types';

export type ICreateOrUpdatePayload = Omit<IWinner, 'wins'>;
