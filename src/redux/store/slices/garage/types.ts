export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface GarageState {
  cars: Car[];
  pages: number;
  currentPage: number;
  carsOnPage: number;
  status: null | 'pending' | 'fullfield' | 'rejected';
  CAR_WIDTH: number;
  START_POS: number;
  END_POS: number;
}
