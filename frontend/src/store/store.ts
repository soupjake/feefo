import { configureStore, combineReducers, type ThunkAction, type Action } from "@reduxjs/toolkit";
import driverReducer from "./driver/driverSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
    driver: driverReducer,
    user: userReducer
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
