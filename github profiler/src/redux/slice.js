import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repo: [],
};

const repoSlice = createSlice({
  name: "repoList",
  initialState,
  reducers: {
    initaite: (state, action) => {
      state.repo = action.payload;
    },
  },
});

export const { initaite } = repoSlice.actions;

export default repoSlice.reducer;
