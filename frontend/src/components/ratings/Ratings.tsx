import * as S from "./Ratings.styles"
import { useAppSelector } from "../../hooks/storeHooks"
import {
    selectRatings,
    selectRatingsError,
    selectRatingsLoading,
} from "../../store/rating/ratingSelectors"
import type { Rating } from "../../types/rating"
import { RatingSummary } from "../ratingsummary/RatingSummary"

export const Ratings = () => {
    const ratings = useAppSelector(selectRatings)
    const loading = useAppSelector(selectRatingsLoading)
    const error = useAppSelector(selectRatingsError)

    if (loading) {
        return <S.Container>Loading...</S.Container>
    }

    if (error) {
        return <S.Container>Error: {error}</S.Container>
    }

    return (
        <S.Container>
            {ratings.map((rating: Rating) => (
                <RatingSummary rating={rating} />
            ))}
        </S.Container>
    )
}
