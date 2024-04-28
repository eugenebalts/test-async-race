export type CarRaceStatus = 'started' | 'drive' | 'broken' | 'stopped' | 'finished';

interface ICarRaceData {
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
}

export interface IRaceState {
  carsData: Record<string, ICarRaceData>;
  raceData: IRaceData;
  difference: number;
}

export interface ISwitchToStart {
  id: number;
  isSingle: boolean;
}
