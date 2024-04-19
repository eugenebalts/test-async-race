import { configureStore } from '@reduxjs/toolkit';
import { garageReducer } from './slices/garage';

const store = configureStore({
  reducer: {
    garage: garageReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
