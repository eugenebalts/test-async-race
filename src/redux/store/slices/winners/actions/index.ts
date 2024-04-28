import { createAsyncThunk } from '@reduxjs/toolkit';
import winnersApi from '../../../../../services/endpoints/winners/index';
import { IWinner } from '../types';
import { UpdateWinnerDto } from '../../../../../services/endpoints/winners/types';
import { ICreateOrUpdateDto } from './types';

export const getWinners = createAsyncThunk('winners/getWinners', async (_, {rejectWithValue}) => {
  try {
    const res = await winnersApi.getWinners();

    return res as IWinner[];
  } catch (err) {
    return rejectWithValue(err);
  }
});

// optimistic creation;
export const createOrUpdateWinner = createAsyncThunk('winners/createOrUpdateWinner', async (data: ICreateOrUpdateDto, {rejectWithValue}) => {
  try {
    const isWinnerExists = await winnersApi.getWinnerById(data.id);

    const {wins, time} = isWinnerExists;
    
    const updatedWins = wins + 1;
    const updatedTime = time < data.time ? time : data.time;

    const updateWinnerDto: UpdateWinnerDto = {
      wins: updatedWins,
      time: updatedTime,
    }

    const updatedWinner = await winnersApi.updateWinner(data.id, updateWinnerDto);
      
    return updatedWinner;
  } catch (error) {
    try {
      const createWinnerDto: IWinner = {...data, wins: 1};

      const createdWinner = await winnersApi.createWinner(createWinnerDto);
      
      return createdWinner;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
})

export const emptyImport = true;
