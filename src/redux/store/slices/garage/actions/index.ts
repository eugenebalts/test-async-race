import { createAsyncThunk } from '@reduxjs/toolkit';
import GarageApi from '../../../../../services/endpoints/garage/index';
import { CreateCar } from '../../../../../services/endpoints/garage/types';

export const getGarage = createAsyncThunk('garage/getGarage', async () => {
  try {
    const response = await GarageApi.getCars();

    return response;
  } catch (err) {
    return [];
  }
});

export const createCar = createAsyncThunk('garage/createCar', async (data: CreateCar) => {
  try {
    const response = await GarageApi.createCar(data);

    return response;
  } catch (err) {
    return Promise.resolve(err);
  }
});
