import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { TitleInput } from "./TitleInput"
import { getTitle } from "../../services/titleService"

vi.mock("../../services/titleService", () => ({
    getTitle: vi.fn(),
}))

describe("TitleInput Component", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("should update input value on change", () => {
        render(<TitleInput />)
        const input = screen.getByPlaceholderText(/enter a title.../i) as HTMLInputElement

        fireEvent.change(input, { target: { value: "software engineer" } })

        expect(input.value).toBe("software engineer")
    })

    it("should show loading state and then the result on submit", async () => {
        const mockResult = "Software Engineer"
        // We create a promise we can control to test the loading state
        let resolvePromise: (value: string) => void
        const promise = new Promise<string>((resolve) => {
            resolvePromise = resolve
        })

        vi.mocked(getTitle).mockReturnValue(promise)

        render(<TitleInput />)

        const input = screen.getByPlaceholderText(/enter a title.../i)
        const button = screen.getByRole("button", { name: /normalise/i })

        // Type and Submit
        fireEvent.change(input, { target: { value: "software engineer" } })
        fireEvent.click(button)

        expect(button).toBeDisabled()
        expect(screen.getByText(/normalising.../i)).toBeInTheDocument()

        resolvePromise!(mockResult)

        await waitFor(() => {
            expect(screen.getByText(mockResult)).toBeInTheDocument()
        })

        expect(button).not.toBeDisabled()
        expect(button).toHaveTextContent("Normalise")
    })

    it("should not show the result box initially", () => {
        render(<TitleInput />)
        const resultLabel = screen.queryByText(/normalised title:/i)
        expect(resultLabel).not.toBeInTheDocument()
    })
})
