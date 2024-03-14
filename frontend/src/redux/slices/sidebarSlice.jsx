import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleSidebar: state => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarVisibility = state => state.sidebar.isVisible;

export default sidebarSlice.reducer;
