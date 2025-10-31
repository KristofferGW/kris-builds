import { render, screen } from "@testing-library/react"
import AboutSection from "@/components/AboutSection"

describe("AboutSection", () => {
  it("renders updated about paragraph text", () => {
    render(<AboutSection />)
    expect(
      screen.getByText(/freedom through building/i)
    ).toBeInTheDocument()
  })
})
