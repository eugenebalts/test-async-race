export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface GarageState {
  cars: Record<string, Car>;
  pages: number;
  currentPage: number;
  carsOnPage: number;
  status: null | 'pending' | 'fullfield' | 'rejected';
  CAR_WIDTH: string;
  START_POS: string;
  END_POS: string;
}
