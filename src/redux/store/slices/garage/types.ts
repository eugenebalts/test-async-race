export interface Car {
  name: string,
  color: string,
  id: number,
}

export interface GarageState {
  cars: Car[],
  CAR_WIDTH: number,
  START_POS: number,
  END_POS: number,
}
