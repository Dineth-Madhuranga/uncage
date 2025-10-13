"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  BarChart3,
  Users,
  Building,
  Rocket,
  TrendingUp,
  MessageSquare,
  Brain,
  PieChart,
  Eye,
  Settings,
  Zap,
  Globe,
  Shield,
} from "lucide-react"
import { TbBrandJavascript } from "react-icons/tb"
import { FaPython, FaJava, FaPhp } from "react-icons/fa"
import { FaReact, FaAngular, FaNode, FaAws, FaMicrosoft } from "react-icons/fa"
import { SiKotlin, SiFlutter, SiSap, SiGooglecloud, SiDocker, SiKubernetes, SiGitlab, SiJenkins, SiGoogleads, SiMeta, SiGoogleanalytics, SiHubspot, SiSemrush, SiTensorflow, SiPytorch, SiOpencv, SiGoogle } from "react-icons/si"
import { FaSwift } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ScrollAnimate } from "@/components/scroll-animate"

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background fade-in">
        <header
          className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
            scrolled ? "glass-nav" : "bg-transparent"
          } rounded-2xl`}
        >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center animate-pulse-glow">
                <Image
                  src="https://i.postimg.cc/WpyMPWx0/Generated-Image-September-28-2025-4-11-PM-removebg-preview.png"
                  alt="UNCAGE Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UNCAGE
                </h1>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground font-medium hover:text-primary transition-colors">
                HOME
              </a>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                ABOUT US
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                CAREERS
              </Link>
            </div>

            <Link href="/contact">
              <Button className="btn-primary font-semibold px-6">CONTACT US</Button>
            </Link>
          </nav>
        </div>

        <div className="text-center py-3 bg-gradient-to-r from-primary/20 to-accent/20 animate-gradient">
          <p className="text-sm text-foreground">
            We build <span className="text-primary font-semibold">Future-Ready</span> Solutions
          </p>
        </div>
      </header>

      <div className="pt-32">
        {/* Hero Section */}
        <section id="home" className="hero-gradient py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-12 animate-float"></div>
            <div
              className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl rotate-45 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 right-60 w-24 h-24 bg-gradient-to-br from-primary/70 to-accent/70 rounded-2xl -rotate-12 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-br from-accent/70 to-primary/70 rounded-2xl rotate-45 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="mb-8">
                <div className="inline-block bg-gradient-to-r from-primary/30 to-accent/30 text-primary px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse-glow">
                  FUTURE-READY.
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 text-balance animate-fade-in">
                  TODAY.
                </h1>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                UNCAGE
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Pioneering cutting-edge solutions to redefine tomorrow's technological landscape.
              </p>

              <Link href="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-4 hover-lift focus-smooth">
                  BOOK AN APPOINTMENT <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <ScrollAnimate>
          <section className="section-gradient py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <p className="text-primary font-bold mb-4 tracking-wider">WHO WE HELP</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Built for Builders, Backed by Experience
                </h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  From bold startups to scaling SMEs and process-driven enterprises—we empower organizations at every
                  stage of growth. Whether you're launching a new product, modernizing legacy systems, or transforming
                  operations with ERP, we bring the right mix of agility, experience, and strategy to help you move
                  faster, smarter, and more confidently in your digital journey.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollAnimate delay={100}>
                  <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105 hover-lift">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                        <Rocket className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Startups</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        MVPs and SaaS products built for rapid scaling and funding readiness
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                  <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105 hover-lift">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                        <TrendingUp className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">SMEs</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Digital transformation and systems to support your growth
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimate>

                <ScrollAnimate delay={300}>
                  <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105 hover-lift">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                        <Building className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Enterprises</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        ERP optimization and legacy system modernization
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimate>
              </div>
            </div>
          </section>
        </ScrollAnimate>

        {/* About Section */}
        <ScrollAnimate>
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollAnimate delay={100}>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted to-card rounded-3xl overflow-hidden">
                      <Image
                        src="/diverse-dev-team.png"
                        alt="Team collaboration"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                  <div>
                    <p className="text-primary font-bold mb-4 tracking-wider">ABOUT US</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                      Blending Global Expertise with Local Insight
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      UNCAGE is a next-generation IT solutions company with global expertise in ERP and deep specialization
                      in digital technologies. We design and deliver intelligent, scalable systems that empower businesses
                      to modernize operations, accelerate growth, and stay competitive in today's dynamic digital landscape.
                      With successful projects across Europe, the Middle East, and Asia, we combine real-world business
                      acumen with cutting-edge technologies. At UNCAGE, we don't just build solutions. We engineer
                      transformation engines that drive sustainable growth.
                    </p>
                    <Link href="/about">
                      <Button className="btn-outline hover-lift focus-smooth">LEARN MORE</Button>
                    </Link>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </section>
        </ScrollAnimate>

        {/* Solutions Section */}
        <section className="section-gradient py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-bold mb-4 tracking-wider">OUR SOLUTIONS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Smart Tech. Real Impact.
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our solutions are designed to solve real problems—faster, smarter, and with measurable results. From ERP
                transformations to agile SaaS launches and custom cloud applications, we deliver technology that aligns
                with your business goals. Whether you're scaling a startup or modernizing an enterprise, our tailored
                approach ensures you get the right solution with long-term value. We don't just build software—we build
                your competitive edge.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* ERP Solutions */}
              <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">ERP Solutions</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    We offer SAP and IFS implementation, customization, post-go-live support, business process
                    automation, data migration, and master data strategy development with full system lifecycle
                    management.
                  </p>
                  <Link href="/services">
                    <Button size="sm" className="btn-outline text-xs">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Application Development */}
              <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Application Development</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    We develop custom web applications, mobile apps for iOS, Android, and cross-platform use, SaaS
                    products, MVPs for startups, and build enterprise-grade architectures with API integrations.
                  </p>
                  <Link href="/services">
                    <Button size="sm" className="btn-outline text-xs">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* AI Solutions */}
              <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Artificial Intelligence Solutions</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    At UNCAGE, we build tailored AI solutions - machine learning, NLP, vision, and automation - to solve
                    real business challenges, automate processes, enhance experiences, and turn AI into measurable
                    competitive advantage.
                  </p>
                  <Button size="sm" className="btn-outline text-xs">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>

              {/* Digital Marketing */}
              <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Digital Marketing and Brand Strategy</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Our services include SEO, paid ads on Google and Meta platforms, social media marketing, branding,
                    logo and visual identity design, content marketing for conversion, and CRM-integrated email
                    campaigns.
                  </p>
                  <Button size="sm" className="btn-outline text-xs">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>

              {/* Website Design */}
              <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-muted to-card rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/project-grid/project-2.png"
                      alt="Website Design"
                      width={200}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Website Design and Development</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    We craft corporate and business websites, e-commerce platforms using Shopify, WooCommerce, and
                    custom code, CMS solutions with WordPress, Joomla, and Drupal, with strong focus on UX/UI design and
                    mobile-first optimization.
                  </p>
                  <Button size="sm" className="btn-outline text-xs">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media Management */}
              <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-muted to-card rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/social-media-content-planning-and-strategy.jpg"
                      alt="Social Media Management"
                      width={200}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Social Media Management</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    We manage profile branding, strategic setup, monthly content calendars, influencer collaborations,
                    audience engagement, analytics, performance reporting, along with short-form video creation for
                    platforms like Instagram Reels and TikTok.
                  </p>
                  <Button size="sm" className="btn-outline text-xs">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>

              {/* On-Demand Freelance */}
              <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-muted to-card rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/freelance-professional-working-on-laptop.jpg"
                      alt="On-Demand Freelance Services"
                      width={200}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">On-Demand Freelance Services</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    We operate with a global network of highly skilled freelance professionals to offer project-based
                    development, resource augmentation, who work in partnerships, and startup launch support.
                  </p>
                  <Button size="sm" className="btn-outline text-xs">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>

              {/* Blockchain Services */}
              <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-muted to-card rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/blockchain-technology-and-cryptocurrency-visualiza.jpg"
                      alt="Blockchain Services"
                      width={200}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Blockchain Services</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    At UNCAGE, we leverage blockchain technology to create transparent, secure, and efficient systems
                    that revolutionize traditional business models.
                  </p>
                  <Button size="sm" className="btn-outline text-xs">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-bold mb-4 tracking-wider">TECHNOLOGIES WE USE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Cutting-edge tools and platforms to deliver exceptional results
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We bring global ERP and transformation experience combined with cross-platform development capabilities.
                Our delivery model is agile and client-centric. We offer transparent pricing and full project ownership.
                Execution is fast, reliable, and driven by a quality-first mindset. Our flexible freelance model ensures
                scalable, cost-effective delivery. We also provide long-term support and dedicated teams to guide your
                journey from idea to impact.
              </p>
            </div>

            {/* Programming Languages */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {[
                  { name: "JavaScript", icon: TbBrandJavascript, gradient: "from-yellow-500 to-yellow-600" },
                  { name: "Python", icon: FaPython, gradient: "from-blue-500 to-blue-600" },
                  { name: "Java", icon: FaJava, gradient: "from-red-500 to-red-600" },
                  { name: "PHP", icon: FaPhp, gradient: "from-purple-500 to-purple-600" },
                  { name: "Swift", icon: FaSwift, gradient: "from-orange-500 to-orange-600" },
                  { name: "Kotlin", icon: SiKotlin, gradient: "from-purple-600 to-purple-700" },
                ].map((lang) => (
                  <Card
                    key={lang.name}
                    className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${lang.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                      >
                        <lang.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground">{lang.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Database className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Frameworks & Libraries</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { name: "React", icon: FaReact, gradient: "from-blue-400 to-blue-500" },
                  { name: "Angular", icon: FaAngular, gradient: "from-red-600 to-red-700" },
                  { name: "Node.js", icon: FaNode, gradient: "from-green-600 to-green-700" },
                  { name: "Laravel", icon: Database, gradient: "from-red-500 to-red-600" },
                  { name: "Spring Boot", icon: Database, gradient: "from-green-500 to-green-600" },
                ].map((framework) => (
                  <Card
                    key={framework.name}
                    className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${framework.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                      >
                        <framework.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground">{framework.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Smartphone className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mobile Development</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Flutter", icon: SiFlutter, gradient: "from-blue-400 to-blue-500" },
                  { name: "React Native", icon: FaReact, gradient: "from-blue-600 to-blue-700" },
                  { name: "Swift (iOS)", icon: FaSwift, gradient: "from-orange-500 to-orange-600" },
                  { name: "Kotlin (Android)", icon: SiKotlin, gradient: "from-purple-600 to-purple-700" },
                ].map((mobile) => (
                  <Card
                    key={mobile.name}
                    className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${mobile.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                      >
                        <mobile.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground">{mobile.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Cloud className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">ERP & Cloud Platforms</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {[
                  { name: "SAP S/4HANA", icon: SiSap, gradient: "from-blue-600 to-blue-700" },
                  { name: "SAP ECC", icon: SiSap, gradient: "from-blue-500 to-blue-600" },
                  { name: "IFS Cloud", icon: Cloud, gradient: "from-purple-600 to-purple-700" },
                  { name: "AWS", icon: FaAws, gradient: "from-orange-500 to-orange-600" },
                  { name: "Google Cloud", icon: SiGooglecloud, gradient: "from-green-500 to-green-600" },
                ].map((platform) => (
                  <Card
                    key={platform.name}
                    className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${platform.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                      >
                        <platform.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground text-sm">{platform.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Wrench className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">DevOps & Tools</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Docker", icon: SiDocker, gradient: "from-blue-500 to-blue-600" },
                  { name: "Kubernetes", icon: SiKubernetes, gradient: "from-blue-600 to-blue-700" },
                  { name: "GitLab CI/CD", icon: SiGitlab, gradient: "from-orange-600 to-orange-700" },
                  { name: "Jenkins", icon: SiJenkins, gradient: "from-gray-600 to-gray-700" },
                ].map((tool) => (
                  <Card
                    key={tool.name}
                    className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                      >
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground">{tool.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Marketing Tools */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <BarChart3 className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Marketing Tools</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { name: "Google Ads", icon: SiGoogleads, gradient: "from-blue-500 to-blue-600" },
                  { name: "Meta Ads", icon: SiMeta, gradient: "from-blue-600 to-blue-700" },
                  { name: "Google Analytics", icon: SiGoogleanalytics, gradient: "from-orange-500 to-orange-600" },
                  { name: "HubSpot", icon: SiHubspot, gradient: "from-orange-600 to-orange-700" },
                  { name: "SEMrush", icon: SiSemrush, gradient: "from-orange-500 to-orange-600" },
                ].map((tool) => (
                  <Card
                    key={tool.name}
                    className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                      >
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground">{tool.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            
          </div>
        </section>

        {/* AI Solutions Detail Section */}
        <section className="section-gradient py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Artificial Intelligence Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We transform complex data into intelligent systems that drive business growth and innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="glass-card border-primary/30 h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">AI That Transforms Businesses</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      At UNCAGE, we lead with intelligent technology building smart, adaptive systems that scale with
                      your business. Our AI-powered solutions automate processes, reveal actionable insights, and drive
                      innovation across every stage of growth.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're a startup or enterprise, we deliver custom AI implementations that fit seamlessly
                      into your workflow ensuring immediate impact and long-term value from day one.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl flex items-center justify-center mb-4">
                      <PieChart className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Predictive Analytics</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Anticipate market trends and customer behavior with our advanced forecasting models that
                      continuously learn from your data streams.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">NLP Systems</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Implement conversational AI that understands context, sentiment, and intent for superior customer
                      interactions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional AI Solutions */}
            <div className="mt-16">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Computer Vision</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Deploy visual recognition systems for quality control, security, and enhanced user experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Process Automation</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Transform operations with AI-driven workflows that learn and optimize business processes
                      autonomously.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Custom AI Models</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Tailored machine learning solutions designed specifically for your unique business challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Industry Leaders Section */
              }
              <div className="text-center">
                <p className="text-muted-foreground font-bold mb-8 tracking-wider">POWERED BY INDUSTRY LEADERS</p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                  {[
                    { name: "TensorFlow", icon: SiTensorflow, gradient: "from-orange-500 to-orange-600" },
                    { name: "PyTorch", icon: SiPytorch, gradient: "from-red-500 to-red-600" },
                    { name: "OpenCV", icon: SiOpencv, gradient: "from-green-500 to-green-600" },
                    { name: "AWS AI", icon: FaAws, gradient: "from-orange-600 to-orange-700" },
                    { name: "Google AI", icon: SiGoogle, gradient: "from-blue-600 to-blue-700" },
                    { name: "Microsoft AI", icon: FaMicrosoft, gradient: "from-blue-500 to-blue-600" },
                  ].map((platform) => (
                    <Card
                      key={platform.name}
                      className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <CardContent className="p-4 text-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${platform.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                        >
                          <platform.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-medium text-foreground text-sm">{platform.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-bold mb-4 tracking-wider">WHY UNCAGE?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Built Different. Built for Impact.
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We bring global ERP and transformation experience combined with cross-platform development capabilities.
                Our delivery model is agile and client-centric. We offer transparent pricing and full project ownership.
                Execution is fast, reliable, and driven by a quality-first mindset. Our flexible freelance model ensures
                scalable, cost-effective delivery. We also provide long-term support and dedicated teams to guide your
                journey from idea to impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Global Delivery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fast solutions across borders with seamless team collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Expert Leadership</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Founder-led projects with proven real-world tech experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-primary/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Agile Execution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Quick iterations with constant feedback for better results.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-accent/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Post-launch care that ensures long-term system stability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Footer */}
        <footer className="bg-background border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center animate-pulse-glow">
                    <Image
                      src="https://i.postimg.cc/5y0g3DBn/uk.png"
                      alt="UNCAGE Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      UNCAGE
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  UNCAGE builds scalable digital solutions from MVPs to ERP empowering startups and enterprises to grow
                  faster with confidence.
                </p>
              </div>

              {/* Useful Links */}
              <div>
                <h4 className="text-lg font-bold text-foreground mb-6">USEFUL LINKS</h4>
                <ul className="space-y-3">
                  <li>
                    <div className="text-muted-foreground hover:text-primary transition-colors">
                      <Link
                        href="https://www.linkedin.com/company/uncage2/"
                        target="_blank"
                        rel="noreferrer"
                        className="h-10 w-10 flex items-center justify-center rounded-xl border border-border/40 hover:border-primary/60 transition-colors"
                      >
                        <span className="text-primary text-sm font-medium">LinkedIn</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-6">CONTACT US</h4>
                <div className="space-y-3 mb-6">
                  <a href="mailto:info@uncage.lk" className="text-muted-foreground hover:text-primary">info@uncage.lk</a>
                  <p className="text-muted-foreground">Sri Lanka</p>
                  <a href="tel:+94772386251" className="text-muted-foreground hover:text-primary">077 238 6251</a>
                </div>

                <h4 className="text-lg font-bold text-foreground mb-4">FOLLOW US</h4>
                <div className="flex space-x-3">
                  <a
                    href="/careers"
                    className="w-10 h-10 bg-gradient-to-br from-muted to-card rounded-xl flex items-center justify-center hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <Users className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/uncage2/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-muted to-card rounded-xl flex items-center justify-center hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 hover:transform hover:scale-110"
                  >
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-12 pt-8 text-center">
              <p className="text-muted-foreground">UNCAGE Pvt.Ltd Copyright © 2025. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
