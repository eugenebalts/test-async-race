import { createAsyncThunk } from '@reduxjs/toolkit';
import GarageApi from '../../../../../services/endpoints/garage/index';

export const getGarage = createAsyncThunk('garage/getGarage', async () => {
  try {
    const response = await GarageApi.getCars();

    return response;
  } catch (err) {
    return [];
  }
});

export type Undef = undefined; // temp
