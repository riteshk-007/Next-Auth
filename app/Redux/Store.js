import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User.Slice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    user: UserSlice,
  },
});
