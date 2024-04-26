import { createAsyncThunk } from '@reduxjs/toolkit';
import winnersApi from '../../../../../services/endpoints/winners/index';
import { IWinner } from '../types';

export const getWinners = createAsyncThunk('winners/getWinners', async () => {
  try {
    const res = await winnersApi.getWinners();

    return res as IWinner[];
  } catch (err) {
    return Promise.reject(err)
  }
})

export const emptyImport = true;
