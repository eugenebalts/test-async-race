import { createSlice } from '@reduxjs/toolkit';

const windowWidthSlice = createSlice({
  name: 'windowWidth',
  initialState: {
    width: window.innerWidth,
  },
  reducers: {
    setWindowWidth(state, { payload }) {
      state.width = payload;
    },
  },
});

export const windowWidthReducer = windowWidthSlice.reducer;
export const { setWindowWidth } = windowWidthSlice.actions;
