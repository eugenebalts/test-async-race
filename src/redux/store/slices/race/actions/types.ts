import {
  IEngineDriveResponse,
  IEngineStartResponse,
} from '../../../../../services/endpoints/engine/types';

export interface EngineStartThunkResponse {
  id: number;
  response: IEngineStartResponse;
}

export interface EngineDriveModeThunkResponse {
  id: number;
  response: IEngineDriveResponse;
  raceId: number;
}

export interface EngineDriveModeThunkRejectResponse {
  id: number;
  error: IEngineDriveResponse;
}
