import { configureStore, combineReducers, type ThunkAction, type Action } from "@reduxjs/toolkit";
import ratingReducer from "./rating/ratingSlice";

const rootReducer = combineReducers({
    rating: ratingReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
