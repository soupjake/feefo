import type { Rating } from "../types/rating"

export const calculateOverall = (ratings: Rating[]) => {
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

export const getRatingLabel = (average: number) => {
    if (average >= 4) {
        return "Excellent"
    }

    if (average >= 3) {
        return "Good"
    }

    if (average >= 2) {
        return "Average"
    }

    return "Bad"
}
