import { configureStore } from '@reduxjs/toolkit';
import { garageReducer } from './slices/garage';
import { raceReducer } from './slices/race';
import { windowWidthReducer } from './slices/window';
import { winnersReducer } from './slices/winners';

const store = configureStore({
  reducer: {
    garage: garageReducer,
    race: raceReducer,
    windowWidth: windowWidthReducer,
    winners: winnersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
