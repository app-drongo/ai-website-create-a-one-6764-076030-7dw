// Contacthomepage Component
// Generated: 2025-08-28T09:57:55.897Z
// Template: contact-c001
// Context: Homepage
// Position: pages.0.sections.6

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Anchor,
  Calendar
} from "lucide-react"

export default function Contacthomepage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boatType: "",
    rentalDates: "",
    guests: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Rental inquiry submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Réservation Directe",
      description: "Speak with our charter specialists",
      contact: "+33 4 93 87 65 43",
      action: "Call Marina"
    },
    {
      icon: Mail,
      title: "Email Concierge",
      description: "Luxury yacht inquiries",
      contact: "charter@coteazurboats.fr",
      action: "Send Inquiry"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Charter",
      description: "Instant yacht availability",
      contact: "Available 7AM - 10PM",
      action: "Chat Now"
    }
  ]

  const marinas = [
    {
      city: "Cannes",
      address: "Port Pierre Canto, Boulevard de la Croisette",
      timezone: "Premium Fleet Hub"
    },
    {
      city: "Nice",
      address: "Port de Nice, Quai Lunel",
      timezone: "Luxury Yachts"
    },
    {
      city: "Monaco",
      address: "Port Hercule, Monte Carlo",
      timezone: "Superyacht Base"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Anchor className="size-4 mr-2" />
            Charter Inquiry
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Plan Your Perfect
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mediterranean Escape
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to explore the French Riviera in luxury? Contact our yacht charter specialists 
            to create your bespoke Mediterranean sailing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Charter Inquiry Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Request Your Charter Quote
              </CardTitle>
              <CardDescription>
                Tell us about your dream yacht experience and we'll create a personalized proposal within 2 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select guests</option>
                      <option value="2-4">2-4 guests</option>
                      <option value="5-8">5-8 guests</option>
                      <option value="9-12">9-12 guests</option>
                      <option value="12+">12+ guests</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="boatType" className="block text-sm font-medium mb-2">
                      Preferred Vessel Type
                    </label>
                    <select
                      id="boatType"
                      name="boatType"
                      value={formData.boatType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select vessel type</option>
                      <option value="sailing-yacht">Luxury Sailing Yacht</option>
                      <option value="motor-yacht">Motor Yacht</option>
                      <option value="catamaran">Premium Catamaran</option>
                      <option value="superyacht">Superyacht</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="rentalDates" className="block text-sm font-medium mb-2">
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      id="rentalDates"
                      name="rentalDates"
                      value={formData.rentalDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="e.g., July 15-22, 2024"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Charter Details & Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your ideal charter experience, destinations you'd like to visit, special occasions, catering preferences, or any other requirements..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-primary hover:bg-primary/90">
                  Request Charter Quote
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Anchor className="size-5 text-primary" />
                Charter Concierge
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Marina Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Our Marina Locations
              </h3>
              <div className="space-y-3">
                {marinas.map((marina, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-primary">{marina.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{marina.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {marina.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Charter Hours */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Charter Services Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span>7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="text-primary font-medium">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Peak Season</span>
                    <span>Extended Hours May-September</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent font-medium flex items-center gap-2">
                    <Anchor className="size-4" />
                    Concierge services available for all luxury yacht charters
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}