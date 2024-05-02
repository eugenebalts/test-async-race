import { PayloadAction } from '@reduxjs/toolkit';
import { ICar, IGarageState } from '../types';
import { IGetGarageResponse } from '../../../../../services/endpoints/garage/types';

export const handleGetGarageFulfilled = (
  state: IGarageState,
  action: PayloadAction<IGetGarageResponse>,
) => {
  const { cars, total } = action.payload;

  state.cars = Object.assign({}, ...cars.map((car) => ({ [car.id]: car })));

  state.totalCount = total;
  state.status = 'fulfilled';
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

export const hadnleCreateCarFulfilled = (state: IGarageState, action: PayloadAction<ICar>) => {
  const newCar = action.payload;
  const { limit, cars } = state;

  if (Object.keys(cars).length < limit) {
    state.cars[newCar.id] = newCar;
  }

  state.totalCount += 1;
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
  const { limit, cars } = state;

  const differenceToLimit = limit - Object.keys(cars).length;

  sortedPayload.slice(0, differenceToLimit).forEach((car) => {
    state.cars[car.id] = car;
  });

  state.totalCount += sortedPayload.length;
  state.error = false;
};

export const hadnleGenerateCarsPending = (state: IGarageState) => {
  state.error = false;
};

export const hadnleGenerateCarsRejected = (state: IGarageState) => {
  state.error = true;
};

export const handleUpdateCarFulfilled = (state: IGarageState, action: PayloadAction<ICar>) => {
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

  state.totalCount -= 1;
  state.error = false;
};

export const handleDeleteCarPending = (state: IGarageState) => {
  state.error = false;
};

export const handleDeleteCarRejected = (state: IGarageState, action: PayloadAction<unknown>) => {
  const id = action.payload as number;

  if (state.cars[id]) {
    state.error = true;
  }
};

export const handleLoadNextPageAfterDeletionFulfilled = (
  state: IGarageState,
  action: PayloadAction<IGetGarageResponse>,
) => {
  const { cars } = action.payload;
  const { limit } = state;

  const carsOnPage = Object.keys(state.cars).length;

  if (limit - carsOnPage === 1) {
    const lastCarOnPage = cars[carsOnPage];

    if (lastCarOnPage) {
      state.cars[lastCarOnPage?.id] = lastCarOnPage;
    }
  }
};

export const handleLoadNextPageAfterDeletionPending = (state: IGarageState) => {
  state.error = false;
};

export const handleLoadNextPageAfterDeletionRejected = (state: IGarageState) => {
  state.error = true;
};
