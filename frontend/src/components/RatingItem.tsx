import type { Rating } from '../types/rating'

type Props = {
    rating: Rating
}

export const RatingItem = (props: Props) => {
    const { rating } = props;

    return (
        <div>
            <p>{`Id: ${rating.score}`}</p>
        </div>
    )
}
