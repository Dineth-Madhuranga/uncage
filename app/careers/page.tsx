"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Shield,
  Coffee,
  Gamepad2,
  GraduationCap,
  Plane,
  ArrowRight,
  CheckCircle,
  Code,
  Brain,
  TrendingUp,
  Palette,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Colombo",
      salary: "$60,000 - $80,000",
      description:
        "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years experience",
        "React/Node.js expertise",
        "Cloud platforms knowledge",
        "Team leadership skills",
      ],
      posted: "2 days ago",
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      type: "Full-time",
      location: "Remote / Colombo",
      salary: "$70,000 - $90,000",
      description: "Develop cutting-edge AI solutions and machine learning models for our enterprise clients.",
      requirements: ["Python/TensorFlow", "ML algorithms", "Computer Vision", "3+ years experience"],
      posted: "1 week ago",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote / Colombo",
      salary: "$45,000 - $65,000",
      description: "Create beautiful and intuitive user experiences for web and mobile applications.",
      requirements: ["Figma/Adobe Creative Suite", "User research", "Prototyping", "Portfolio required"],
      posted: "3 days ago",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Remote / Colombo",
      salary: "$55,000 - $75,000",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our development teams.",
      requirements: ["AWS/Azure/GCP", "Docker/Kubernetes", "CI/CD pipelines", "Infrastructure as Code"],
      posted: "5 days ago",
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Remote / Colombo",
      salary: "$35,000 - $50,000",
      description: "Drive digital marketing campaigns and grow our brand presence across multiple channels.",
      requirements: ["Google Ads/Meta Ads", "SEO/SEM", "Analytics", "Content creation"],
      posted: "1 week ago",
    },
    {
      title: "Business Analyst",
      department: "Strategy",
      type: "Full-time",
      location: "Remote / Colombo",
      salary: "$40,000 - $60,000",
      description: "Analyze business requirements and bridge the gap between stakeholders and development teams.",
      requirements: ["Requirements gathering", "Process modeling", "Stakeholder management", "Documentation"],
      posted: "4 days ago",
    },
  ]

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs.",
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Flexible Time Off",
      description: "Unlimited PTO policy and flexible working arrangements for work-life balance.",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with modern tools and collaborative team environment.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Market-competitive salaries, equity options, and performance bonuses.",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Fun & Recreation",
      description: "Team events, game rooms, and social activities to build strong relationships.",
    },
  ]

  const departments = [
    { name: "Engineering", count: 12, icon: <Code className="w-5 h-5" /> },
    { name: "AI Research", count: 5, icon: <Brain className="w-5 h-5" /> },
    { name: "Design", count: 4, icon: <Palette className="w-5 h-5" /> },
    { name: "Marketing", count: 3, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Infrastructure", count: 3, icon: <Shield className="w-5 h-5" /> },
    { name: "Strategy", count: 2, icon: <Users className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Glassmorphism Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-background/10 backdrop-blur-xl border border-border/20 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="https://i.postimg.cc/5y0g3DBn/uk.png"
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
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                ABOUT US
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                SERVICES
              </Link>
              <Link href="/careers" className="text-foreground font-medium">
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
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">JOIN OUR TEAM</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Build the Future
            <br />
            With UNCAGE
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join a team of passionate innovators who are transforming businesses through cutting-edge technology. We're
            looking for talented individuals who want to make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full group">
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full bg-transparent"
            >
              Learn About Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20">OUR CULTURE</Badge>
              <h2 className="text-4xl font-bold text-balance">Where Innovation Meets Collaboration</h2>
              <p className="text-muted-foreground leading-relaxed">
                At UNCAGE, we believe that great products come from great teams. Our culture is built on trust,
                transparency, and continuous learning. We encourage experimentation, celebrate failures as learning
                opportunities, and support each other's growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Remote-first approach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Flexible working hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Continuous learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Inclusive environment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/diverse-dev-team.png"
                alt="UNCAGE Team Culture"
                width={600}
                height={400}
                className="relative rounded-2xl border border-border/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">BENEFITS & PERKS</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Why You'll Love Working Here</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive benefits and perks designed to support your professional growth and personal
              well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">OUR DEPARTMENTS</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Diverse Teams, Unified Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{dept.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{dept.name}</h3>
                    <p className="text-muted-foreground text-sm">{dept.count} team members</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">OPEN POSITIONS</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Current Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role to advance your career with UNCAGE.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary/20">
                All ({jobOpenings.length})
              </TabsTrigger>
              <TabsTrigger value="engineering" className="data-[state=active]:bg-primary/20">
                Engineering (3)
              </TabsTrigger>
              <TabsTrigger value="design" className="data-[state=active]:bg-primary/20">
                Design (1)
              </TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-primary/20">
                Other (2)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6">
                {jobOpenings.map((job, index) => (
                  <Card
                    key={index}
                    className="group hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <Badge className="bg-primary/10 text-primary border-primary/20">{job.department}</Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.map((req, reqIndex) => (
                              <Badge key={reqIndex} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <Badge variant="outline" className="text-xs">
                            Posted {job.posted}
                          </Badge>
                          <Button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 group">
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="engineering" className="space-y-6">
              <div className="grid gap-6">
                {jobOpenings
                  .filter((job) => ["Engineering", "AI Research", "Infrastructure"].includes(job.department))
                  .map((job, index) => (
                    <Card
                      key={index}
                      className="group hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-semibold">{job.title}</h3>
                              <Badge className="bg-primary/10 text-primary border-primary/20">{job.department}</Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, reqIndex) => (
                                <Badge key={reqIndex} variant="outline" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="text-xs">
                              Posted {job.posted}
                            </Badge>
                            <Button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 group">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="space-y-6">
              <div className="grid gap-6">
                {jobOpenings
                  .filter((job) => job.department === "Design")
                  .map((job, index) => (
                    <Card
                      key={index}
                      className="group hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-semibold">{job.title}</h3>
                              <Badge className="bg-primary/10 text-primary border-primary/20">{job.department}</Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, reqIndex) => (
                                <Badge key={reqIndex} variant="outline" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="text-xs">
                              Posted {job.posted}
                            </Badge>
                            <Button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 group">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-6">
              <div className="grid gap-6">
                {jobOpenings
                  .filter((job) => ["Marketing", "Strategy"].includes(job.department))
                  .map((job, index) => (
                    <Card
                      key={index}
                      className="group hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-semibold">{job.title}</h3>
                              <Badge className="bg-primary/10 text-primary border-primary/20">{job.department}</Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, reqIndex) => (
                                <Badge key={reqIndex} variant="outline" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="text-xs">
                              Posted {job.posted}
                            </Badge>
                            <Button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 group">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 text-balance">Don't See the Perfect Role?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation. Send us your resume
                and let us know how you'd like to contribute to UNCAGE's mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full group">
                    Send Your Resume
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full bg-transparent"
                >
                  Join Our Talent Pool
                </Button>
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
