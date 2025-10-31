import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Home Page", () => {
  it("renders all main sections", () => {
    render(<Home />)

    // ✅ Hero heading
    expect(
      screen.getByRole("heading", {
        name: /building ai-powered apps/i,
      })
    ).toBeInTheDocument()

    // ✅ About section
    expect(
      screen.getByText(/freedom through building/i)
    ).toBeInTheDocument()

    // ✅ Projects section
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument()
  })
})
