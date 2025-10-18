"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const linkClasses = (path: string) =>
    `text-sm font-medium transition-colors ${
      pathname === path
        ? "text-[#5c554e] underline underline-offset-4"
        : "text-[#8a8175] hover:text-[#5c554e]"
    }`

  return (
    <nav className="w-full flex justify-center py-6">
      <div className="flex items-center gap-8">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          About
        </Link>
      </div>
    </nav>
  )
}
