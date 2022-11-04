import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: any | null;
  auth: { accessToken: string; refreshToken: string } | null;
}
const dummyUser = { email: "ahmad" };
const initialState: UserState = {
  // user: null,
  user: dummyUser,
  auth: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
