import * as S from "./RatingSummary.styles"
import type { Rating } from "../../types/rating"
import star from "../../assets/star.svg"

type Props = {
    rating: Rating
}

export const RatingSummary = (props: Props) => {
    const { rating } = props

    const width = rating.average * 100

    return (
        <S.Container>
            <S.Score>
                {rating.score}
                <S.StarIcon src={star} alt="star-icon" />
            </S.Score>
            <S.ProgressBar>
                <S.ProgressBarFill $width={width} />
            </S.ProgressBar>
            <S.Count>{rating.count}</S.Count>
        </S.Container>
    )
}
