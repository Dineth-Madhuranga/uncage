"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Code, Brain, TrendingUp, ArrowRight, CheckCircle, Zap, Search, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      category: "Enterprise Solutions",
      icon: <Database className="w-8 h-8" />,
      services: [
        {
          title: "ERP Implementation",
          description: "Complete SAP S/4HANA and custom ERP solutions for enterprise resource planning.",
          features: ["SAP S/4HANA", "Custom ERP Development", "Data Migration", "Process Automation"],
          image: "/erp-dashboard.png",
          pricing: "Starting from $50,000",
        },
        {
          title: "Cloud Infrastructure",
          description: "Scalable cloud solutions on AWS, Azure, and Google Cloud platforms.",
          features: ["Multi-Cloud Setup", "DevOps Integration", "Security Implementation", "Cost Optimization"],
          image: "/cloud-infrastructure.png",
          pricing: "Starting from $15,000",
        },
      ],
    },
    {
      category: "Application Development",
      icon: <Code className="w-8 h-8" />,
      services: [
        {
          title: "Web Applications",
          description: "Modern, responsive web applications using cutting-edge technologies.",
          features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"],
          image: "/project-grid/project-2.png",
          pricing: "Starting from $10,000",
        },
        {
          title: "Mobile Development",
          description: "Native and cross-platform mobile applications for iOS and Android.",
          features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
          image: "/mobile-app-development.png",
          pricing: "Starting from $20,000",
        },
      ],
    },
    {
      category: "AI Solutions",
      icon: <Brain className="w-8 h-8" />,
      services: [
        {
          title: "Machine Learning",
          description: "Custom AI models and machine learning solutions for business automation.",
          features: ["Predictive Analytics", "Computer Vision", "NLP Systems", "Custom AI Models"],
          image: "/ai-machine-learning.png",
          pricing: "Starting from $25,000",
        },
        {
          title: "Process Automation",
          description: "Intelligent automation solutions to streamline business operations.",
          features: ["Workflow Automation", "Document Processing", "Chatbots", "RPA Solutions"],
          image: "/process-automation.png",
          pricing: "Starting from $8,000",
        },
      ],
    },
    {
      category: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8" />,
      services: [
        {
          title: "Brand Strategy",
          description: "Comprehensive digital marketing and brand development services.",
          features: ["Brand Identity", "Social Media Strategy", "Content Marketing", "SEO Optimization"],
          image: "/social-media-content-planning-and-strategy.jpg",
          pricing: "Starting from $5,000",
        },
        {
          title: "Performance Marketing",
          description: "Data-driven marketing campaigns across Google, Meta, and other platforms.",
          features: ["Google Ads", "Meta Ads", "Analytics Setup", "Conversion Optimization"],
          image: "/digital-marketing-analytics.png",
          pricing: "Starting from $3,000",
        },
      ],
    },
  ]

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "MongoDB", icon: "🍃" },
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
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                ABOUT US
              </Link>
              <Link href="/services" className="text-foreground font-medium">
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
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-pulse-glow">OUR SERVICES</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
            Solutions That
            <br />
            Transform Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From enterprise-grade ERP systems to cutting-edge AI solutions, we deliver comprehensive technology services
            that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Enterprise Solutions",
                count: "15+ Projects",
                description: "ERP, Cloud Infrastructure, and Enterprise Applications",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Application Development",
                count: "25+ Apps",
                description: "Web and Mobile Applications with Modern Technologies",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI & Automation",
                count: "10+ AI Models",
                description: "Machine Learning, Computer Vision, and Process Automation",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Digital Marketing",
                count: "20+ Campaigns",
                description: "Brand Strategy, Performance Marketing, and Analytics",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 text-xs">{service.count}</Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">DETAILED SERVICES</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Comprehensive Solutions for Every Need</h2>
          </div>

          <Tabs defaultValue="enterprise" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="enterprise" className="data-[state=active]:bg-primary/20">
                Enterprise
              </TabsTrigger>
              <TabsTrigger value="development" className="data-[state=active]:bg-primary/20">
                Development
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-primary/20">
                AI Solutions
              </TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-primary/20">
                Marketing
              </TabsTrigger>
            </TabsList>

            {services.map((category, categoryIndex) => (
              <TabsContent
                key={categoryIndex}
                value={category.category.toLowerCase().replace(" ", "")}
                className="space-y-8"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="group hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                        <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                          {service.pricing}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 group">
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">TECHNOLOGIES WE USE</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Cutting-edge Tools and Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies and industry-leading platforms to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group hover:scale-110 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">OUR PROCESS</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">How We Deliver Excellence</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements and understand your business goals.",
                icon: <Search className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Planning",
                description: "We create detailed project plans and technical specifications.",
                icon: <Settings className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Development",
                description: "Our expert team builds your solution using best practices.",
                icon: <Code className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deploy, test, and provide ongoing support for your solution.",
                icon: <Zap className="w-6 h-6" />,
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30 relative"
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {process.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 mt-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary">{process.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
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
              <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
                Get a free consultation and detailed project proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full group">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full bg-transparent"
                >
                  View Portfolio
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
                <div>+94 77 2585 824</div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-primary">FOLLOW US</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xs">in</span>
                  </div>
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
