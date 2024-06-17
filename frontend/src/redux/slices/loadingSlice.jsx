import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setFullPageLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setFullPageLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
