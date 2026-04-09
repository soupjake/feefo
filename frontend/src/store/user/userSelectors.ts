import type { RootState } from "../store"

export const selectUser = (state: RootState) => state.user
export const selectUserQuote = (state: RootState) => state.user.quote
export const selectUserLoading = (state: RootState) => state.user.loading
export const selectUserStatus = (state: RootState) => state.user.status