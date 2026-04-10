import { fetchRatings } from "./rating/ratingThunks";
import type { AppThunk } from "./store";

export const initFetch = (): AppThunk => async (dispatch) => {
  await dispatch(fetchRatings());
};
