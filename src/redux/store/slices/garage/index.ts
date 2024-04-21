import { createSlice } from '@reduxjs/toolkit';
import { createCar, generateCars, getGarage, updateCar } from './actions';
import { Car, GarageState } from './types';

const initialState: GarageState = {
  cars: [],
  pages: 1,
  currentPage: 1,
  carsOnPage: 7,
  status: null,
  CAR_WIDTH: 60,
  START_POS: 160,
  END_POS: 60,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    updatePages(state) {
      state.pages = Math.ceil(state.cars.length / state.carsOnPage);
    },
    updateCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGarage.fulfilled, (state, { payload }) => {
      state.cars = payload as Car[];
    });
    builder.addCase(createCar.fulfilled, (state, { payload }) => {
      state.cars = [...state.cars, payload as Car];
    });
    builder.addCase(generateCars.fulfilled, (state, { payload }) => {
      const sortedPayload = (payload as Car[]).sort((a, b) => a.id - b.id);
      
      state.cars = [...state.cars, ...sortedPayload];
    });
    builder.addCase(updateCar.fulfilled, (state, { payload }) => {
      const carIndex = state.cars.findIndex((car) => car.id === (payload as Car).id);

      if (carIndex !== -1) {
        state.cars[carIndex] = payload as Car;
      }
    });
  },
});

export const garageReducer = garageSlice.reducer;
export const garageActions = garageSlice.actions;
