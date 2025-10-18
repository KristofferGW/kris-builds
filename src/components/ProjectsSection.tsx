export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-xl font-semibold mb-6 text-center">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Micro-apps card */}
        <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm">
          <h3 className="text-lg font-medium mb-2">AI-powered micro-apps</h3>
          <p className="text-sm text-gray-700">
            Tiny tools that solve real problems — built with AI integrations.
          </p>
        </div>

        {/* Golf brand card */}
        <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm">
          <h3 className="text-lg font-medium mb-2">Swedish golf brand</h3>
          <p className="text-sm text-gray-700">
            Minimalist Swedish golf products — launching soon.
          </p>
        </div>
      </div>
    </section>
  )
}
