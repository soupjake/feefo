import { useAppSelector } from "../hooks/storeHooks"
import {
    selectRatingsOverall,
    selectRatingsError,
    selectRatingsLoading,
} from "../store/rating/ratingSelectors"

export const RatingsOverall = () => {
    const overall = useAppSelector(selectRatingsOverall)
    const loading = useAppSelector(selectRatingsLoading)
    const error = useAppSelector(selectRatingsError)

    if (loading || error) {
        return null
    }

    return (
        <div>
            <p>{overall}</p>
        </div>
    )
}
