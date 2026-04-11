import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { Ratings } from "./Ratings"
import { useAppSelector } from "../../hooks/storeHooks"

vi.mock("../../hooks/storeHooks", () => ({
    useAppSelector: vi.fn(),
}))

vi.mock("../ratingsummary/RatingSummary", () => ({
    RatingSummary: ({ rating }: { rating: any }) => (
        <div data-testid="rating-summary">{rating.title}</div>
    ),
}))

describe("Ratings Component", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("should render a loading state", () => {
        ;(useAppSelector as any).mockImplementation((selector: any) => {
            if (selector.name === "selectRatingsLoading") return true
            return null
        })

        render(<Ratings />)
        expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    })

    it("should render an error message", () => {
        ;(useAppSelector as any).mockImplementation((selector: any) => {
            if (selector.name === "selectRatingsError") return "Failed to fetch"
            if (selector.name === "selectRatingsLoading") return false
            return []
        })

        render(<Ratings />)
        expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument()
    })

    it("should render a list of ratings when data is loaded", () => {
        const mockRatings = [
            { id: 1, title: "Great product" },
            { id: 2, title: "Not bad" },
        ]

        ;(useAppSelector as any).mockImplementation((selector: any) => {
            if (selector.name === "selectRatings") return mockRatings
            if (selector.name === "selectRatingsLoading") return false
            if (selector.name === "selectRatingsError") return null
        })

        render(<Ratings />)

        const items = screen.getAllByTestId("rating-summary")
        expect(items).toHaveLength(2)
        expect(screen.getByText("Great product")).toBeInTheDocument()
    })
})
