import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { StarRatings } from "./StarRatings"

vi.mock("../../assets/star.svg", () => ({
    default: "star-stub",
}))

describe("StarRatings Component", () => {
    it("should render exactly 5 stars", () => {
        render(<StarRatings rating={5} />)
        const stars = screen.getAllByAltText("star-icon")
        expect(stars).toHaveLength(5)
    })

    it("should calculate widths correctly for a whole number rating (e.g., 3)", () => {
        const { container } = render(<StarRatings rating={3} />)

        const fills = container.querySelectorAll('div[class*="StarFilled"]')

        expect(fills[0]).toHaveStyle("width: 100%")
        expect(fills[1]).toHaveStyle("width: 100%")
        expect(fills[2]).toHaveStyle("width: 100%")
        expect(fills[3]).toHaveStyle("width: 0%")
        expect(fills[4]).toHaveStyle("width: 0%")
    })

    it("should calculate widths correctly for a partial rating (e.g., 3.5)", () => {
        const { container } = render(<StarRatings rating={3.5} />)
        const fills = container.querySelectorAll('div[class*="StarFilled"]')

        expect(fills[0]).toHaveStyle("width: 100%")
        expect(fills[1]).toHaveStyle("width: 100%")
        expect(fills[2]).toHaveStyle("width: 100%")
        expect(fills[3]).toHaveStyle("width: 50%")
        expect(fills[4]).toHaveStyle("width: 0%")
    })

    it("should clamp values correctly if rating is out of bounds (e.g., 6)", () => {
        const { container } = render(<StarRatings rating={6} />)
        const fills = container.querySelectorAll('div[class*="StarFilled"]')

        fills.forEach((fill) => {
            expect(fill).toHaveStyle("width: 100%")
        })
    })

    it("should clamp values correctly if rating is negative", () => {
        const { container } = render(<StarRatings rating={-1} />)
        const fills = container.querySelectorAll('div[class*="StarFilled"]')

        fills.forEach((fill) => {
            expect(fill).toHaveStyle("width: 0%")
        })
    })
})
