import type { RootState } from "../store"

export const selectDriver = (state: RootState) => state.driver
export const selectDrivers = (state: RootState) => state.driver.drivers
export const selectDriversLoading = (state: RootState) => state.driver.loading
export const selectDriversError = (state: RootState) => state.driver.error
export const selectDriversSelected = (state: RootState) => state.driver.selected