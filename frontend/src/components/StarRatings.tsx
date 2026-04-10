import * as S from "./StarRatings.styles"
import star from "../assets/star.svg";

type Props = {
  rating: number;
};

export const StarRatings = ({ rating }: Props) => {
  const normalizedRating = Math.min(5, Math.max(0, rating));

  return (
    <S.Container style={{ display: "flex", gap: "4px" }}>
      {[...Array(5)].map((_, index) => {
        const fillValue = Math.min(1, Math.max(0, normalizedRating - index));
        const fillPercentage = fillValue * 100;

        return (
          <S.StarContainer
            key={index}
          >
            <S.StarFilled $width={fillPercentage} />
            <S.StarIcon src={star} alt="star-icon" />
          </S.StarContainer>
        );
      })}
    </S.Container>
  );
};