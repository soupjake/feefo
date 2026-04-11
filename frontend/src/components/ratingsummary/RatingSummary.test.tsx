import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { RatingSummary } from "./RatingSummary"
import type { Rating } from "../../types/rating"

vi.mock("../../assets/star_grey.svg", () => ({
    default: "star-icon-stub",
}))

describe("RatingSummary Component", () => {
    const mockRating: Rating = {
        score: 4,
        average: 0.85,
        count: 120,
    }

    it("should render the score and the count correctly", () => {
        render(<RatingSummary rating={mockRating} />)

        expect(screen.getByText("4")).toBeInTheDocument()
        expect(screen.getByText("120")).toBeInTheDocument()
    })

    it("should render the star icon with correct alt text", () => {
        render(<RatingSummary rating={mockRating} />)

        const icon = screen.getByAltText("star-icon")
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveAttribute("src", "star-icon-stub")
    })

    it("should pass the correctly calculated width to the progress bar", () => {
        render(<RatingSummary rating={mockRating} />)

        const fill = screen.getByTestId("progress-bar-fill")

        expect(fill).toBeInTheDocument()
        expect(fill).toHaveStyle("width: 85%")
    })
})
