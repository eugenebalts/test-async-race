export interface IStartEngineResponse {
  velocity: number;
  distance: number;
}

export type StopEngineResponse = IStartEngineResponse;

export interface IDriveModeResponse {
  success: boolean;
}
