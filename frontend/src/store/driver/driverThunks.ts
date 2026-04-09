import { getDriver, getDrivers } from "../../services/driverService"
import type { AppThunk } from "../store"
import { selectDriver, selectDriversLoading } from "./driverSelectors"
import { setDrivers, setError, setLoading, setSelected } from "./driverSlice"

export const fetchDrivers =
  (): AppThunk<Promise<boolean>> => async (dispatch, getState) => {
    const { drivers, loading } = selectDriver(getState())

    if (!drivers.length && !loading) {
      dispatch(setLoading(true))

      try {
        const data = await getDrivers()

        if (data?.length) {
          dispatch(setDrivers(data))
        }
      } catch (e) {
        console.log(e)
        dispatch(setError(true))
      }

      dispatch(setLoading(false))
    }

    return true
  }

export const fetchDriverById =
  (id: string): AppThunk => async (dispatch, getState) => {
    const loading = selectDriversLoading(getState())

    if (!loading) {
      dispatch(setLoading(true))

      try {
        const data = await getDriver(id)

        if (data) {
          dispatch(setSelected(data))
        }
      } catch (e) {
        console.log(e)
        dispatch(setError(true))
      }

      dispatch(setLoading(false))
    }
  }