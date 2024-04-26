export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersState {
  winners: Record<string, IWinner>;
  sortedWinners: IWinner[];
  pages: number;
  currentPage: number;
  winnersOnPage: number;
  status: null | 'pending' | 'fullfield' | 'rejected';
}
