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
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-blue-500 mb-6 leading-tight bg-black/60 px-6 py-3 inline-block rounded-lg mx-auto">
            Welcome to
            <span className="block text-blue-500">KRAAL & BARN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-400 max-w-2xl mx-auto mt-4 mb-20 leading-relaxed bg-black/60 px-6 py-4 rounded-lg">
            Discover the finest farm products from our sustainable farm. 
            From golden honey to fresh rabbits, fish, and goats - 
            experience authentic farm life like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-24">
            <Button 
              size="lg"
              className="bg-farm-green hover:bg-farm-green-light text-white px-8 py-4 rounded-full shadow-farm hover:shadow-honey transition-all duration-300 group"
              asChild
            >
              <Link to="/honey">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg"
              className="bg-farm-green hover:bg-farm-green-light text-white px-8 py-4 rounded-full shadow-farm hover:shadow-honey transition-all duration-300"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
