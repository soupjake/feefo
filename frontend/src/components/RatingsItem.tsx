import type { Ratings } from '../types/rating'

type Props = {
    item: Ratings
}

export const RatingsItem = (props: Props) => {
    const { item } = props;

    return (
        <div>
            <p>{`${item.score} : ${item.count}`}</p>
        </div>
    )
}
