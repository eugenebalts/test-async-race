import { PayloadAction } from '@reduxjs/toolkit';
import { IRaceState } from '../types';
import {
  EngineDriveModeThunkRejectResponse,
  IEngineDriveModeThunkResponse,
  IEngineStartThunkResponse,
} from '../actions/types';
import calculateTravelTimeSec from '../../../../../utils/calculate-travel-time';

export const handleStartEngineFulfilled = (
  state: IRaceState,
  action: PayloadAction<IEngineStartThunkResponse>,
) => {
  const { id, response } = action.payload;

  if (state.carsParams[id]) {
    const { velocity, distance } = response;
    const animationTime = calculateTravelTimeSec(velocity, distance);

    state.carsParams[id].time = animationTime;
    state.raceData.busyTracks.push(id);
  }

  state.error = false;
};

export const handleStartEnginePending = (state: IRaceState) => {
  state.error = false;
};

export const handleStartEngineRejected = (state: IRaceState, action: PayloadAction<unknown>) => {
  const id = action.payload as number;

  if (state.carsParams[id]) {
    delete state.carsParams[id];
  }

  state.error = true;
};

export const handleStopEngineFulfilled = (state: IRaceState, action: PayloadAction<number>) => {
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

  state.error = false;
};

export const handleStopEnginePending = (state: IRaceState) => {
  state.error = false;
};

export const handleStopEngineRejected = (state: IRaceState, action: PayloadAction<unknown>) => {
  const id = action.payload as number;

  if (state.carsParams[id]) {
    state.error = true;
  }
};

export const handleDriveModeFulfilled = (
  state: IRaceState,
  action: PayloadAction<IEngineDriveModeThunkResponse>,
) => {
  const { id, response, raceId } = action.payload;

  if (response?.success && state.carsParams[id] && raceId === state.raceData.raceId) {
    state.carsParams[id].status = 'finished';

    const { isSingle, winner, hasResults } = state.raceData;

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
};

export const handleDriveModeRejected = (state: IRaceState, action: PayloadAction<unknown>) => {
  const { id, raceId } = action.payload as EngineDriveModeThunkRejectResponse;

  if (state.carsParams[id] && raceId === state.raceData.raceId) {
    state.carsParams[id].status = 'broken';
    state.carsParams[id].time = 0;
  }
};
