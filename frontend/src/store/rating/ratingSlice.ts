import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Rating } from "../../types/rating";

type RatingState = {
  ratings: Rating[];
  overall: number;
  loading: boolean;
  error: boolean;
};

export const initialState: RatingState = {
  ratings: [],
  overall: 0,
  loading: false,
  error: false,
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRatings: (state: RatingState, action: PayloadAction<Rating[]>) => {
      state.ratings = action.payload;
    },
    setOverall: (state: RatingState, action: PayloadAction<number>) => {
      state.overall = action.payload;
    },
    setLoading: (state: RatingState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: RatingState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setRatings, setOverall, setLoading, setError } =
  ratingSlice.actions;

export default ratingSlice.reducer;
