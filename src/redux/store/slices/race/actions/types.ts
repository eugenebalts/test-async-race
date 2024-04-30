import {
  IEngineDriveResponse,
  IEngineStartResponse,
} from '../../../../../services/endpoints/engine/types';

export interface IEngineStartThunkResponse {
  id: number;
  response: IEngineStartResponse;
}

export interface IEngineDriveModeThunkPayload {
  id: number;
  raceId: number;
}

export interface IEngineDriveModeThunkResponse {
  id: number;
  response: IEngineDriveResponse;
  raceId: number;
}

export type EngineDriveModeThunkRejectResponse = Omit<IEngineDriveModeThunkResponse, 'response'>;
