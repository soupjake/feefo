import type { Rating } from "../types/rating";

export const sortRatings = (ratings: Rating[]) => {
    const scoreCounts = new Map<number, number>();

    for (const rating of ratings) {
        const currentCount = scoreCounts.get(rating.score) || 0;
        scoreCounts.set(rating.score, currentCount + 1);
    }

    const summary = Array.from(scoreCounts, ([score, count]) => ({
        score,
        count
    }));

    summary.sort((a, b) => b.score - a.score);

    return summary;
}