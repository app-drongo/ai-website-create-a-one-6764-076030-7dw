// Footer Component
// Generated: 2025-08-28T09:57:55.897Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Anchor,
  Sailboat
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Yacht Rentals", href: "#services" },
        { name: "Speedboat Charters", href: "#services" },
        { name: "Sailing Boats", href: "#services" },
        { name: "Luxury Cruises", href: "#services" },
        { name: "Day Trips", href: "#services" },
        { name: "Multi-day Charters", href: "#services" }
      ]
    },
    {
      title: "Destinations",
      links: [
        { name: "Cannes", href: "#destinations" },
        { name: "Nice", href: "#destinations" },
        { name: "Monaco", href: "#destinations" },
        { name: "Saint-Tropez", href: "#destinations" },
        { name: "Antibes", href: "#destinations" },
        { name: "Villefranche", href: "#destinations" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Booking Guide", href: "/guide" },
        { name: "Safety Information", href: "/safety" },
        { name: "Weather Updates", href: "/weather" },
        { name: "Captain Services", href: "/captains" },
        { name: "Insurance", href: "/insurance" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Fleet", href: "/fleet" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" }
  ]

  return (
    <footer className="bg-secondary text-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Anchor className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-background">Côte d'Azur Boat Rentals</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Experience the French Riviera like never before. Premium boat rentals and yacht charters 
                along the stunning Côte d'Azur coastline. From Monaco to Saint-Tropez, discover paradise on the Mediterranean.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">info@cotedazurboats.fr</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+33 4 93 12 34 56</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Port de Cannes, 06400 Cannes, France</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background flex items-center gap-2">
                <Sailboat className="size-4" />
                Mediterranean Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get exclusive offers and Mediterranean sailing tips. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/80 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/80">
              <span>© 2024 Côte d'Azur Boat Rentals. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-accent fill-current" /> on the French Riviera
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/80 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/80 group-hover:text-background transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/20">
            <Link href="/privacy" className="text-xs text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cancellation" className="text-xs text-background/70 hover:text-primary transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/licenses" className="text-xs text-background/70 hover:text-primary transition-colors">
              Boat Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}