import { PayloadAction } from '@reduxjs/toolkit';
import { IGarageState } from '../types';

export const updatePages = (state: IGarageState) => {
  const { cars, limit } = state;
  const pages = Math.ceil(Object.keys(cars).length / limit);

  if (pages) {
    state.pages = pages;
    state.currentPage = Math.min(state.currentPage, pages);
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
