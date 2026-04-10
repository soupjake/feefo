import { getRatings } from "../../services/ratingService"
import type { AppThunk } from "../store"
import { selectRating } from "./ratingSelectors"
import { setRatings, setError, setLoading } from "./ratingSlice"

export const fetchRatings =
  (): AppThunk<Promise<boolean>> => async (dispatch, getState) => {
    const { ratings, loading } = selectRating(getState())

    if (!ratings.length && !loading) {
      dispatch(setLoading(true))

      try {
        const data = await getRatings()

        if (data?.length) {
          dispatch(setRatings(data))
        }
      } catch (e) {
        console.log(e)
        dispatch(setError(true))
      }

      dispatch(setLoading(false))
    }

    return true
  }
