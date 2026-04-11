import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { RatingsOverall } from "./RatingsOverall"
import { useAppSelector } from "../../hooks/storeHooks"
import * as ratingHelpers from "../../helpers/ratingHelpers"

vi.mock("../../hooks/storeHooks", () => ({
    useAppSelector: vi.fn(),
}))

vi.mock("../../helpers/ratingHelpers", () => ({
    getRatingLabel: vi.fn(),
}))

vi.mock("../starratings/StarRatings", () => ({
    StarRatings: ({ rating }: { rating: number }) => (
        <div data-testid="star-ratings">Stars: {rating}</div>
    ),
}))

vi.mock("../../assets/logo.svg", () => ({
    default: "test-file-stub",
}))

describe("RatingsOverall Component", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("should return null (render nothing) when loading", () => {
        ;(useAppSelector as any).mockImplementation((selector: any) => {
            if (selector.name === "selectRatingsLoading") return true
            return null
        })

        const { container } = render(<RatingsOverall />)
        expect(container.firstChild).toBeNull()
    })

    it("should return null when there is an error", () => {
        ;(useAppSelector as any).mockImplementation((selector: any) => {
            if (selector.name === "selectRatingsError") return "Error!"
            if (selector.name === "selectRatingsLoading") return false
            return null
        })

        const { container } = render(<RatingsOverall />)
        expect(container.firstChild).toBeNull()
    })

    it("should render the full ratings UI when data is present", () => {
        const mockScore = 4.5
        const mockLabel = "Excellent"

        vi.mocked(ratingHelpers.getRatingLabel).mockReturnValue(mockLabel)
        ;(useAppSelector as any).mockImplementation((selector: any) => {
            if (selector.name === "selectRatingsOverall") return mockScore
            if (selector.name === "selectRatingsLoading") return false
            if (selector.name === "selectRatingsError") return null
        })

        render(<RatingsOverall />)

        expect(screen.getByText(mockLabel)).toBeInTheDocument()
        expect(screen.getByText("4.5 OUT OF 5")).toBeInTheDocument()
        expect(screen.getByTestId("star-ratings")).toHaveTextContent("Stars: 4.5")

        const logo = screen.getByAltText(/feefo logo/i)
        expect(logo).toBeInTheDocument()
    })
})
