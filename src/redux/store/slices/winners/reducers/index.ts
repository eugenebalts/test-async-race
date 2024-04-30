import { PayloadAction } from '@reduxjs/toolkit';
import { IWinner, IWinnersState, SortOption, WinnersSortOptions } from '../types';
import { initialState } from '..';

const compareValues = (a: number, b: number, order: SortOption): number => {
  if (order === 'ascending') {
    return a - b;
  }
  if (order === 'descending') {
    return b - a;
  }
  return 0;
};

const sortWinnersArray = (initialArray: IWinner[], sortOption: WinnersSortOptions) =>
  initialArray.sort((a, b) => {
    let result = 0;

    result = compareValues(a.wins, b.wins, sortOption.wins);

    if (result === 0) {
      result = compareValues(a.time, b.time, sortOption.time);
    }

    return result;
  });

export const updatePages = (state: IWinnersState) => {
  const { winners, limit } = state;
  const pages = Math.ceil(Object.keys(winners).length / limit);

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

export const sortByTime = (state: IWinnersState, action: PayloadAction<SortOption>) => {
  state.sortedBy.time = action.payload;
};

export const sortByWins = (state: IWinnersState, action: PayloadAction<SortOption>) => {
  state.sortedBy.wins = action.payload;
};

export const sortWinners = (state: IWinnersState) => {
  const { winners, sortedBy } = state;

  state.sortedWinners = sortWinnersArray(Object.values(winners), sortedBy);
};

export const resetSortOptions = (state: IWinnersState) => {
  state.sortedBy = initialState.sortedBy;
};
