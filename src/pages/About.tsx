import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Leaf, Award, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const About = () => {
  const milestones = [
    { year: "2020", title: "Farm Founded", description: "Frank Kyambi establishes KRAAL & BARN with a vision for sustainable farming" },
    { year: "2021", title: "First Harvest", description: "Successfully harvested first batch of premium honey and vegetables" },
    { year: "2022", title: "Expansion", description: "Added rabbit and fish farming to diversify our product offerings" },
    { year: "2023", title: "Educational Hub", description: "Launched training programs for young farmers in the community" },
    { year: "2024", title: "Digital Presence", description: "Brought our farm online to reach more families and farmers" }
  ];

  const values = [
    {
      icon: <Leaf className="h-12 w-12 text-farm-green" />,
      title: "Sustainability First",
      description: "Every decision we make considers the environmental impact and long-term sustainability of our practices."
    },
    {
      icon: <Award className="h-12 w-12 text-honey-gold" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from animal care to product delivery."
    },
    {
      icon: <Users className="h-12 w-12 text-farm-green-light" />,
      title: "Community Impact",
      description: "Our success is measured by the positive impact we have on our local farming community."
    },
    {
      icon: <Target className="h-12 w-12 text-soil-brown" />,
      title: "Educational Mission",
      description: "We're committed to sharing knowledge and empowering the next generation of farmers."
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-farm-green-lighter to-honey-gold-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="bg-farm-green/20 text-farm-green border-farm-green/30 mb-6">
              🌱 Our Story
            </Badge>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
              About KRAAL & BARN
              <span className="block text-farm-green">Farm Life Revolution</span>
            </h1>
            
            <p className="text-lg text-soil-brown-light max-w-3xl mx-auto leading-relaxed">
              We're more than just a farm - we're a movement toward sustainable agriculture, 
              quality food production, and educational excellence in farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Our Founder
                <span className="block text-farm-green">Frank Kyambi</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Frank Kyambi founded KRAAL & BARN with a clear vision: to transform traditional 
                farming into a sustainable, educational, and profitable venture that benefits 
                both farmers and consumers.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With years of experience in agriculture and a passion for sustainable practices, 
                Frank has built KRAAL & BARN into more than just a farm - it's become a learning 
                center where young farmers can gain practical skills and knowledge for modern agriculture.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-farm-green rounded-full mt-2" />
                  <div>
                    <span className="font-medium text-foreground">Visionary Leadership:</span>
                    <span className="text-muted-foreground ml-2">
                      Transforming traditional farming through innovation
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-honey-gold rounded-full mt-2" />
                  <div>
                    <span className="font-medium text-foreground">Educational Focus:</span>
                    <span className="text-muted-foreground ml-2">
                      Training the next generation of sustainable farmers
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-farm-green-light rounded-full mt-2" />
                  <div>
                    <span className="font-medium text-foreground">Community Impact:</span>
                    <span className="text-muted-foreground ml-2">
                      Creating opportunities for local farmers and families
                    </span>
                  </div>
                </div>
              </div>
              
              <Button variant="farm" size="lg" className="rounded-full" asChild>
                <Link to="/contact">
                  Connect with Frank
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <Card className="overflow-hidden shadow-farm bg-gradient-earth border-0 animate-scale-in">
              <div className="relative">
                <div className="h-80 bg-gradient-to-br from-farm-green via-farm-green-light to-honey-gold flex items-center justify-center">
                  <div className="w-40 h-40 bg-cream rounded-full flex items-center justify-center shadow-honey">
                    <span className="text-6xl font-serif font-bold text-farm-green">FK</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Frank Kyambi
                </h3>
                <p className="text-farm-green font-medium mb-4">
                  Founder & Agricultural Innovator
                </p>
                <blockquote className="text-muted-foreground italic">
                  "Our farm is not just about producing food - it's about cultivating 
                  knowledge, sustainability, and a better future for African agriculture."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-farm-green mr-4" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide premium quality farm products while creating an educational hub 
                  that empowers young farmers with sustainable agricultural practices, modern 
                  techniques, and entrepreneurial skills for a prosperous farming future.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-honey-gold mr-4" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading agricultural education center in Kenya, recognized for 
                  sustainable farming innovation, premium product quality, and our contribution 
                  to developing skilled, environmentally conscious farmers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at KRAAL & BARN, 
              from how we treat our animals to how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center p-6 hover:shadow-farm transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
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
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              From humble beginnings to becoming a premier agricultural education center
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-farm-green-lighter"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="p-6 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <Badge className="bg-farm-green text-primary-foreground mb-3">
                        {milestone.year}
                      </Badge>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-farm-green rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Farm Life Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're interested in our products, want to learn about sustainable farming, 
            or wish to visit our educational programs, we'd love to connect with you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="farm" size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="honey" size="lg" className="rounded-full px-8" asChild>
              <Link to="/">
                Explore Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;