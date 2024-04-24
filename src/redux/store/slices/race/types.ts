import { StartEngineResponse } from '../../../../services/endpoints/engine/types';

export interface RaceState {
  carsData: Record<string, CarRaceData>
  startPostition: number;
  finishPosition: number;
  difference: number;
}

interface CarRaceData {
  trajectory: StartEngineResponse;
  status: 'started' | 'drive' | 'broken' | 'finished';
}
