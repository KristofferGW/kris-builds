import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
