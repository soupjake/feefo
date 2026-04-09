import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Driver } from "../../types/driver"

type DriverState = {
  drivers: Driver[]
  loading: boolean
  error: boolean
  selected: Driver | undefined
}

export const initialState: DriverState = {
  drivers: [],
  loading: false,
  error: false,
  selected: undefined
}

export const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    setDrivers: (state: DriverState, action: PayloadAction<Driver[]>) => {
      state.drivers = action.payload
    },
    setLoading: (state: DriverState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state: DriverState, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setSelected: (state: DriverState, action: PayloadAction<Driver | undefined>) => {
      state.selected = action.payload
    },
  },
})

export const { 
  setDrivers,
  setLoading,
  setError,
  setSelected
} = driverSlice.actions

export default driverSlice.reducer