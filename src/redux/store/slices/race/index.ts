import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRaceState, ISwitchToStart } from './types';
import { driveMode, startEngine, stopEngine } from './actions';
import { ThunkDriveModeResponse, ThunkStartEngineResponse } from './actions/types';
import calculateTravelTimeSec from '../../../../utils/calculate-travel-time';

const initialState: IRaceState = {
  carsData: {},
  raceData: {
    isStarted: false,
    isSingle: false,
    busyTracks: [],
    raceId: 0,
    winner: null,
  },
  difference: 0,
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    updateDifference(state, action: PayloadAction<number>) {
      state.difference = action.payload;
    },
    startRace(state) {
      state.raceData.isStarted = true;
      state.raceData.isSingle = false;
      state.raceData.raceId = new Date().getTime();
    },
    stopRace(state) {
      state.raceData.isStarted = false;
      state.raceData.isSingle = false;
      state.raceData.raceId = 0;
      state.raceData.winner = null;
    },
    switchModeToStart(state, action: PayloadAction<ISwitchToStart>) {
      const { id, isSingle } = action.payload;

      state.carsData[id] = {
        trajectory: null,
        status: 'started',
      };

      state.raceData.isStarted = true;
      state.raceData.busyTracks.push(id);
      state.raceData.isSingle = isSingle;
    },
    switchModeToDrive(state, action: PayloadAction<number>) {
      const id = action.payload;

      if (state.carsData[id]) {
        state.carsData[id].status = 'drive';
      }
    },
    switchModeToStop(state, action: PayloadAction<number>) {
      const id = action.payload;

      if (state.carsData[id]) {
        state.carsData[id].trajectory = null;
        state.carsData[id].status = 'stopped';
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      startEngine.fulfilled,
      (state, action: PayloadAction<ThunkStartEngineResponse>) => {
        const { id, response } = action.payload;

        if (state.carsData[id]) {
          state.carsData[id].trajectory = response;
        }
      },
    );
    builder.addCase(stopEngine.fulfilled, (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const { busyTracks } = state.raceData;

      state.raceData.busyTracks = busyTracks.filter((track) => track !== id);

      delete state.carsData[id];

      if (!Object.keys(state.carsData).length) {
        state.raceData.isStarted = false;
        state.raceData.raceId = 0;
      }
    });
    builder.addCase(driveMode.fulfilled, (state, action: PayloadAction<ThunkDriveModeResponse>) => {
      const { id, response, raceId } = action.payload;

      if (response?.success && state.carsData[id] && raceId === state.raceData.raceId) {
        state.carsData[id].status = 'finished';

        const isCompetitiveRace = state.raceData.isStarted && !state.raceData.isSingle;

        if (!state.raceData.winner && isCompetitiveRace) {
          const trajectory = state.carsData[id]?.trajectory;

          if (trajectory) {
            const { velocity, distance } = trajectory;
            const raceTime = calculateTravelTimeSec(velocity, distance);

            state.raceData.winner = {
              id,
              time: `${raceTime}s`,
            };
          }
        }
      }
    });
    builder.addCase(driveMode.rejected, (state, { error }) => {
      if (error.message) {
        const { id, raceId } = JSON.parse(error.message);

        if (state.carsData[id] && raceId === state.raceData.raceId) {
          state.carsData[id].status = 'broken';
        }
      }
    });
  },
});

export const raceReducer = raceSlice.reducer;
export const raceActions = raceSlice.actions;
