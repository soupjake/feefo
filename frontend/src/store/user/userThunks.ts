import { getQuote } from "../../services/quoteService"
import type { AppThunk } from "../store"
import { selectUser } from "./userSelectors"
import { setLoading, setQuote } from "./userSlice"

export const fetchQuoteById =
  (id: string): AppThunk => async (dispatch, getState) => {
    const { lat, lng, loading } = selectUser(getState())

    if (!loading) {
      dispatch(setLoading(true))
      try {
        const quote = await getQuote(id, lat, lng)

        if (typeof quote === "string") {
          dispatch(setQuote(quote))
        }
      } catch (e) {
        console.log(e)
      }

      dispatch(setLoading(false))
    }
  }