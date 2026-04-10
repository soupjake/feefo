import { calculateOverall } from "../../helpers/ratingHelpers"
import { getRatings } from "../../services/ratingService"
import type { AppThunk } from "../store"
import { selectRating } from "./ratingSelectors"
import { setRatings, setError, setLoading, setOverall } from "./ratingSlice"

export const fetchRatings = (): AppThunk<Promise<boolean>> => async (dispatch, getState) => {
    const { ratings, loading } = selectRating(getState())

    if (!ratings.length && !loading) {
        dispatch(setLoading(true))

        try {
            const data = await getRatings()

            if (data?.length) {
                dispatch(setRatings(data))

                const overall = calculateOverall(data)
                dispatch(setOverall(overall))
            }
        } catch (e) {
            console.log(e)
            dispatch(setError(true))
        }

        dispatch(setLoading(false))
    }

    return true
}
