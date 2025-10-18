import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl">
        {/* Hero Section */}
        <h1 className="text-2xl md:text-5xl font-semibold mb-6">
          Building AI-powered apps & a Swedish golf brand — documenting the journey.
        </h1>

        <p className="text-lg mb-10 text-gray-700">
          I’m Kris — a builder from Sweden sharing my process, wins, and lessons in public.
        </p>

        <a
          href="https://x.com/buildsbykris"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-3 rounded-full border border-gray-700 hover:bg-gray-100 transition"
        >
          Find me on X →
        </a>

        <div className="mt-12">
          <img
            src="/profile.jpg"
            alt="Kris avatar"
            className="w-32 h-32 mx-auto rounded-full shadow-sm border-2 border-gray-200"
          />
        </div>
      </div>
    </main>
  )
}
