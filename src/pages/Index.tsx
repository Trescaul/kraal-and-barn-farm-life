import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <CategorySection />
      <AboutSection />
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-farm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Stay Connected with Farm Life
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get the latest updates on our farm products, seasonal offers, 
              and farming tips delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground"
              />
              <Button 
                variant="secondary"
                size="lg"
                className="rounded-full px-8"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              Join over 1,000+ families enjoying fresh farm products
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soil-brown text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-honey-gold mb-4">
                KRAAL & BARN
              </h3>
              <p className="text-cream/80 mb-4 leading-relaxed">
                Premium farm products and educational hub for sustainable 
                agriculture in Kenya. Quality you can trust, nature you can love.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-cream/60 hover:text-honey-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream/60 hover:text-honey-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream/60 hover:text-honey-gold transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                <li><a href="/honey" className="text-cream/80 hover:text-honey-gold transition-colors">Premium Honey</a></li>
                <li><a href="/rabbits" className="text-cream/80 hover:text-honey-gold transition-colors">Fresh Rabbits</a></li>
                <li><a href="/fish" className="text-cream/80 hover:text-honey-gold transition-colors">Farm Fish</a></li>
                <li><a href="/goats" className="text-cream/80 hover:text-honey-gold transition-colors">Quality Goats</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-cream/80 hover:text-honey-gold transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-cream/80 hover:text-honey-gold transition-colors">Contact</a></li>
                <li><a href="#" className="text-cream/80 hover:text-honey-gold transition-colors">Farm Visits</a></li>
                <li><a href="#" className="text-cream/80 hover:text-honey-gold transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-honey-gold" />
                  <span className="text-cream/80">+254 720 733194</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-honey-gold" />
                  <span className="text-cream/80">info@kraalandbarn.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-honey-gold" />
                  <span className="text-cream/80">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-cream/60 text-sm">
                © 2024 KRAAL & BARN. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-cream/60 hover:text-honey-gold transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-cream/60 hover:text-honey-gold transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-cream/60 hover:text-honey-gold transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
