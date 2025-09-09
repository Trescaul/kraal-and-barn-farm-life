import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/28bc4edc-3cc4-4614-b6a9-5b259f4e0004.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-soil-brown/20 via-transparent to-soil-brown/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Sparkles className="h-4 w-4 text-white mr-2" />
            <span className="text-sm font-medium text-blue">Premium Farm Life Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-blue mb-6 leading-tight">
            Welcome to
            <span className="block text-blue-500">KRAAL & BARN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the finest farm products from our sustainable farm. 
            From golden honey to fresh rabbits, fish, and goats - 
            experience authentic farm life like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-farm-green hover:bg-farm-blue-light text-primary-foreground px-8 py-4 rounded-full shadow-farm hover:shadow-honey transition-all duration-300 group"
              asChild
            >
              <Link to="/honey">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue/70 text-blue hover:bg-blue hover:text-soil-brown px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-60">
          <div className="w-4 h-4 bg-honey-gold rounded-full" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-farm-green-light rounded-full" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-50" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-honey-gold-light rounded-full" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
