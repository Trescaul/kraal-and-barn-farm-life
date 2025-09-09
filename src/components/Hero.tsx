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
            <span className="text-sm font-medium text-white">Premium Farm Life Experience</span>
            <span className="text-sm font-medium text-blue">Premium Farm Life Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-blue mb-6 leading-tight">
            Welcome to
            <span className="block text-honey-gold">KRAAL & BARN</span>
            <span className="block text-blue">KRAAL & BARN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          <p className="text-lg md:text-xl text-blue max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the finest farm products from our sustainable farm. 
            From golden honey to fresh rabbits, fish, and goats - 
            experience authentic farm life like never before.
@@ -54,7 +54,7 @@
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/70 text-white hover:bg-white hover:text-soil-brown px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300"
              className="border-2 border-blue/70 text-blue hover:bg-blue hover:text-soil-brown px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300"
              asChild
            >
              <Link to="/about">
@@ -78,12 +78,12 @@

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        <div className="w-6 h-10 border-2 border-blue/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
export default Hero;
