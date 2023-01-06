import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repo: [],
  currentUser: "",
};

const repoSlice = createSlice({
  name: "repoList",
  initialState,
  reducers: {
    initaite: (state, action) => {
      state.repo = action.payload;
    },
    initaiteCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { initaite, initaiteCurrentUser } = repoSlice.actions;

export default repoSlice.reducer;
