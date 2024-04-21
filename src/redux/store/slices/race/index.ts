import { createSlice } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { startEngine } from './actions';
import { ThunkStartEngineResponse } from './actions/types';

const initialState: RaceState = {
  carsData: {},
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(startEngine.fulfilled, (state, {payload}) => {
      const { id, response } = payload as ThunkStartEngineResponse;
      state.carsData[id] = {
        status: null,
        trajectory: response
      }
    })
  }
});

export const raceReducer = raceSlice.reducer;
export const raceActions = raceSlice.actions;
