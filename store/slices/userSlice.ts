import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: { email: string } | null;
  auth: { accessToken: string; refreshToken: string } | null;
}
const initialState: UserState = {
  user: null,
  auth: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string }>) {
      console.log("action.payload", action.payload);
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
