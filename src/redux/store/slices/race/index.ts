import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { driveMode, startEngine, stopEngine } from './actions';
import {ThunkDriveModeResponse, ThunkStartEngineResponse } from './actions/types';

const initialState: RaceState = {
  carsData: {},
  finishPosition: 0,
  startPostition: 0,
  difference: 0,
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    updateStartPosition(state, action: PayloadAction<number>) {
      state.startPostition = action.payload;
    },
    updateFinishPosition(state, action: PayloadAction<number>) {
      state.finishPosition = action.payload;
    },
    updateDifference(state) {
      const {finishPosition, startPostition} = state;
      
      state.difference = finishPosition - startPostition;

    },
    informAboutStarting(state, action: PayloadAction<number>) {
      const id = action.payload;

      state.carsData[id].status = 'drive';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(startEngine.fulfilled, (state, action: PayloadAction<ThunkStartEngineResponse>) => {
      const { id, response } = action.payload;

      state.carsData[id] = {
        status: 'started',
        trajectory: response
      }
    })
    builder.addCase(stopEngine.fulfilled, (state, action: PayloadAction<number>) => {
      const id = action.payload;

      delete state.carsData[id];
    })
    builder.addCase(driveMode.fulfilled, (state, action: PayloadAction<ThunkDriveModeResponse>) => {
      const { id, response } = action.payload;

      if (response?.success && state.carsData[id]) {
        state.carsData[id].status = 'finished';
      }
    })
    builder.addCase(driveMode.rejected, (state, {error}) => {
      const id = Number(error.message);

      if (state.carsData[id]) {
        state.carsData[id].status = 'broken';
      }
    })
  }
});

export const raceReducer = raceSlice.reducer;
export const raceActions = raceSlice.actions;
