import { createAsyncThunk } from '@reduxjs/toolkit';
import EngineApi from '../../../../../services/endpoints/engine/index';
import {
  EngineDriveModeThunkRejectResponse,
  IEngineDriveModeThunkPayload,
  IEngineDriveModeThunkResponse,
  IEngineStartThunkResponse,
} from './types';

export const startEngine = createAsyncThunk(
  'race/startEngine',
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await EngineApi.startEngine(id);

      return {
        id,
        response: res,
      } as IEngineStartThunkResponse;
    } catch (err) {
      return rejectWithValue(id);
    }
  },
);

export const stopEngine = createAsyncThunk(
  'race/stopEngine',
  async (id: number, { rejectWithValue }) => {
    try {
      await EngineApi.stopEngine(id);

      return id;
    } catch (err) {
      return rejectWithValue(id);
    }
  },
);

export const driveMode = createAsyncThunk(
  'race/driveMode',
  async ({ id, raceId }: IEngineDriveModeThunkPayload, { rejectWithValue }) => {
    try {
      const res = await EngineApi.driveMode(id);

      return {
        id,
        response: res,
        raceId,
      } as IEngineDriveModeThunkResponse;
    } catch (err) {
      const response: EngineDriveModeThunkRejectResponse = {
        id,
        raceId,
      };

      return rejectWithValue(response);
    }
  },
);
