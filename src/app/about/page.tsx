import Container from "../components/Container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — KrisBuilds",
  description:
    "I build micro-apps and a Swedish golf brand and document the process at krisbuilds.io",
  openGraph: {
    title: "KrisBuilds — About",
    description:
      "Building micro-apps & a Swedish golf brand — documenting the journey.",
    url: "https://krisbuilds.io/about",
  },
  twitter: {
    card: "summary",
    title: "KrisBuilds — About",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <Container>
        {/* Textinnehåll */}
        <h1 className="text-3xl font-semibold mb-4 text-center">About</h1>

        <div className="md:max-w-2xl mx-auto text-slate-700 space-y-6">
          <p>
            I’m Kris — an indie maker from Sweden building small, useful apps and a minimalist golf brand.
            I document everything I learn along the way: technical decisions, product experiments, business
            failures, and wins.
          </p>

          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-lg font-medium mb-2 text-slate-900">
              Why I build
            </h2>
            <p>
              I prefer leverage over time-for-money. My goal is to ship small products that solve specific
              problems and to learn by doing. That way I either create sustainable income or end up with a
              portfolio that opens doors.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-lg font-medium mb-2 text-slate-900">
              Work with me
            </h2>
            <p>
              I’m building full-time — if you want an early look at a product or have an interesting collaboration,
              email <a className="underline" href="mailto:kris@krisbuilds.io">kris@krisbuilds.io</a> or <a href="https://x.com/buildsbykris" target="_blank" rel="noopener noreferrer" className="underline">send me a DM on X</a>.
            </p>
          </section>
          <p>/ Kris</p>
        </div>
      </Container>
    </main>
  )
}
