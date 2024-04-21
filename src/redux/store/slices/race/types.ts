import { StartEngineResponse } from '../../../../services/endpoints/engine/types';

export interface RaceState {
  carsData: Record<string, CarRaceData>
}

interface CarRaceData {
  trajectory: StartEngineResponse;
  status: null | 'started' | 'broken' | 'finished';
}
