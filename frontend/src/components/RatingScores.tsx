import { useAppSelector } from '../hooks/storeHooks'
import { 
    selectRatings,
    selectRatingsError,
    selectRatingsLoading,
} from '../store/rating/ratingSelectors'
import type { Ratings } from '../types/rating'
import { RatingsItem } from './RatingsItem'

export const RatingScores = () => {
    const ratings = useAppSelector(selectRatings)
    const loading = useAppSelector(selectRatingsLoading)
    const error = useAppSelector(selectRatingsError)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }
    
    return (
        <div>
            {ratings.map((item: Ratings) => <RatingsItem item={item} />)}
        </div>
    )
}
