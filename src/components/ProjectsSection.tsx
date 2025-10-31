export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-xl font-semibold mb-6 text-center">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm">
          <h3 className="text-lg font-medium mb-2">AI-powered apps</h3>
          <p className="text-sm text-gray-700">
            Small, focused tools that use AI to solve everyday problems — from coaching to creativity.
          </p>
          {/* <Link href="/apps" className="mt-3 inline-block text-sm font-medium underline">See projects →</Link> */}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm">
          <h3 className="text-lg font-medium mb-2">In public</h3>
          <p className="text-sm text-gray-700">
            I share my process on X — from first prototype to launch. Follow along to see what’s next.
          </p>
          {/* <Link href="https://x.com/buildsbykris" className="mt-3 inline-block text-sm font-medium underline">Follow updates →</Link> */}
        </div>
      </div>
    </section>

  )
}
