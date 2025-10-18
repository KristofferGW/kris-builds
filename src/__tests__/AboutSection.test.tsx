import { render, screen } from "@testing-library/react"
import AboutSection from "@/components/AboutSection"

describe("AboutSection", () => {
  it("renders about paragraph text", () => {
    render(<AboutSection />)
    expect(
      screen.getByText(/I build small, focused products/i)
    ).toBeInTheDocument()
  })
})
