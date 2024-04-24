export interface StartEngineResponse {
  velocity: number;
  distance: number;
}

export type StopEngineResponse = StartEngineResponse;

export interface DriveModeResponse {
  success: boolean;
}
