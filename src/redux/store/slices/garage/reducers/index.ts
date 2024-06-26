import { PayloadAction } from '@reduxjs/toolkit';
import { IGarageState } from '../types';

export const updatePages = (state: IGarageState) => {
  const { totalCount, limit, currentPage } = state;
  const pages = Math.ceil(totalCount / limit);

  if (pages) {
    state.pages = pages;
    state.currentPage = Math.min(currentPage, pages);
  } else {
    state.pages = 1;
    state.currentPage = 1;
  }
};

export const updateCurrentPage = (state: IGarageState, action: PayloadAction<number>) => {
  state.currentPage = action.payload;
};

export const setIsPageOpen = (state: IGarageState, action: PayloadAction<boolean>) => {
  state.isOpen = action.payload;
};
