import * as S from "./RatingSummary.styles"
import type { Rating } from "../../types/rating"
import star_grey from "../../assets/star_grey.svg"

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
                <S.StarIcon src={star_grey} alt="star-icon" />
            </S.Score>
            <S.ProgressBar>
                <S.ProgressBarFill $width={width} data-testid="progress-bar-fill" />
            </S.ProgressBar>
            <S.Count>{rating.count}</S.Count>
        </S.Container>
    )
}
