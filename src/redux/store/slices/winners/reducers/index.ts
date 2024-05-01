import { PayloadAction } from '@reduxjs/toolkit';
import { IWinnersSortOptions, IWinnersState } from '../types';

export const updatePages = (state: IWinnersState) => {
  const { totalCount, limit } = state;
  const pages = Math.ceil(totalCount / limit);

  if (pages) {
    state.pages = pages;
    state.currentPage = Math.min(state.currentPage, pages);
  } else {
    state.pages = 1;
    state.currentPage = 1;
  }
};

export const updateCurrentPage = (state: IWinnersState, action: PayloadAction<number>) => {
  state.currentPage = action.payload;
};

export const sortWinners = (state: IWinnersState, action: PayloadAction<IWinnersSortOptions>) => {
  state.sortOptions = action.payload;
};
