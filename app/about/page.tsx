"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Heart, Award, TrendingUp, Shield, Lightbulb, ArrowRight, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Glassmorphism Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-background/10 backdrop-blur-xl border border-border/20 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="https://i.postimg.cc/WpyMPWx0/Generated-Image-September-28-2025-4-11-PM-removebg-preview.png"
                  alt="UNCAGE Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                UNCAGE
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-foreground font-medium">
                ABOUT US
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                SERVICES
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                CAREERS
              </Link>
            </div>

            <Link href="/contact">
              <Button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-full px-6">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">ABOUT UNCAGE</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Unleashing Innovation.
            <br />
            Uncaging Potential.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a next-generation technology company that breaks conventional boundaries to deliver transformative
            digital solutions. Our mission is to uncage the full potential of businesses through cutting-edge
            innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20">OUR STORY</Badge>
              <h2 className="text-4xl font-bold text-balance">Born from Vision, Driven by Innovation</h2>
              <p className="text-muted-foreground leading-relaxed">
                UNCAGE was founded with a simple yet powerful belief: that every business has untapped potential waiting
                to be unleashed. We saw organizations struggling with outdated systems, inefficient processes, and
                limited digital capabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founders, seasoned technology veterans with decades of combined experience, decided to create
                something different. Not just another tech company, but a catalyst for transformation that would help
                businesses break free from their constraints and soar to new heights.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Founded in 2020</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/diverse-dev-team.png"
                alt="UNCAGE Team"
                width={600}
                height={400}
                className="relative rounded-2xl border border-border/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">OUR VALUES</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">The Principles That Drive Us Forward</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation First",
                description:
                  "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Client-Centric",
                description: "Every project starts with understanding our clients' unique challenges and goals.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "We maintain the highest standards in code quality, security, and performance.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaborative Spirit",
                description: "We believe in the power of teamwork and transparent communication.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Continuous Growth",
                description: "We're committed to learning, evolving, and staying ahead of industry trends.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Impact",
                description: "Our solutions are designed to make a positive impact on businesses worldwide.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">OUR TEAM</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Meet the Innovators Behind UNCAGE</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, design, and business
              strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Founder",
                expertise: "Strategic Vision",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                expertise: "Technical Leadership",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Design",
                expertise: "UX/UI Innovation",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Emily Zhang",
                role: "Lead Developer",
                expertise: "Full-Stack Development",
                image: "/placeholder-user.jpg",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="relative w-24 h-24 rounded-full mx-auto border-2 border-border/20"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
              { number: "25+", label: "Happy Clients", icon: <Star className="w-6 h-6" /> },
              { number: "15+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
              { number: "4+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Uncage Your Potential?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the growing number of businesses that have transformed their operations with UNCAGE. Let's discuss
                how we can help you break free from limitations and achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full group">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full bg-transparent"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/WpyMPWx0/Generated-Image-September-28-2025-4-11-PM-removebg-preview.png"
                    alt="UNCAGE Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UNCAGE
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                UNCAGE builds scalable digital solutions from MVPs to ERP empowering startups and enterprises to grow
                faster with confidence.
              </p>
              <Button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-full">
                NEWSLETTER
              </Button>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">USEFUL LINKS</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Services
                </Link>
                <Link
                  href="/careers"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Career
                </Link>
                <Link
                  href="/contact"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">SOLUTION</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>ERP and Enterprise Solutions</div>
                <div>Application Development</div>
                <div>Artificial Intelligence Solutions</div>
                <div>Digital Marketing and Brand Strategy</div>
                <div>Website Design and Development</div>
                <div>Social Media Management</div>
                <div>On-Demand Freelance Services</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">CONTACT US</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>info@uncage.lk</div>
                <div>Sri Lanka</div>
                <div>077 238 6251</div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-primary">FOLLOW US</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xs">f</span>
                  </div>
                  <Link
                    href="https://www.linkedin.com/company/uncage2/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-primary text-xs">in</span>
                  </Link>
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xs">ig</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-sm">UNCAGE Pvt.Ltd Copyright © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
