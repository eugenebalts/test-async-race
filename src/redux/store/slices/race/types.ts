import { IStartEngineResponse } from '../../../../services/endpoints/engine/types';

interface ICarRaceData {
  trajectory: IStartEngineResponse | null;
  status: 'started' | 'drive' | 'broken' | 'stopped' | 'finished';
}

interface IWinnerData {
  id: number;
  time: string;
}

interface IRaceData {
  isStarted: boolean;
  isSingle: boolean;
  busyTracks: number[];
  raceId: number;
  winner: null | IWinnerData;
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
