import { createSlice } from '@reduxjs/toolkit';
import { createCar, deleteCar, generateCars, getGarage, updateCar } from './actions';
import { IGarageState } from './types';

const initialState: IGarageState = {
  cars: {},
  pages: 1,
  currentPage: 1,
  carsOnPage: 7,
  status: null,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    updatePages(state) {
      state.pages = Math.ceil(Object.keys(state.cars).length / state.carsOnPage);
    },
    updateCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGarage.fulfilled, (state, { payload }) => {
      payload.forEach((car) => {
        state.cars[car.id] = car;
      });
    });
    builder.addCase(createCar.fulfilled, (state, { payload }) => {
      const newCar = payload;

      state.cars[newCar.id] = newCar;
    });
    builder.addCase(generateCars.fulfilled, (state, { payload }) => {
      const sortedPayload = payload.sort((a, b) => a.id - b.id);

      sortedPayload.forEach((car) => {
        state.cars[car.id] = car;
      });
    });
    builder.addCase(updateCar.fulfilled, (state, { payload }) => {
      const updatedCar = payload;

      state.cars[updatedCar.id] = updatedCar;
    });
    builder.addCase(deleteCar.fulfilled, (state, { payload }) => {
      const carId = payload;

      delete state.cars[carId];
    });
  },
});

export const garageReducer = garageSlice.reducer;
export const garageActions = garageSlice.actions;
