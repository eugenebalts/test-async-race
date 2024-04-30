import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IRaceState } from './types';
import { driveMode, startEngine, stopEngine } from './actions';
import {
  updateDifference,
  startRace,
  stopRace,
  switchModeToStart,
  switchModeToDrive,
  switchModeToStop,
  resetRaceState,
} from './reducers/index';
import {
  handleStartEngineFullfilled,
  handleStopEngineFullfilled,
  handleDriveModeFullfilled,
  handleDriveModeRejected,
  handleStartEngineRejected,
  handleStartEnginePending,
  handleStopEnginePending,
  handleStopEngineRejected,
} from './extra-reducers/index';

export const initialState: IRaceState = {
  carsParams: {},
  raceData: {
    membersForRace: 0,
    isStarted: false,
    isSingle: false,
    busyTracks: [],
    raceId: 0,
    winner: null,
    hasResults: false,
  },
  difference: 0,
  error: false,
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    updateDifference,
    startRace,
    stopRace,
    switchModeToStart,
    switchModeToDrive,
    switchModeToStop,
    resetRaceState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IRaceState>) => {
    builder.addCase(startEngine.fulfilled, handleStartEngineFullfilled);
    builder.addCase(startEngine.pending, handleStartEnginePending);
    builder.addCase(startEngine.rejected, handleStartEngineRejected);
    builder.addCase(stopEngine.fulfilled, handleStopEngineFullfilled);
    builder.addCase(stopEngine.pending, handleStopEnginePending);
    builder.addCase(stopEngine.rejected, handleStopEngineRejected);
    builder.addCase(driveMode.fulfilled, handleDriveModeFullfilled);
    builder.addCase(driveMode.rejected, handleDriveModeRejected);
  },
});

export const raceReducer = raceSlice.reducer;
export const raceActions = raceSlice.actions;
