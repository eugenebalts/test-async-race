import { createSlice } from '@reduxjs/toolkit';
import { getGarage } from './actions';
import { Car, GarageState } from './types';

const initialState: GarageState = {
  cars: [],
  CAR_WIDTH: 60,
  START_POS: 200,
  END_POS: 80,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGarage.fulfilled, (state, { payload }) => {
      state.cars = payload as Car[];
    });
  },
});

export const garageReducer = garageSlice.reducer;
export const garageActions = garageSlice.actions;
