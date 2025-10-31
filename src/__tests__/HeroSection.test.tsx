import { render, screen } from "@testing-library/react"
import HeroSection from "@/components/HeroSection"

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />)
    expect(
      screen.getByRole("heading", {
        name: /building ai-powered apps/i,
      })
    ).toBeInTheDocument()
  })

  it("renders the avatar image", () => {
    render(<HeroSection />)
    const img = screen.getByAltText(/kris — builder/i)
    expect(img).toBeInTheDocument()
  })

  it("contains a link to X", () => {
    render(<HeroSection />)
    const link = screen.getByRole("link", { name: /find me on x/i })
    expect(link).toHaveAttribute("href", "https://x.com/buildsbykris")
  })

  it("contains the email link", () => {
    render(<HeroSection />)
    const email = screen.getByRole("link", { name: /kris@krisbuilds.io/i })
    expect(email).toHaveAttribute("href", "mailto:kris@krisbuilds.io")
  })
})
