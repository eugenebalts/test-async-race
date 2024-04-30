import { PayloadAction } from '@reduxjs/toolkit';
import { IWinner, IWinnersState } from '../types';

export const handleGetWinnersFulfilled = (
  state: IWinnersState,
  action: PayloadAction<IWinner[]>,
) => {
  const { payload } = action;

  payload.forEach((winner) => {
    state.winners[winner.id] = winner;
  });

  state.totalCount = Object.keys(state.winners).length;
  state.status = 'fulfilled';
  state.error = false;
};

export const handleGetWinnersPending = (state: IWinnersState) => {
  state.status = 'pending';
  state.error = false;
};

export const handleGetWinnersRejected = (state: IWinnersState) => {
  state.status = 'rejected';
  state.error = true;
};

export const handleCreateOrUpdateWinnerFulfilled = (
  state: IWinnersState,
  action: PayloadAction<IWinner>,
) => {
  const { payload } = action;

  if (!state.winners[payload.id]) {
    state.totalCount += 1;
  }

  state.winners[payload.id] = payload;
};

export const handleDeleteWinnerFulfilled = (
  state: IWinnersState,
  action: PayloadAction<number>,
) => {
  const id = action.payload;

  if (state.winners[id]) {
    delete state.winners[id];

    state.totalCount -= 1;
  }
};
