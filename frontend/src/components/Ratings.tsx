import { useAppSelector } from "../hooks/storeHooks";
import {
  selectRatings,
  selectRatingsError,
  selectRatingsLoading,
} from "../store/rating/ratingSelectors";
import type { Rating } from "../types/rating";
import { RatingSummary } from "./RatingSummary";

export const Ratings = () => {
  const ratings = useAppSelector(selectRatings);
  const loading = useAppSelector(selectRatingsLoading);
  const error = useAppSelector(selectRatingsError);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {ratings.map((rating: Rating) => (
        <RatingSummary rating={rating} />
      ))}
    </div>
  );
};
