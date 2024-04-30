import { createSlice } from '@reduxjs/toolkit';
import { createCar, deleteCar, generateCars, getGarage, updateCar } from './actions';
import { IGarageState } from './types';
import { updatePages, updateCurrentPage, setIsPageOpen } from './reducers/index';
import {
  hadnleCreateCarFullfilled,
  hadnleCreateCarPending,
  hadnleCreateCarRejected,
  hadnleGenerateCarsFulfilled,
  hadnleGenerateCarsPending,
  hadnleGenerateCarsRejected,
  handleDeleteCarFulfilled,
  handleDeleteCarPending,
  handleDeleteCarRejected,
  handleGetGarageFullfilled,
  handleGetGaragePending,
  handleGetGarageRejected,
  handleUpdateCarFullfilled,
  handleUpdateCarPending,
  handleUpdateCarRejected,
} from './extra-reducers';

const initialState: IGarageState = {
  isOpen: false,
  cars: {},
  totalCount: 0,
  pages: 1,
  currentPage: 1,
  limit: 7,
  status: 'pending',
  error: false,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    updatePages,
    updateCurrentPage,
    setIsPageOpen,
  },
  extraReducers: (builder) => {
    builder.addCase(getGarage.fulfilled, handleGetGarageFullfilled);
    builder.addCase(getGarage.pending, handleGetGaragePending);
    builder.addCase(getGarage.rejected, handleGetGarageRejected);
    builder.addCase(createCar.fulfilled, hadnleCreateCarFullfilled);
    builder.addCase(createCar.pending, hadnleCreateCarPending);
    builder.addCase(createCar.rejected, hadnleCreateCarRejected);
    builder.addCase(generateCars.fulfilled, hadnleGenerateCarsFulfilled);
    builder.addCase(generateCars.pending, hadnleGenerateCarsPending);
    builder.addCase(generateCars.rejected, hadnleGenerateCarsRejected);
    builder.addCase(updateCar.fulfilled, handleUpdateCarFullfilled);
    builder.addCase(updateCar.pending, handleUpdateCarPending);
    builder.addCase(updateCar.rejected, handleUpdateCarRejected);
    builder.addCase(deleteCar.fulfilled, handleDeleteCarFulfilled);
    builder.addCase(deleteCar.pending, handleDeleteCarPending);
    builder.addCase(deleteCar.rejected, handleDeleteCarRejected);
  },
});

export const garageReducer = garageSlice.reducer;
export const garageActions = garageSlice.actions;
