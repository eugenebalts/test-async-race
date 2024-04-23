import { createSlice } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { driveMode, startEngine } from './actions';
import {ThunkDriveModeResponse, ThunkStartEngineResponse } from './actions/types';

const initialState: RaceState = {
  carsData: {},
  finishPosition: null,
  startPostition: null,
  difference: null,
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    updateStartPosition(state, {payload}) {
      state.startPostition = payload;
    },
    updateFinishPosition(state, {payload}) {
      state.finishPosition = payload;
    },
    updateDifference(state) {
      const {finishPosition, startPostition} = state;

      if (finishPosition !== null && startPostition !== null) {
        state.difference = finishPosition - startPostition;
      }
    },
    informAboutStarting(state, {payload}) {
      const id: number = payload;

      state.carsData[id].status = 'drive';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(startEngine.fulfilled, (state, {payload}) => {
      const { id, response } = payload as ThunkStartEngineResponse;
      state.carsData[id] = {
        status: 'started',
        trajectory: response
      }
    })
    builder.addCase(driveMode.fulfilled, (state, {payload}) => {
      const { id, response } = payload as ThunkDriveModeResponse;

      if (response?.success) {
        state.carsData[id].status = 'finished';
      }
    })
    builder.addCase(driveMode.rejected, (state, {error}) => {
      const id = Number(error.message);

      state.carsData[id].status = 'broken';
    })
  }
});

export const raceReducer = raceSlice.reducer;
export const raceActions = raceSlice.actions;
