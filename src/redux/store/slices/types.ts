export interface IPageState {
  pages: number,
  currentPage: number;
  limit: number;
  totalCount: number;
  error: string | null;
}
