import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { createOrUpdateWinner, deleteWinner, getWinners } from './actions';
import { IWinnersState } from './types';
import { updateCurrentPage, sortWinners } from './reducers';
import {
  handleCreateOrUpdateWinnerFulfilled,
  handleDeleteWinnerFulfilled,
  handleGetWinnersFulfilled,
  handleGetWinnersPending,
  handleGetWinnersRejected,
} from './extra-reducers';

export const initialState: IWinnersState = {
  winners: [],
  totalCount: 0,
  sortOptions: {
    sort: 'id',
    order: 'ASC',
  },
  pages: 1,
  currentPage: 1,
  limit: 10,
  status: 'pending',
  error: false,
  reloadTrigger: false,
};

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    updateCurrentPage,
    sortWinners,
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
