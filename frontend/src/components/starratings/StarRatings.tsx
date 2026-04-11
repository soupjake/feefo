import * as S from "./StarRatings.styles"
import star from "../../assets/star.svg"

type Props = {
    rating: number
}

export const StarRatings = ({ rating }: Props) => {
    return (
        <S.Container aria-label={`Rating: ${rating} out of 5`}>
            {[...Array(5)].map((_, index) => {
                const fillValue = Math.min(1, Math.max(0, rating - index))
                const fillPercentage = fillValue * 100

                return (
                    <S.StarContainer key={index} aria-hidden="true">
                        <S.StarFilled $width={fillPercentage} data-testid="star-fill" />
                        <S.StarIcon src={star} alt="" />
                    </S.StarContainer>
                )
            })}
        </S.Container>
    )
}
