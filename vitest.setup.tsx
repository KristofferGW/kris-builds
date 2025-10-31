import React from "react"
import { vi } from "vitest"
import "@testing-library/jest-dom"
global.React = React

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean
}

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}))

globalThis.IS_REACT_ACT_ENVIRONMENT = true
