import { PayloadAction } from '@reduxjs/toolkit';
import { IRaceState, ISwitchToStartPayload } from '../types';
import { initialState } from '..';

export const updateDifference = (state: IRaceState, action: PayloadAction<number>) => {
  state.difference = action.payload;
};

export const startRace = (state: IRaceState, action: PayloadAction<number>) => {
  state.raceData.membersForRace = action.payload;
  state.raceData.isStarted = true;
  state.raceData.isSingle = false;
  state.raceData.raceId = new Date().getTime();
};

export const stopRace = (state: IRaceState) => {
  state.raceData.isStarted = false;
  state.raceData.isSingle = false;
  state.raceData.raceId = 0;
  state.raceData.winner = null;
  state.raceData.hasResults = false;
};

export const switchModeToStart = (
  state: IRaceState,
  action: PayloadAction<ISwitchToStartPayload>,
) => {
  const { id, isSingle } = action.payload;

  state.carsParams[id] = {
    time: 0,
    status: 'started',
  };

  state.raceData.isStarted = true;
  state.raceData.isSingle = isSingle;
};

export const switchModeToDrive = (state: IRaceState, action: PayloadAction<number>) => {
  const id = action.payload;

  if (state.carsParams[id]) {
    state.carsParams[id].status = 'drive';
  }
};

export const switchModeToStop = (state: IRaceState, action: PayloadAction<number>) => {
  const id = action.payload;

  if (state.carsParams[id]) {
    state.carsParams[id].time = 0;
    state.carsParams[id].status = 'stopped';
  }
};

export const resetRaceState = (state: IRaceState) => {
  state.carsParams = {};
  state.raceData = initialState.raceData;
};
