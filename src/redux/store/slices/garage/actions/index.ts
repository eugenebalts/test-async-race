import { createAsyncThunk } from '@reduxjs/toolkit';
import GarageApi from '../../../../../services/endpoints/garage/index';
import { CreateCar } from '../../../../../services/endpoints/garage/types';
import getRandomIndex from '../../../../../utils/getRandomIndex';
import { CARS_BRANDS, CARS_MODELS } from '../../../../../constants/cars';
import { Car } from '../types';
import getRandomColor from '../../../../../utils/getRandomColor';

export const getGarage = createAsyncThunk('garage/getGarage', async () => {
  try {
    const response = await GarageApi.getCars();

    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const createCar = createAsyncThunk('garage/createCar', async (data: CreateCar) => {
  try {
    const response = await GarageApi.createCar(data);

    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const generateCars = createAsyncThunk('garage/generateCars', async () => {
  const emptyMap = Array.from({ length: 100 });
  const generatedCars: Car[] = [];

  await Promise.allSettled(
    emptyMap.map(async () => {
      const carName = CARS_BRANDS[getRandomIndex(CARS_BRANDS.length)];
      const carModel = CARS_MODELS[getRandomIndex(CARS_MODELS.length)];

      const name = `${carName} ${carModel}`;
      const color = getRandomColor();

      try {
        const response = await GarageApi.createCar({ name, color });

        generatedCars.push(response as Car);
      } catch (err) {
        throw new Error(`Cannot create car with error ${err}`);
      }
    }),
  );

  return generatedCars;
});
