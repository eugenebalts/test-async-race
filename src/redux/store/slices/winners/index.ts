import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createOrUpdateWinner, deleteWinner, getWinners } from './actions';
import { IWinner, WinnersSortOptions, IWinnersState, SortOption } from './types';

const compareValues = (a: number, b: number, order: SortOption): number => {
  if (order === 'ascending') {
    return a - b;
  }
  if (order === 'descending') {
    return b - a;
  }
  return 0;
};

const sortWinners = (initialArray: IWinner[], sortOption: WinnersSortOptions) =>
  initialArray.sort((a, b) => {
    let result = 0;

    result = compareValues(a.wins, b.wins, sortOption.wins);

    if (result === 0) {
      result = compareValues(a.time, b.time, sortOption.time);
    }

    return result;
  });

const initialState: IWinnersState = {
  winners: {},
  totalCount: 0,
  sortedWinners: [],
  sortedBy: {
    time: 'none',
    wins: 'none',
  },
  pages: 1,
  currentPage: 1,
  limit: 7,
  error: null,
};

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    updatePages(state) {
      const { winners, limit } = state;
      const pages = Math.ceil(Object.keys(winners).length / limit);

      if (pages) {
        state.pages = pages;
        state.currentPage = Math.min(state.currentPage, pages);
      } else {
        state.pages = 1;
        state.currentPage = 1;
      }
    },
    updateCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    sortByTime(state, action: PayloadAction<SortOption>) {
      state.sortedBy.time = action.payload;
    },
    sortByWins(state, action: PayloadAction<SortOption>) {
      state.sortedBy.wins = action.payload;
    },
    sortWinners(state) {
      const { winners, sortedBy } = state;

      state.sortedWinners = sortWinners(Object.values(winners), sortedBy);
    },
    resetSortOptions(state) {
      state.sortedBy = initialState.sortedBy;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWinners.fulfilled, (state, action: PayloadAction<IWinner[]>) => {
      const { payload } = action;

      payload.forEach((winner) => {
        state.winners[winner.id] = winner;
      });

      state.totalCount = Object.keys(state.winners).length;
    });
    builder.addCase(createOrUpdateWinner.fulfilled, (state, action: PayloadAction<IWinner>) => {
      const { payload } = action;

      if (!state.winners[payload.id]) {
        state.totalCount += 1;
      }

      state.winners[payload.id] = payload;
    });
    builder.addCase(deleteWinner.fulfilled, (state, action: PayloadAction<number>) => {
      const id = action.payload;

      if (state.winners[id]) {
        delete state.winners[id];

        state.totalCount -= 1;
      }
    });
  },
});

export const winnersActions = winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
