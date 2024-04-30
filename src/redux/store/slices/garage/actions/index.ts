import { createAsyncThunk } from '@reduxjs/toolkit';
import GarageApi from '../../../../../services/endpoints/garage/index';
import { CreateCarDto } from '../../../../../services/endpoints/garage/types';
import getRandomIndex from '../../../../../utils/get-random-index';
import { CARS_BRANDS, CARS_MODELS } from '../../../../../constants';
import { ICar } from '../types';
import getRandomColor from '../../../../../utils/get-random-color';
import { IUpdateCarPayload } from './types';

export const getGarage = createAsyncThunk('garage/getGarage', async () => {
  const response = await GarageApi.getCars();

  return response;
});

export const createCar = createAsyncThunk('garage/createCar', async (data: CreateCarDto) => {
  const response = await GarageApi.createCar(data);

  return response;
});

export const generateCars = createAsyncThunk('garage/generateCars', async () => {
  const emptyMap = Array.from({ length: 100 });
  const generatedCars: ICar[] = [];

  await Promise.all(
    emptyMap.map(async () => {
      const carName = CARS_BRANDS[getRandomIndex(CARS_BRANDS.length)];
      const carModel = CARS_MODELS[getRandomIndex(CARS_MODELS.length)];

      const name = `${carName} ${carModel}`;
      const color = getRandomColor();

      const response = await GarageApi.createCar({ name, color });

      generatedCars.push(response);
    }),
  );

  return generatedCars;
});

export const updateCar = createAsyncThunk(
  'garage/updateCar',
  async ({ id, data }: IUpdateCarPayload) => {
    const response = await GarageApi.updateCar(id, data);

    return response;
  },
);

export const deleteCar = createAsyncThunk(
  'garage/deleteCar',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await GarageApi.deleteCar(id);

      return response;
    } catch (err) {
      return rejectWithValue(id);
    }
  },
);
