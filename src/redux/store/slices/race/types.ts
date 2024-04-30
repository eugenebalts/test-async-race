export type CarRaceStatus = 'started' | 'drive' | 'broken' | 'stopped' | 'finished';

interface ICarParams {
  time: number;
  status: CarRaceStatus;
}

interface IWinnerData {
  id: number;
  time: number;
}

interface IRaceData {
  membersForRace: number;
  isStarted: boolean;
  isSingle: boolean;
  busyTracks: number[];
  raceId: number;
  winner: null | IWinnerData;
  hasResults: boolean;
}

export interface IRaceState {
  carsParams: Record<string, ICarParams>;
  raceData: IRaceData;
  difference: number;
  error: boolean;
}

export interface ISwitchToStartPayload {
  id: number;
  isSingle: boolean;
}
