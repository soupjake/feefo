import type { Rating } from "../types/rating"

export const calculateOverall = (ratings: Rating[]): number => {
    if (ratings.length === 0) {
        return 0
    }

    let totalPoints = 0
    let totalCount = 0

    ratings.forEach((rating) => {
        totalPoints += rating.score * rating.count
        totalCount += rating.count
    })

    if (totalCount === 0) {
        return 0
    }

    const average = totalPoints / totalCount

    return Math.round(average * 10) / 10
}
