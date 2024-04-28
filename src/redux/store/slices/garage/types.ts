export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IGarageState {
  isOpen: boolean;
  cars: Record<string, ICar>;
  pages: number;
  currentPage: number;
  carsOnPage: number;
  status: null | 'pending' | 'fullfield' | 'rejected';
}
