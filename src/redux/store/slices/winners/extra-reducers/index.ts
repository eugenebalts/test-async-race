import { PayloadAction } from '@reduxjs/toolkit';
import { IWinnersState } from '../types';
import { IGetWinnersResponse } from '../../../../../services/endpoints/winners/types';

export const handleGetWinnersFulfilled = (
  state: IWinnersState,
  action: PayloadAction<IGetWinnersResponse>,
) => {
  const { winners, total } = action.payload;
  const { limit, currentPage } = state;

  const pages = Math.ceil(total / limit);

  if (pages) {
    state.pages = pages;
    state.currentPage = Math.min(currentPage, pages);
  } else {
    state.pages = 1;
    state.currentPage = 1;
  }

  state.winners = winners;
  state.totalCount = total;
  state.status = 'fulfilled';
  state.error = false;
  state.reloadTrigger = false;
};

export const handleGetWinnersPending = (state: IWinnersState) => {
  state.status = 'pending';
  state.error = false;
};

export const handleGetWinnersRejected = (state: IWinnersState) => {
  state.status = 'rejected';
  state.error = true;
  state.reloadTrigger = false;
};

export const handleCreateOrUpdateWinnerFulfilled = (state: IWinnersState) => {
  state.reloadTrigger = true;
};

export const handleDeleteWinnerFulfilled = (state: IWinnersState) => {
  state.reloadTrigger = true;
};
