export type Status = 'pending' | 'rejected' | 'fullfield';

export interface IPageState {
  pages: number;
  currentPage: number;
  limit: number;
  totalCount: number;
  status: Status;
  error: boolean;
}
