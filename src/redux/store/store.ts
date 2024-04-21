import { configureStore } from '@reduxjs/toolkit';
import { garageReducer } from './slices/garage';
import { raceReducer } from './slices/race';

const store = configureStore({
  reducer: {
    garage: garageReducer,
    race: raceReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
