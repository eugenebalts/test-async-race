import { DriveModeResponse, StartEngineResponse } from '../../../../../services/endpoints/engine/types';

export interface ThunkStartEngineResponse {
  id: number;
  response: StartEngineResponse;
};

export interface ThunkDriveModeResponse {
  id: number;
  response: DriveModeResponse;
};

export interface ThunkDriveModeRejectResponse {
  id: number;
  error: DriveModeResponse;
};