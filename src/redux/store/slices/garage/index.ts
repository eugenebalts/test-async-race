import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCar, deleteCar, generateCars, getGarage, updateCar } from './actions';
import { ICar, IGarageState } from './types';

const initialState: IGarageState = {
  isOpen: false,
  cars: {},
  totalCount: 0,
  pages: 1,
  currentPage: 1,
  limit: 7,
  error: null,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    updatePages(state) {
      const { cars, limit } = state;
      const pages = Math.ceil(Object.keys(cars).length / limit);

      if (pages) {
        state.pages = pages;
        state.currentPage = Math.min(state.currentPage, pages);
      } else {
        state.pages = 1;
        state.currentPage = 1;
      }
    },
    updateCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setIsPageOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGarage.fulfilled, (state, action: PayloadAction<ICar[]>) => {
      const recievedCars = action.payload;

      recievedCars.forEach((car) => {
        state.cars[car.id] = car;
      });

      state.totalCount = Object.keys(state.cars).length;
    });
    builder.addCase(createCar.fulfilled, (state, action: PayloadAction<ICar>) => {
      const newCar = action.payload;

      state.cars[newCar.id] = newCar;
      state.totalCount = Object.keys(state.cars).length;
    });
    builder.addCase(generateCars.fulfilled, (state, action: PayloadAction<ICar[]>) => {
      const sortedPayload = action.payload.sort((a, b) => a.id - b.id);

      sortedPayload.forEach((car) => {
        state.cars[car.id] = car;
      });

      state.totalCount = Object.keys(state.cars).length;
    });
    builder.addCase(updateCar.fulfilled, (state, action: PayloadAction<ICar>) => {
      const updatedCar = action.payload;

      state.cars[updatedCar.id] = updatedCar;
    });
    builder.addCase(deleteCar.fulfilled, (state, action: PayloadAction<number>) => {
      const carId = action.payload;

      delete state.cars[carId];

      state.totalCount = Object.keys(state.cars).length;
    });
  },
});

export const garageReducer = garageSlice.reducer;
export const garageActions = garageSlice.actions;
