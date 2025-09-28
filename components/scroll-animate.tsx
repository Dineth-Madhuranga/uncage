"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return ref
}

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimate({ children, className = "", delay = 0 }: ScrollAnimateProps) {
  const ref = useScrollAnimation()
  
  return (
    <div
      ref={ref}
      className={`scroll-animate ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}