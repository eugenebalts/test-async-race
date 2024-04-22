import { createSlice } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { startEngine } from './actions';
import { ThunkStartEngineResponse } from './actions/types';

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
    }
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
