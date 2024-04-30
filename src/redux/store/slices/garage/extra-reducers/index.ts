import { PayloadAction } from '@reduxjs/toolkit';
import { ICar, IGarageState } from '../types';

export const handleGetGarageFullfield = (state: IGarageState, action: PayloadAction<ICar[]>) => {
  const recievedCars = action.payload;

  recievedCars.forEach((car) => {
    state.cars[car.id] = car;
  });

  state.totalCount = Object.keys(state.cars).length;
  state.status = 'fullfield';
  state.error = false;
};

export const handleGetGaragePending = (state: IGarageState) => {
  state.status = 'pending';
  state.error = false;
};

export const handleGetGarageRejected = (state: IGarageState) => {
  state.status = 'rejected';
  state.error = true;
};

export const hadnleCreateCarFullfield = (state: IGarageState, action: PayloadAction<ICar>) => {
  const newCar = action.payload;

  state.cars[newCar.id] = newCar;
  state.totalCount = Object.keys(state.cars).length;
  state.error = false;
};

export const hadnleCreateCarPending = (state: IGarageState) => {
  state.error = false;
};

export const hadnleCreateCarRejected = (state: IGarageState) => {
  state.error = true;
};

export const hadnleGenerateCarsFulfilled = (state: IGarageState, action: PayloadAction<ICar[]>) => {
  const sortedPayload = action.payload.sort((a, b) => a.id - b.id);

  sortedPayload.forEach((car) => {
    state.cars[car.id] = car;
  });

  state.totalCount = Object.keys(state.cars).length;
  state.error = false;
};

export const hadnleGenerateCarsPending = (state: IGarageState) => {
  state.error = false;
};

export const hadnleGenerateCarsRejected = (state: IGarageState) => {
  state.error = true;
};

export const handleUpdateCarFullfield = (state: IGarageState, action: PayloadAction<ICar>) => {
  const updatedCar = action.payload;

  state.cars[updatedCar.id] = updatedCar;
  state.error = false;
};

export const handleUpdateCarPending = (state: IGarageState) => {
  state.error = false;
};

export const handleUpdateCarRejected = (state: IGarageState) => {
  state.error = true;
};

export const handleDeleteCarFulfilled = (state: IGarageState, action: PayloadAction<number>) => {
  const carId = action.payload;

  delete state.cars[carId];

  state.totalCount = Object.keys(state.cars).length;
  state.error = false;
};

export const handleDeleteCarPending = (state: IGarageState) => {
  state.error = false;
};

export const handleDeleteCarRejected = (state: IGarageState) => {
  state.error = true;
};
