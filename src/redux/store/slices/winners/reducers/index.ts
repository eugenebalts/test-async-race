import { PayloadAction } from '@reduxjs/toolkit';
import { IWinnersSortOptions, IWinnersState } from '../types';

export const updateCurrentPage = (state: IWinnersState, action: PayloadAction<number>) => {
  state.currentPage = action.payload;
};

export const sortWinners = (state: IWinnersState, action: PayloadAction<IWinnersSortOptions>) => {
  state.sortOptions = action.payload;
};
