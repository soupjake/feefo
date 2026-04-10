import * as S from "./RatingSummary.styles"
import type { Rating } from "../../types/rating"

type Props = {
    rating: Rating
}

export const RatingSummary = (props: Props) => {
    const { rating } = props

    return (
        <S.Container>
            <p>{rating.score}</p>
            <S.ProgressBar>
                <S.ProgressBarFill $width={rating.average} />
            </S.ProgressBar>
            <p>{rating.count}</p>
        </S.Container>
    )
}
