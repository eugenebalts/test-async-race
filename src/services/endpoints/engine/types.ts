export interface IEngineStartResponse {
  velocity: number;
  distance: number;
}

export type EngineStopResponse = IEngineStartResponse;

export interface IEngineDriveResponse {
  success: boolean;
}
