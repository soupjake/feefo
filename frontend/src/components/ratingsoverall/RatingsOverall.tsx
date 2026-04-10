import { useMemo } from "react"
import * as S from "./RatingsOverall.styles"
import { useAppSelector } from "../../hooks/storeHooks"
import {
    selectRatingsOverall,
    selectRatingsError,
    selectRatingsLoading,
} from "../../store/rating/ratingSelectors"
import { getRatingLabel } from "../../helpers/ratingHelpers"
import logo from "../../assets/logo.svg"
import { StarRatings } from "../starratings/StarRatings"

export const RatingsOverall = () => {
    const overall = useAppSelector(selectRatingsOverall)
    const loading = useAppSelector(selectRatingsLoading)
    const error = useAppSelector(selectRatingsError)

    const label = useMemo(() => getRatingLabel(overall), [overall])

    if (loading || error) {
        return null
    }

    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <StarRatings rating={overall} />
            <S.ScoreText>{`${overall} OUT OF 5`}</S.ScoreText>
            <S.ProductRating>
                Product Rating
                <S.Logo src={logo} alt="Feefo Logo" width="140" />
            </S.ProductRating>
        </S.Container>
    )
}
