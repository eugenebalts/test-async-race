import { IStartEngineResponse } from '../../../../services/endpoints/engine/types';

interface ICarRaceData {
  trajectory: IStartEngineResponse | null;
  status: 'started' | 'drive' | 'broken' | 'stopped' | 'finished';
}

interface IRaceData {
  isStarted: boolean;
  isSingle: boolean;
  busyTracks: number[];
  raceId: number;
}

export interface IRaceState {
  carsData: Record<string, ICarRaceData>;
  raceData: IRaceData;
  startPostition: number;
  finishPosition: number;
  difference: number;
}

export interface ISwitchToStart {
  id: number;
  isSingle: boolean;
}
