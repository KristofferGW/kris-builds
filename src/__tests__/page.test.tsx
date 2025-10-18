import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Home Page", () => {
  it("renders all main sections", () => {
    render(<Home />)

    expect(
      screen.getByRole("heading", {
        name: /building ai-powered apps & a swedish golf brand/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/I build small, focused products/i)).toBeInTheDocument()

    expect(screen.getByRole("heading", { name: /Projects/i })).toBeInTheDocument()
  })
})
