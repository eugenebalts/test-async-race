import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getWinners } from './actions';
import { IWinner, IWinnersState } from './types';

const initialState: IWinnersState = {
  winners: {},
  sortedWinners: [],
  pages: 1,
  currentPage: 1,
  winnersOnPage: 7,
  status: null,
}

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWinners.fulfilled, (state, action: PayloadAction<IWinner[]>) => {
      const { payload } = action;

      payload.forEach((winner) => {
        state.winners[winner.id] = winner;
      });
    })}
})

export const winnersActions = winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
