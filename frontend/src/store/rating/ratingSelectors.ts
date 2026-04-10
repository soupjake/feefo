import type { RootState } from "../store"

export const selectRating = (state: RootState) => state.rating
export const selectRatings = (state: RootState) => state.rating.ratings
export const selectRatingsOverall = (state: RootState) => state.rating.overall
export const selectRatingsLoading = (state: RootState) => state.rating.loading
export const selectRatingsError = (state: RootState) => state.rating.error
