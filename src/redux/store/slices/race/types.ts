import { StartEngineResponse } from '../../../../services/endpoints/engine/types';

export interface RaceState {
  carsData: Record<string, CarRaceData>
  startPostition: null | number;
  finishPosition: null | number;
  difference: null | number;
}

interface CarRaceData {
  trajectory: StartEngineResponse;
  status: null | 'started' | 'broken' | 'finished';
}
