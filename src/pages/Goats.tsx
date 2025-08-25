import goatVarieties from "@/assets/goat-varieties.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Mountain, Milk, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Goats = () => {
  const goatProducts = [
    {
      name: "Boer Goats (Meat Breed)",
      price: "KSH 25,000",
      rating: 4.9,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=600&h=400&fit=crop",
      features: ["Meat Production", "Fast Growing", "Hardy"],
      description: "Premium Boer goats known for excellent meat production and fast growth rates. Hardy breed adapted to various climates with superior meat quality."
    },
    {
      name: "Saanen Dairy Goats",
      price: "KSH 35,000",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1551993881-c7c2f56b2b08?w=600&h=400&fit=crop",
      features: ["High Milk Yield", "Pure White", "Breeding Stock"],
      description: "World-renowned dairy breed producing high-quality milk with excellent butterfat content. Ideal for commercial dairy operations and cheese making."
    },
    {
      name: "Nubian Goats",
      price: "KSH 28,000",
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
      features: ["Dual Purpose", "Long Ears", "High Butterfat"],
      description: "Distinctive breed with long, pendulous ears. Excellent for both milk and meat production. Known for rich milk with high butterfat content."
    },
    {
      name: "Toggenburg Goats",
      price: "KSH 32,000",
      rating: 4.6,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1570103025911-b0fd74e95ffc?w=600&h=400&fit=crop",
      features: ["Cold Hardy", "Good Milkers", "Swiss Origin"],
      description: "Swiss dairy breed known for consistent milk production and cold weather tolerance. Brown with distinctive white markings on face and legs."
    },
    {
      name: "Kiko Goats",
      price: "KSH 22,000",
      rating: 4.8,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop",
      features: ["Parasite Resistant", "Low Maintenance", "Meat Breed"],
      description: "New Zealand breed known for excellent parasite resistance and low maintenance requirements. Ideal for extensive grazing systems."
    },
    {
      name: "Goat Feed & Supplies",
      price: "KSH 1,500",
      rating: 4.5,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop",
      features: ["Complete Nutrition", "Mineral Rich", "50kg Bag"],
      description: "Specially formulated goat feed with essential vitamins and minerals. Includes concentrates, hay, and mineral supplements for optimal health."
    }
  ];

  const benefits = [
    {
      icon: <Milk className="h-8 w-8 text-farm-green" />,
      title: "High-Quality Milk",
      description: "Our dairy goats produce rich, nutritious milk perfect for families"
    },
    {
      icon: <Mountain className="h-8 w-8 text-honey-gold" />,
      title: "Hardy & Adaptable",
      description: "Goats that thrive in various climates and terrain conditions"
    },
    {
      icon: <Award className="h-8 w-8 text-soil-brown" />,
      title: "Premium Genetics",
      description: "Carefully selected breeding stock with excellent bloodlines"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-honey-gold-light via-cream to-farm-green-lighter overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-soil-brown/20 text-soil-brown border-soil-brown/30 mb-6">
                🐐 Premium Goat Collection
              </Badge>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
                Quality Goats
                <span className="block text-farm-green">For Every Need</span>
              </h1>
              
              <p className="text-lg text-soil-brown-light mb-8 leading-relaxed">
                Discover our exceptional goat collection featuring premium dairy and meat breeds. 
                Our goats are carefully raised with proper nutrition, healthcare, and love, 
                making them perfect for milk production, meat, or breeding purposes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="farm" size="lg" className="rounded-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Goats
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-soil-brown text-soil-brown hover:bg-soil-brown hover:text-cream">
                  Goat Care Guide
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src={goatVarieties}
                  alt="Quality goat breeds"
                  className="w-full rounded-2xl shadow-farm"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-honey-gold rounded-full flex items-center justify-center shadow-honey animate-float">
                  <span className="text-2xl">🌿</span>
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
              Our Goat Selection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully bred goats, perfect for dairy production, 
              meat, or starting your own goat farming venture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goatProducts.map((product, index) => (
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
                      <Badge key={feature} className="bg-soil-brown/90 text-cream border-0">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
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
                      Inquire Now
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

export default Goats;