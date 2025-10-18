import { render, screen } from "@testing-library/react"
import ProjectsSection from "@/components/ProjectsSection"

describe("ProjectsSection", () => {
  it("renders section heading", () => {
    render(<ProjectsSection />)
    expect(screen.getByRole("heading", { name: /Projects/i })).toBeInTheDocument()
  })

  it("renders both project cards", () => {
    render(<ProjectsSection />)
    expect(screen.getByText(/AI-powered micro-apps/i)).toBeInTheDocument()
    expect(screen.getByText(/Swedish golf brand/i)).toBeInTheDocument()
  })
})
