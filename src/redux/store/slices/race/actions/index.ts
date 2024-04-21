import { createAsyncThunk } from '@reduxjs/toolkit';
import EngineApi from '../../../../../services/endpoints/engine/index';
import { ThunkStartEngineResponse } from './types';

export const startEngine = createAsyncThunk('race/startEngine', async (id: number) => {
  try {
    const res = await EngineApi.startEngine(id);

    return {
      id,
      response: res
    } as ThunkStartEngineResponse;
  } catch (err) {
    return Promise.resolve(err);
  } 
})

export type aboba = string; // temp