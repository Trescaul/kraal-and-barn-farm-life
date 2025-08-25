import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Award, Droplets, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";

import honeyVarieties from "@/assets/honey-varieties.jpg";

const Honey = () => {
  const honeyProducts = [
    {
      name: "Premium Wildflower Honey",
      price: "KSH 1,200",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop",
      features: ["Raw & Unfiltered", "Organic", "500g"],
      description: "Collected from diverse wildflowers, this honey has a complex, floral taste that changes with the seasons. Rich in antioxidants and natural enzymes."
    },
    {
      name: "Acacia Honey",
      price: "KSH 1,500",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
      features: ["Light & Mild", "Pure", "750g"],
      description: "Light-colored with a delicate floral taste. Known for its slow crystallization and liquid consistency. Perfect for tea and desserts."
    },
    {
      name: "Manuka Honey",
      price: "KSH 2,800",
      rating: 5.0,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1576839355146-c92e262e9b9c?w=600&h=400&fit=crop",
      features: ["Medicinal Grade", "Rare", "250g"],
      description: "Premium medicinal honey with unique antibacterial properties. Harvested from Manuka tree flowers, known for its healing benefits."
    },
    {
      name: "Clover Honey",
      price: "KSH 950",
      rating: 4.7,
      reviews: 143,
      image: "https://images.unsplash.com/photo-1569288052389-dac9b01d9ba9?w=600&h=400&fit=crop",
      features: ["Classic Taste", "Smooth", "500g"],
      description: "The most popular honey variety with a sweet, mild flavor. Light amber color and smooth texture make it perfect for everyday use."
    },
    {
      name: "Eucalyptus Honey",
      price: "KSH 1,100",
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=600&h=400&fit=crop",
      features: ["Aromatic", "Therapeutic", "400g"],
      description: "Dark honey with a distinctive eucalyptus aroma. Known for its respiratory benefits and rich, woody flavor profile."
    },
    {
      name: "Orange Blossom Honey",
      price: "KSH 1,300",
      rating: 4.8,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=600&h=400&fit=crop",
      features: ["Citrus Notes", "Fragrant", "600g"],
      description: "Light-colored honey with a fresh citrus aroma and mild orange flavor. Crystallizes finely and pairs beautifully with breakfast items."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-honey-gold" />,
      title: "Natural Antibiotics",
      description: "Rich in natural enzymes and antibacterial properties"
    },
    {
      icon: <Droplets className="h-8 w-8 text-farm-green" />,
      title: "Pure & Raw",
      description: "Unprocessed honey straight from our hives"
    },
    {
      icon: <Award className="h-8 w-8 text-soil-brown" />,
      title: "Premium Quality",
      description: "Certified organic and sustainably harvested"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-honey-gold-light to-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-honey-gold/20 text-honey-gold border-honey-gold/30 mb-6">
                🍯 Premium Honey Collection
              </Badge>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
                Golden Honey
                <span className="block text-farm-green">From Our Hives</span>
              </h1>
              
              <p className="text-lg text-soil-brown-light mb-8 leading-relaxed">
                Experience the pure sweetness of nature with our premium honey collection. 
                Harvested from our sustainable bee colonies, each jar contains the finest 
                quality honey rich in natural enzymes and health benefits.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="farm" size="lg" className="rounded-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-soil-brown text-soil-brown hover:bg-soil-brown hover:text-cream">
                  Learn About Beekeeping
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src={honeyVarieties}
                  alt="Premium honey varieties"
                  className="w-full rounded-2xl shadow-honey"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-honey-gold rounded-full flex items-center justify-center shadow-farm animate-float">
                  <span className="text-2xl">🐝</span>
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
              Our Honey Selection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated collection of premium honey varieties, 
              each with unique flavors and health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honeyProducts.map((product, index) => (
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
                      <Badge key={feature} className="bg-honey-gold/90 text-soil-brown border-0">
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

export default Honey;