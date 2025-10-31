import { render, screen } from "@testing-library/react"
import ProjectsSection from "@/components/ProjectsSection"

describe("ProjectsSection", () => {
  it("renders section heading", () => {
    render(<ProjectsSection />)
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument()
  })

  it("renders both project cards", () => {
    render(<ProjectsSection />)
    expect(screen.getByText(/AI-powered apps/i)).toBeInTheDocument()
    expect(screen.getByText(/follow along/i)).toBeInTheDocument()
  })
})
