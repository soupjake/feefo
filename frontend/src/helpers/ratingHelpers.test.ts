import { describe, it, expect } from "vitest"
import { calculateOverall, getRatingLabel } from "./ratingHelpers"
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

describe("getRatingLabel", () => {
    it("should return Excellent for scores 4 and above", () => {
        expect(getRatingLabel(4.9)).toBe("Excellent")
        expect(getRatingLabel(4.0)).toBe("Excellent")
    })

    it("should return Good for scores between 3 and 4", () => {
        expect(getRatingLabel(3.9)).toBe("Good")
        expect(getRatingLabel(3.0)).toBe("Good")
    })

    it("should return Average for scores between 2 and 3", () => {
        expect(getRatingLabel(2.9)).toBe("Average")
        expect(getRatingLabel(2.0)).toBe("Average")
    })

    it("should return Bad for scores below 2", () => {
        expect(getRatingLabel(1.9)).toBe("Bad")
        expect(getRatingLabel(0)).toBe("Bad")
    })
})
