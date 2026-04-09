import { fetchDrivers } from "./driver/driverThunks"
import type { AppThunk } from "./store"

export const initFetch = (): AppThunk => async (dispatch) => {
  await dispatch(fetchDrivers())
}