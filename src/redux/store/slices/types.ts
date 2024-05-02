export type Status = 'pending' | 'rejected' | 'fulfilled';

export interface IPageState {
  pages: number;
  currentPage: number;
  limit: number;
  totalCount: number;
  status: Status;
  error: boolean;
}
