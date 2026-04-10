import { describe, it, expect } from "vitest"
import { calculateOverall } from "./ratingHelpers"
import type { Rating } from "../types/rating"

describe("ratingService", () => {
    it("should calculate the correct weighted average from rating summaries", () => {
        // Given
        const ratings = [
            { score: 5, count: 3, average: 0.75 },
            { score: 4, count: 1, average: 0.25 },
        ]

        // When
        const result = calculateOverall(ratings)

        // Then
        expect(result).toBe(4.8)
    })

    it("should handle an empty array by returning 0", () => {
        // Given
        const emptyRatings: Rating[] = []

        // When
        const result = calculateOverall(emptyRatings)

        // Then
        expect(result).toBe(0)
    })
})
