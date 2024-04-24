import { createAsyncThunk } from '@reduxjs/toolkit';
import EngineApi from '../../../../../services/endpoints/engine/index';
import { ThunkDriveModeResponse, ThunkStartEngineResponse } from './types';

export const startEngine = createAsyncThunk('race/startEngine', async (id: number) => {
  try {
    const res = await EngineApi.startEngine(id);

    return {
      id,
      response: res
    } as ThunkStartEngineResponse;
  } catch (err) {
    return Promise.reject(err);
  } 
})

export const stopEngine = createAsyncThunk('race/stopEngine', async (id: number) => {
  try {
    await EngineApi.stopEngine(id);

    return id;
  } catch (err) {
    return Promise.reject(err);
  } 
})

export const driveMode = createAsyncThunk('race/driveMode', async (id: number) => {
  try {
    const res = await EngineApi.driveMode(id);

    return {
      id,
      response: res
    } as ThunkDriveModeResponse;
  } catch (err) {
    return Promise.reject(id);
  } 
})