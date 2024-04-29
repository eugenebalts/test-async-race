import { createAsyncThunk } from '@reduxjs/toolkit';
import winnersApi from '../../../../../services/endpoints/winners/index';
import { IWinner } from '../types';
import { UpdateWinnerDto } from '../../../../../services/endpoints/winners/types';
import { ICreateOrUpdatePayload } from './types';

export const getWinners = createAsyncThunk('winners/getWinners', async (_, { rejectWithValue }) => {
  try {
    const res = await winnersApi.getWinners();

    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// optimistic creation;
export const createOrUpdateWinner = createAsyncThunk(
  'winners/createOrUpdateWinner',
  async (data: ICreateOrUpdatePayload, { rejectWithValue }) => {
    try {
      const isWinnerExists = await winnersApi.getWinnerById(data.id);

      const { wins, time } = isWinnerExists;
      const prevTime = data.time;

      const updatedWins = wins + 1;
      const updatedTime = time < prevTime ? time : prevTime;

      const updateWinnerDto: UpdateWinnerDto = {
        wins: updatedWins,
        time: updatedTime,
      };

      const updatedWinner = await winnersApi.updateWinner(data.id, updateWinnerDto);

      return updatedWinner;
    } catch (err) {
      try {
        const createWinnerDto: IWinner = { ...data, wins: 1 };

        const createdWinner = await winnersApi.createWinner(createWinnerDto);

        return createdWinner;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  },
);

export const deleteWinner = createAsyncThunk(
  'winners/deleteWinner',
  async (id: number, { rejectWithValue }) => {
    try {
      await winnersApi.deleteWinner(id);

      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const emptyImport = true;
