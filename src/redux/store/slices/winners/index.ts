import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createOrUpdateWinner, getWinners } from './actions';
import { IWinner, IWinnersState } from './types';

const initialState: IWinnersState = {
  winners: {},
  totalCount: 0,
  sortedWinners: [],
  pages: 1,
  currentPage: 1,
  limit: 7,
  error: null,
}

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
  },
  extraReducers: (builder) => {
    builder.addCase(getWinners.fulfilled, (state, action: PayloadAction<IWinner[]>) => {
      const { payload } = action;

      payload.forEach((winner) => {
        state.winners[winner.id] = winner;
      });

      state.totalCount = Object.keys(state.winners).length;
    })
    builder.addCase(createOrUpdateWinner.fulfilled, (state, action: PayloadAction<IWinner>) => {
      const { payload } = action;

      if (!state.winners[payload.id]) {
        state.totalCount += 1;
      }

      state.winners[payload.id] = payload;
    })
  }
})

export const winnersActions = winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
