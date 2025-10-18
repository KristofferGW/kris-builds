// app/components/Container.tsx
import { ReactNode } from "react";

export default function Container({ children, className = "" }: { children: ReactNode; className?: string; }) {
  return (
    <div className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
