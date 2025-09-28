import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background fade-in">
      {/* Navigation Skeleton */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-background/10 backdrop-blur-xl border border-border/20 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg skeleton"></div>
              <div className="w-24 h-6 rounded skeleton"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-12 h-4 rounded skeleton"></div>
              <div className="w-16 h-4 rounded skeleton"></div>
              <div className="w-14 h-4 rounded skeleton"></div>
              <div className="w-12 h-4 rounded skeleton"></div>
            </div>
            <div className="w-24 h-8 rounded-full skeleton"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-6 mx-auto mb-6 rounded-full skeleton"></div>
          <div className="space-y-4 mb-6">
            <div className="w-96 h-16 mx-auto rounded skeleton"></div>
            <div className="w-80 h-16 mx-auto rounded skeleton"></div>
          </div>
          <div className="w-72 h-6 mx-auto mb-8 rounded skeleton"></div>
        </div>
      </section>

      {/* Content Cards Skeleton */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl skeleton"></div>
                  <div className="w-32 h-6 mx-auto mb-3 rounded skeleton"></div>
                  <div className="space-y-2">
                    <div className="w-full h-4 rounded skeleton"></div>
                    <div className="w-3/4 h-4 rounded skeleton"></div>
                    <div className="w-1/2 h-4 rounded skeleton"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
