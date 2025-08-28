// Abouthomepage Component
// Generated: 2025-08-28T09:57:55.897Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.5

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Anchor, 
  Users, 
  Award, 
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Shield,
  Heart,
  Waves
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Anchor,
      title: "Maritime Excellence",
      description: "With decades of experience navigating the French Riviera, we provide unmatched expertise in luxury yacht charters and coastal adventures."
    },
    {
      icon: Waves,
      title: "Premium Fleet",
      description: "Our carefully curated collection of luxury yachts and boats ensures every voyage meets the highest standards of comfort and elegance."
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Every charter is tailored to your desires. From intimate sunset cruises to grand celebrations, we craft unforgettable Mediterranean experiences."
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description: "Your safety is paramount. All our vessels are meticulously maintained and operated by certified captains with extensive local knowledge."
    }
  ]

  const stats = [
    { value: "1995", label: "Established", icon: Award },
    { value: "2,500+", label: "Happy Guests", icon: Users },
    { value: "50+", label: "Luxury Vessels", icon: Anchor },
    { value: "15", label: "Coastal Destinations", icon: MapPin }
  ]

  const team = [
    {
      name: "Pierre Dubois",
      role: "Founder & Captain",
      image: "PD",
      bio: "Master mariner with 30+ years sailing the Mediterranean. Passionate about sharing the Riviera's hidden gems."
    },
    {
      name: "Isabelle Martin",
      role: "Charter Director", 
      image: "IM",
      bio: "Luxury hospitality expert ensuring every detail of your charter exceeds expectations."
    },
    {
      name: "Antoine Rousseau",
      role: "Fleet Manager",
      image: "AR",
      bio: "Marine engineer dedicated to maintaining our fleet to the highest safety and luxury standards."
    },
    {
      name: "Camille Leclerc",
      role: "Guest Relations",
      image: "CL",
      bio: "Concierge specialist crafting bespoke experiences along the stunning Côte d'Azur coastline."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Notre Histoire
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Navigating the French Riviera
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Since 1995
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For nearly three decades, we've been the premier choice for luxury boat rentals and yacht charters 
            along the breathtaking Côte d'Azur, creating unforgettable Mediterranean memories.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mediterranean Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by Captain Pierre Dubois in 1995, Côte d'Azur Boat Rentals began as a dream to share 
                the unparalleled beauty of the French Riviera with discerning travelers from around the world.
              </p>
              <p>
                Starting with a single classic yacht in Cannes, we've grown into the region's most trusted 
                luxury charter company, with an exquisite fleet serving the entire Mediterranean coastline 
                from Monaco to Saint-Tropez.
              </p>
              <p>
                Today, we're proud to have welcomed over 2,500 guests aboard our vessels, each experiencing 
                the magic of the Riviera through our passion for maritime excellence and personalized service.
              </p>
            </div>
            <Button className="group">
              Discover Our Fleet
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "The Mediterranean is not just our workplace—it's our passion, our home, our art."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Pierre Dubois, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              The principles that guide every charter and define our dedication to luxury maritime experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Crew</h3>
            <p className="text-muted-foreground">
              The passionate maritime professionals dedicated to making your Riviera experience extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Crew
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "An absolutely magical experience sailing the French Riviera. The yacht was pristine, 
                the crew exceptional, and the hidden coves they showed us were breathtaking. Merci beaucoup!"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Williams</div>
                  <div className="text-sm text-muted-foreground">Private Charter Guest, Monaco</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}