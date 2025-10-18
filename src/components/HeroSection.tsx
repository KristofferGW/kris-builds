"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="text-center">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
        Building AI-powered apps & a Swedish golf brand — documenting the journey.
      </h1>

      <p className="text-base sm:text-lg text-gray-700 mb-8">
        I’m Kris — a builder from Sweden sharing my process, wins, and lessons in public.
      </p>

      <div className="flex flex-col items-center gap-5">
        <a
          href="https://x.com/buildsbykris"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-gray-700 px-5 py-2 text-sm font-medium hover:bg-gray-100 transition"
        >
          Find me on X →
        </a>

        <p className="text-sm text-gray-700">
          Or email me at{" "}
          <a className="underline" href="mailto:kris@krisbuilds.io">
            kris@krisbuilds.io
          </a>
        </p>

        <Image
          src="/profile.jpg"
          alt="Kris — builder"
          width={128}
          height={128}
          className="rounded-full border-2 border-gray-200 shadow-sm"
          priority
        />
      </div>
    </section>
  )
}
