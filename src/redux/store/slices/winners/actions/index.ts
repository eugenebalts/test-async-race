import { createAsyncThunk } from '@reduxjs/toolkit';
import winnersApi from '../../../../../services/endpoints/winners/index';
import { IWinner } from '../types';
import { GetWinnersParams, UpdateWinnerDto } from '../../../../../services/endpoints/winners/types';
import { ICreateOrUpdatePayload } from './types';

export const getWinners = createAsyncThunk(
  'winners/getWinners',
  async (params: GetWinnersParams) => {
    const response = await winnersApi.getWinners(params);

    return response;
  },
);

// optimistic creation;
export const createOrUpdateWinner = createAsyncThunk(
  'winners/createOrUpdateWinner',
  async (data: ICreateOrUpdatePayload) => {
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
      const createWinnerDto: IWinner = { ...data, wins: 1 };

      await winnersApi.createWinner(createWinnerDto);

      return null;
    }
  },
);

export const deleteWinner = createAsyncThunk('winners/deleteWinner', async (id: number) => {
  await winnersApi.deleteWinner(id);

  return null;
});

export const emptyImport = true;
