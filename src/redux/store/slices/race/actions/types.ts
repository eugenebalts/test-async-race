import {
  IDriveModeResponse,
  IStartEngineResponse,
} from '../../../../../services/endpoints/engine/types';

export interface ThunkStartEngineResponse {
  id: number;
  response: IStartEngineResponse;
}

export interface ThunkDriveModeResponse {
  id: number;
  response: IDriveModeResponse;
  raceId: number;
}

export interface ThunkDriveModeRejectResponse {
  id: number;
  error: IDriveModeResponse;
}
