// Services Component
// Generated: 2025-08-28T09:57:55.897Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Anchor,
  Compass,
  Waves,
  Crown,
  Calendar,
  Users,
  MapPin,
  Clock
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "luxury-day-charters",
      title: "Luxury Day Charters",
      description: "Explore the French Riviera's hidden gems in ultimate comfort",
      longDescription: "Our luxury day charters offer the perfect way to experience the Mediterranean's most beautiful coastlines. From Monaco to Saint-Tropez, discover secluded coves, pristine beaches, and glamorous ports with our professional crew.",
      icon: Waves,
      benefits: [
        "Professional captain and crew included",
        "Gourmet catering and premium beverages",
        "Water sports equipment provided",
        "Flexible itinerary planning"
      ],
      pricing: "From €1,200/day",
      timeline: "4-8 hours",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "multi-day-adventures",
      title: "Multi-Day Mediterranean Adventures",
      description: "Extended voyages to explore the entire Côte d'Azur",
      longDescription: "Embark on unforgettable multi-day journeys along the Mediterranean coast. Visit exclusive destinations, enjoy luxury accommodations aboard, and experience the ultimate in yacht charter luxury with our extended voyage packages.",
      icon: Compass,
      benefits: [
        "Luxury cabin accommodations",
        "Michelin-level chef services",
        "Exclusive port access",
        "Personalized concierge service"
      ],
      pricing: "From €8,500/week",
      timeline: "3-14 days"
    },
    {
      id: "event-charters",
      title: "Special Event & Corporate Charters",
      description: "Unforgettable celebrations on the Mediterranean",
      longDescription: "Transform your special occasions into extraordinary memories with our event charter services. Perfect for weddings, corporate retreats, anniversaries, or exclusive parties with stunning Mediterranean backdrops.",
      icon: Crown,
      benefits: [
        "Event planning coordination",
        "Premium entertainment systems",
        "Customized decoration services",
        "Photography and videography options"
      ],
      pricing: "Custom packages available",
      timeline: "4-12 hours"
    },
    {
      id: "seasonal-memberships",
      title: "Seasonal Yacht Memberships",
      description: "Exclusive access to our premium fleet all season long",
      longDescription: "Join our exclusive membership program for unlimited access to our luxury yacht fleet. Enjoy priority booking, member-only events, and significant savings on all charter services throughout the Mediterranean season.",
      icon: Anchor,
      benefits: [
        "Priority fleet access",
        "Member exclusive events",
        "Complimentary crew gratuities",
        "Flexible booking policies"
      ],
      pricing: "From €15,000/season",
      timeline: "April - October",
      badge: "Exclusive"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Charter Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Yacht Experiences
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tailored to Your Dreams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intimate day cruises to extended Mediterranean adventures, discover our premium charter services designed for the most discerning travelers
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Starting:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Book Charter
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Planning a Custom Mediterranean Adventure?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our yacht charter specialists will create a bespoke itinerary tailored to your preferences and desires along the French Riviera.
          </p>
          <Button size="lg">
            Speak with Charter Specialist
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}