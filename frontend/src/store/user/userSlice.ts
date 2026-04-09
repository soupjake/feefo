import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { UserStatus } from "../../types/UserStatus"

type UserState = {
  lat: number
  lng: number
  status: UserStatus
  quote: string
  loading: boolean
}

export const initialState: UserState = {
  lat: 51.481583,
  lng: -3.179090,
  status: 'idle',
  quote: "",
  loading: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLocation: (state: UserState, action: PayloadAction<number[]>) => {
      const [lat, lng] = action.payload
      state.lat = lat
      state.lng = lng
    },
    setStatus: (state: UserState, action: PayloadAction<UserStatus>) => {
      state.status = action.payload
    },
    setQuote: (state: UserState, action: PayloadAction<string>) => {
      state.quote = action.payload
    },
    setLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
})

export const { 
  setLocation,
  setStatus,
  setQuote,
  setLoading
} = userSlice.actions

export default userSlice.reducer