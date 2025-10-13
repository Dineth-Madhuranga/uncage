"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send")
      }
      // Reset form on success
      setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" })
      alert("Thanks! Your message has been sent. We emailed you a confirmation.")
    } catch (err) {
      console.error(err)
      alert("Sorry, we couldn't send your message. Please try again later.")
    } finally {
      setSending(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "info@uncage.lk",
      action: "mailto:info@uncage.lk",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Call or WhatsApp our team during business hours",
      contact: "077 238 6251",
      action: "tel:+94772386251",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant support through our live chat system",
      contact: "Available 9 AM - 6 PM",
      action: "https://wa.me/94772386251",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      description: "Book a consultation call with our experts",
      contact: "Free 30-min consultation",
      action: "mailto:info@uncage.lk?subject=Schedule%20Meeting&body=Hi%20UNCAGE%2C%20I'd%20like%20to%20schedule%20a%20meeting.",
    },
  ]

  const offices = [
    {
      city: "Colombo",
      country: "Sri Lanka",
      address: "123 Business District, Colombo 03, Sri Lanka",
      phone: "077 238 6251",
      email: "colombo@uncage.lk",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Remote",
      country: "Global",
      address: "Available worldwide for remote collaboration",
      phone: "077 238 6251",
      email: "remote@uncage.lk",
      hours: "24/7 Support Available",
    },
  ]

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while enterprise applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive support packages including bug fixes, security updates, performance monitoring, and feature enhancements to ensure your solution continues to perform optimally.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We excel at collaborating with in-house teams, providing additional expertise, or taking full ownership of projects. We adapt our approach to fit your preferred working style.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies (React, Node.js), mobile development (React Native, Flutter), cloud platforms (AWS, Azure, GCP), and AI/ML solutions (Python, TensorFlow).",
    },
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
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">GET IN TOUCH</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Let's Build Something
            <br />
            Amazing Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? We're here to help you every step of the way.
            Get in touch and let's discuss your next big project.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">CONTACT METHODS</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Multiple Ways to Reach Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the communication method that works best for you. We're available across multiple channels to
              provide support and answer your questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30 cursor-pointer"
                onClick={() => {
                  if (method.action.startsWith("mailto:") || method.action.startsWith("tel:")) {
                    window.location.href = method.action
                  } else if (method.action.startsWith("http")) {
                    window.open(method.action, "_blank")
                  }
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary">{method.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{method.description}</p>
                  <div className="text-primary font-medium text-sm">{method.contact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/20">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                          <SelectItem value="erp-solutions">ERP Solutions</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full group"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-lg">
                              {office.city}, {office.country}
                            </h4>
                            <p className="text-muted-foreground text-sm">{office.address}</p>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>{office.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>{office.hours}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose UNCAGE?</h3>
                <div className="space-y-4">
                  {[
                    "24/7 support and maintenance",
                    "Agile development methodology",
                    "Transparent pricing and communication",
                    "Proven track record with 50+ projects",
                    "Expert team with 10+ years experience",
                    "Cutting-edge technology stack",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">FREQUENTLY ASKED</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Common Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our services, process, and approach.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
              <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Schedule a free consultation today and let's discuss how UNCAGE
                can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full group">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full bg-transparent"
                  >
                    View Our Services
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
