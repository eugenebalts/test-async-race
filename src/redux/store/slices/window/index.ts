import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const windowWidthSlice = createSlice({
  name: 'windowWidth',
  initialState: {
    width: window.innerWidth,
  },
  reducers: {
    setWindowWidth(state, action: PayloadAction<number>) {
      state.width = action.payload;
    },
  },
});

export const windowWidthReducer = windowWidthSlice.reducer;
export const { setWindowWidth } = windowWidthSlice.actions;
