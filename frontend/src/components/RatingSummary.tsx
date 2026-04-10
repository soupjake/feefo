import type { Rating } from '../types/rating'

type Props = {
    rating: Rating
}

export const RatingSummary = (props: Props) => {
    const { rating } = props

    return (
        <div>
            <p>{`${rating.score} : ${rating.count} : ${rating.average}`}</p>
        </div>
    )
}
