import * as S from "./StarRatings.styles"
import star from "../../assets/star.svg"

type Props = {
    rating: number
}

export const StarRatings = ({ rating }: Props) => {
    return (
        <S.Container>
            {[...Array(5)].map((_, index) => {
                const fillValue = Math.min(1, Math.max(0, rating - index))
                const fillPercentage = fillValue * 100

                return (
                    <S.StarContainer key={index}>
                        <S.StarFilled $width={fillPercentage} data-testid="star-fill" />
                        <S.StarIcon src={star} alt="star-icon" />
                    </S.StarContainer>
                )
            })}
        </S.Container>
    )
}
