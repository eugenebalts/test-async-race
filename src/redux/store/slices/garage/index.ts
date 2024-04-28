import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCar, deleteCar, generateCars, getGarage, updateCar } from './actions';
import { ICar, IGarageState } from './types';

const initialState: IGarageState = {
  isOpen: false,
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
    updateCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setIsPageOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getGarage.fulfilled, (state, action: PayloadAction<ICar[]>) => {
      const recievedCars = action.payload;

      recievedCars.forEach((car) => {
        state.cars[car.id] = car;
      });
    });
    builder.addCase(createCar.fulfilled, (state, action: PayloadAction<ICar>) => {
      const newCar = action.payload;

      state.cars[newCar.id] = newCar;
    });
    builder.addCase(generateCars.fulfilled, (state, action: PayloadAction<ICar[]>) => {
      const sortedPayload = action.payload.sort((a, b) => a.id - b.id);

      sortedPayload.forEach((car) => {
        state.cars[car.id] = car;
      });
    });
    builder.addCase(updateCar.fulfilled, (state, action: PayloadAction<ICar>) => {
      const updatedCar = action.payload;

      state.cars[updatedCar.id] = updatedCar;
    });
    builder.addCase(deleteCar.fulfilled, (state, action: PayloadAction<number>) => {
      const carId = action.payload;

      delete state.cars[carId];
    });
  },
});

export const garageReducer = garageSlice.reducer;
export const garageActions = garageSlice.actions;
