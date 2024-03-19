// courseIdSlice.js

import { createSlice } from '@reduxjs/toolkit';

const courseIdSlice = createSlice({
  name: 'courseId',
  initialState: null,
  reducers: {
    setCourseId(state, action) {
      return action.payload;
    },
  },
});

export const { setCourseId } = courseIdSlice.actions;
export default courseIdSlice.reducer;
