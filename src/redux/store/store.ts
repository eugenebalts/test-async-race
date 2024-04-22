import { configureStore } from '@reduxjs/toolkit';
import { garageReducer } from './slices/garage';
import { raceReducer } from './slices/race';
import { windowWidthReducer } from './slices/window';

const store = configureStore({
  reducer: {
    garage: garageReducer,
    race: raceReducer,
    windowWidth: windowWidthReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
