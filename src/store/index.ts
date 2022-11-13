import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import goalsReducer from './slices/goalsSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    goals: goalsReducer
  },
  devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
