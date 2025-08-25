import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-farm-green" />,
      title: "Sustainable Farming",
      description: "We practice eco-friendly farming methods that protect our environment for future generations."
    },
    {
      icon: <Award className="h-8 w-8 text-honey-gold" />,
      title: "Premium Quality",
      description: "Every product meets our highest standards, ensuring you receive only the finest farm products."
    },
    {
      icon: <Users className="h-8 w-8 text-farm-green-light" />,
      title: "Educational Hub",
      description: "Transforming young farmers through hands-on education and sustainable farming practices."
    },
    {
      icon: <Target className="h-8 w-8 text-soil-brown" />,
      title: "Visionary Goals",
      description: "Building the future of agriculture through innovation, education, and community engagement."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-farm-green-lighter/50 border border-farm-green-lighter mb-6">
              <span className="text-sm font-medium text-farm-green">About KRAAL & BARN</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transforming Farm Life Through 
              <span className="text-farm-green block">Innovation & Education</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by <strong className="text-farm-green">Frank Kyambi</strong>, KRAAL & BARN represents 
              a visionary approach to modern farming. We're not just a farm - we're an educational 
              hub dedicated to nurturing the next generation of agricultural leaders.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-honey-gold rounded-full" />
                <span className="text-foreground">Premium quality farm products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-farm-green rounded-full" />
                <span className="text-foreground">Sustainable farming practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-soil-brown rounded-full" />
                <span className="text-foreground">Educational programs for young farmers</span>
              </div>
            </div>

            <Button 
              variant="farm"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link to="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>

          {/* Founder Card */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden shadow-farm bg-gradient-earth border-0">
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-farm-green-lighter to-honey-gold-light" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-cream rounded-full flex items-center justify-center shadow-honey">
                    <span className="text-4xl font-serif font-bold text-farm-green">FK</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Frank Kyambi
                </h3>
                <p className="text-farm-green font-medium mb-4">
                  Founder & Visionary
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "My vision is to transform KRAAL & BARN into a premier educational hub 
                  where young farmers can learn sustainable practices and build a better 
                  future for agriculture."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center p-6 hover:shadow-soft transition-all duration-300 bg-card/50 backdrop-blur-sm border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;