import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { createOrUpdateWinner, deleteWinner, getWinners } from './actions';
import { IWinnersState } from './types';
import {
  updatePages,
  updateCurrentPage,
  sortByTime,
  sortByWins,
  sortWinners,
  resetSortOptions,
} from './reducers';
import {
  handleCreateOrUpdateWinnerFulfilled,
  handleDeleteWinnerFulfilled,
  handleGetWinnersFulfilled,
  handleGetWinnersPending,
  handleGetWinnersRejected,
} from './extra-reducers';

export const initialState: IWinnersState = {
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
  status: 'pending',
  error: false,
};

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    updatePages,
    updateCurrentPage,
    sortByTime,
    sortByWins,
    sortWinners,
    resetSortOptions,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IWinnersState>) => {
    builder.addCase(getWinners.fulfilled, handleGetWinnersFulfilled);
    builder.addCase(getWinners.pending, handleGetWinnersPending);
    builder.addCase(getWinners.rejected, handleGetWinnersRejected);
    builder.addCase(createOrUpdateWinner.fulfilled, handleCreateOrUpdateWinnerFulfilled);
    builder.addCase(deleteWinner.fulfilled, handleDeleteWinnerFulfilled);
  },
});

export const winnersActions = winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
