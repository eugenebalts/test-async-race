import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRaceState, ISwitchToStart } from './types';
import { driveMode, startEngine, stopEngine } from './actions';
import { ThunkDriveModeResponse, ThunkStartEngineResponse } from './actions/types';
import calculateTravelTimeSec from '../../../../utils/calculate-travel-time';

const initialState: IRaceState = {
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
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    updateDifference(state, action: PayloadAction<number>) {
      state.difference = action.payload;
    },
    startRace(state, action: PayloadAction<number>) {
      state.raceData.membersForRace = action.payload;
      state.raceData.isStarted = true;
      state.raceData.isSingle = false;
      state.raceData.raceId = new Date().getTime();
    },
    stopRace(state) {
      state.raceData.isStarted = false;
      state.raceData.isSingle = false;
      state.raceData.raceId = 0;
      state.raceData.winner = null;
      state.raceData.hasResults = false;
    },
    switchModeToStart(state, action: PayloadAction<ISwitchToStart>) {
      const { id, isSingle } = action.payload;

      state.carsParams[id] = {
        time: 0,
        status: 'started',
      };

      state.raceData.isStarted = true;
      state.raceData.isSingle = isSingle;
    },
    switchModeToDrive(state, action: PayloadAction<number>) {
      const id = action.payload;

      if (state.carsParams[id]) {
        state.carsParams[id].status = 'drive';
      }
    },
    switchModeToStop(state, action: PayloadAction<number>) {
      const id = action.payload;

      if (state.carsParams[id]) {
        state.carsParams[id].time = 0;
        state.carsParams[id].status = 'stopped';
      }
    },
    resetRaceState(state) {
      state.carsParams = {};
      state.raceData = initialState.raceData;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      startEngine.fulfilled,
      (state, action: PayloadAction<ThunkStartEngineResponse>) => {
        const { id, response } = action.payload;

        if (state.carsParams[id]) {
          const { velocity, distance } = response;
          const animationTime = calculateTravelTimeSec(velocity, distance);
    
          state.carsParams[id].time = animationTime;
          state.raceData.busyTracks.push(id);
        }
      },
    );
    builder.addCase(stopEngine.fulfilled, (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const { busyTracks, winner } = state.raceData;

      state.raceData.busyTracks = busyTracks.filter((track) => track !== id);

      if (winner?.id === id) {
        state.raceData.winner = null;
      }

      delete state.carsParams[id];

      if (!Object.keys(state.carsParams).length) {
        state.raceData.membersForRace = 0;
        state.raceData.isStarted = false;
        state.raceData.raceId = 0;
      }
    });
    builder.addCase(driveMode.fulfilled, (state, action: PayloadAction<ThunkDriveModeResponse>) => {
      const { id, response, raceId } = action.payload;

      if (response?.success && state.carsParams[id] && raceId === state.raceData.raceId) {
        state.carsParams[id].status = 'finished';

        const {isSingle, winner, hasResults} = state.raceData;

        const isCompetitiveRace = !isSingle;


        if (!winner && !hasResults && isCompetitiveRace) {
          const time = state.carsParams[id]?.time;

          if (time) {
            state.raceData.winner = {
              id,
              time,
            };

            state.raceData.hasResults = true;
          }
        }
      }
    });
    builder.addCase(driveMode.rejected, (state, { error }) => {
      if (error.message) {
        const { id, raceId } = JSON.parse(error.message);

        if (state.carsParams[id] && raceId === state.raceData.raceId) {
          state.carsParams[id].status = 'broken';
          state.carsParams[id].time = 0;
        }
      }
    });
  },
});

export const raceReducer = raceSlice.reducer;
export const raceActions = raceSlice.actions;
