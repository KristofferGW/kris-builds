// import Link from "next/link"

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
//       <div className="max-w-2xl">
//         {/* Hero Section */}
//         <h1 className="text-2xl md:text-5xl font-semibold mb-6">
//           Building AI-powered apps & a Swedish golf brand — documenting the journey.
//         </h1>

//         <p className="text-lg mb-10 text-gray-700">
//           I’m Kris — a builder from Sweden sharing my process, wins, and lessons in public.
//         </p>

//         <a
//           href="https://x.com/buildsbykris"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block px-5 py-3 rounded-full border border-gray-700 hover:bg-gray-100 transition"
//         >
//           Find me on X →
//         </a>

//         <div className="mt-12">
//           <img
//             src="/profile.jpg"
//             alt="Kris avatar"
//             className="w-32 h-32 mx-auto rounded-full shadow-sm border-2 border-gray-200"
//           />
//         </div>
//       </div>
//     </main>
//   )
// }

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-20">

        {/* 🏠 Hero */}
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

            {/* Avatar */}
            <Image
              src="/profile.jpg" // lägg din bild i /public
              alt="Kris — builder"
              width={128}
              height={128}
              className="rounded-full border-2 border-gray-200 shadow-sm"
              priority
            />
          </div>
        </section>

        {/* 🙋‍♂️ Short bio */}
        <section id="about" className="mx-auto max-w-2xl text-center">
          <p className="text-gray-700 leading-relaxed">
            I build small, focused products because I love turning ideas into things people actually use.
            My aim is freedom through making — learning fast, shipping often, and keeping it simple.
          </p>
        </section>

        {/* ⚙️ Projects */}
        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" className="text-xl font-semibold mb-6 text-center">Projects</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Micro-apps card */}
            <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm">
              <h3 className="text-lg font-medium mb-2">AI-powered micro-apps</h3>
              <p className="text-sm text-gray-700">
                Tiny tools that solve real problems — built with AI integrations.
              </p>
              {/* Lägg ev. länk när första appen är live */}
              {/* <Link href="/apps" className="mt-3 inline-block text-sm font-medium underline">See progress →</Link> */}
            </div>

            {/* Golf brand card */}
            <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Swedish golf brand</h3>
              <p className="text-sm text-gray-700">
                Minimalist Swedish golf products — launching soon.
              </p>
              {/* <Link href="/golf" className="mt-3 inline-block text-sm font-medium underline">See progress →</Link> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
