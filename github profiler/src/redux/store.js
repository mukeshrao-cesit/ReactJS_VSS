import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "./slice";

export const store = configureStore({
  reducer: {
    repo: repoSlice,
  },
});
