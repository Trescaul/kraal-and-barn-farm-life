import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Zap, Shield, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Rabbits = () => {
  const rabbitProducts = [
    {
      name: "Premium Breeding Rabbits",
      price: "KSH 3,500",
      rating: 4.9,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop",
      features: ["High Quality", "Vaccinated", "Breeding Ready"]
    },
    {
      name: "Francis Rabbits (8-12 weeks)",
      price: "KSH 2,200",
      rating: Not yet,
      reviews: None,
      image: "honey 1.jpeg",
      features: ["Healthy", "Well-Fed", "8-12 Weeks"]
    },
    {
      name: "Rabbit Feed & Supplies",
      price: "KSH 800",
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop",
      features: ["Nutritious", "Organic", "25kg Bag"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-farm-green" />,
      title: "High Protein Source",
      description: "Lean meat with exceptional nutritional value and low fat content"
    },
    {
      icon: <Shield className="h-8 w-8 text-honey-gold" />,
      title: "Organically Raised",
      description: "Free-range rabbits raised without antibiotics or hormones"
    },
    {
      icon: <Award className="h-8 w-8 text-soil-brown" />,
      title: "Sustainable Choice",
      description: "Eco-friendly livestock with minimal environmental impact"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-farm-green-lighter to-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-farm-green/20 text-farm-green border-farm-green/30 mb-6">
                🐰 Premium Rabbit Collection
              </Badge>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
                Healthy Rabbits
                <span className="block text-farm-green">From Our Farm</span>
              </h1>
              
              <p className="text-lg text-soil-brown-light mb-8 leading-relaxed">
                Discover our premium rabbit collection, raised with care in natural environments. 
                Our rabbits are healthy, well-nourished, and perfect for sustainable farming 
                or as a nutritious protein source for your family.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="farm" size="lg" className="rounded-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Rabbits
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-soil-brown text-soil-brown hover:bg-soil-brown hover:text-cream">
                  Rabbit Care Guide
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=700&h=500&fit=crop"
                  alt="Premium rabbits"
                  className="w-full rounded-2xl shadow-farm"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-farm-green rounded-full flex items-center justify-center shadow-honey animate-float">
                  <span className="text-2xl">🥕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center p-6 border-0 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Rabbit Selection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our healthy, well-cared-for rabbits and quality supplies 
              for your farming or nutrition needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rabbitProducts.map((product, index) => (
              <Card 
                key={product.name}
                className="group hover:shadow-farm transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-card/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-cream/90 backdrop-blur-sm rounded-full hover:bg-cream transition-colors">
                    <Heart className="h-4 w-4 text-soil-brown" />
                  </button>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <Badge key={feature} className="bg-farm-green/90 text-cream border-0">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-honey-gold fill-current' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-farm-green">
                      {product.price}
                    </span>
                    <Button variant="farm" size="sm" className="rounded-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rabbits;
