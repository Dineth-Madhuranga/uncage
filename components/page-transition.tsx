"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate page transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`transition-all duration-500 ${
        isLoading ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
      }`}
    >
      {children}
    </div>
  )
}