import fishVarieties from "@/assets/fish-varieties.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Waves, Leaf, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Fish = () => {
  const fishProducts = [
    {
      name: "Fresh Tilapia",
      price: "KSH 650/kg",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1544943503-317e6db9b640?w=600&h=400&fit=crop",
      features: ["Fresh", "Sustainable", "Local"],
      description: "Premium tilapia raised in clean, well-maintained ponds. Known for its mild flavor and firm white flesh. Rich in protein and omega-3 fatty acids."
    },
    {
      name: "African Catfish",
      price: "KSH 750/kg",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1565880449808-e85de10c6e0e?w=600&h=400&fit=crop",
      features: ["Hardy", "Fast Growing", "1.5-2kg"],
      description: "Robust catfish variety perfect for local conditions. Excellent taste with firm flesh. Popular choice for grilling and traditional cooking methods."
    },
    {
      name: "Rainbow Trout",
      price: "KSH 1,200/kg",
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      features: ["Premium", "Cold Water", "Delicate"],
      description: "Prized freshwater fish with delicate pink flesh and exceptional flavor. Raised in cool, clean water for optimal taste and texture."
    },
    {
      name: "Carp Fish",
      price: "KSH 550/kg",
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1574781330855-d0db3cc93e63?w=600&h=400&fit=crop",
      features: ["Affordable", "Nutritious", "Large Size"],
      description: "Traditional farm-raised carp, excellent value for money. Rich in protein and perfect for large family meals and traditional preparations."
    },
    {
      name: "Nile Perch",
      price: "KSH 900/kg",
      rating: 4.8,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
      features: ["White Meat", "Large Size", "Premium"],
      description: "Large freshwater fish with firm white flesh and mild taste. Excellent for fillets and steaks. Popular in restaurants and homes alike."
    },
    {
      name: "Fish Feed & Supplies",
      price: "KSH 1,200",
      rating: 4.5,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&h=400&fit=crop",
      features: ["High Quality", "Nutritious", "20kg Bag"],
      description: "Premium fish feed formulated for optimal growth and health. Contains all essential nutrients for healthy fish development and maximum yield."
    }
  ];

  const benefits = [
    {
      icon: <Waves className="h-8 w-8 text-farm-green-light" />,
      title: "Clean Water Systems",
      description: "Our fish are raised in pristine, well-maintained pond systems"
    },
    {
      icon: <Leaf className="h-8 w-8 text-farm-green" />,
      title: "Sustainable Farming",
      description: "Eco-friendly aquaculture practices that protect our environment"
    },
    {
      icon: <Award className="h-8 w-8 text-honey-gold" />,
      title: "Premium Quality",
      description: "Fresh, healthy fish delivered directly from our farm to you"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-farm-green-lighter via-cream to-honey-gold-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-farm-green-light/20 text-farm-green-light border-farm-green-light/30 mb-6">
                🐟 Fresh Fish Collection
              </Badge>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
                Fresh Fish
                <span className="block text-farm-green">From Our Ponds</span>
              </h1>
              
              <p className="text-lg text-soil-brown-light mb-8 leading-relaxed">
                Enjoy the freshest fish sourced directly from our sustainable aquaculture systems. 
                Our fish are raised in clean, natural environments with organic feed, 
                ensuring the highest quality and taste for your family.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="farm" size="lg" className="rounded-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Fresh Fish
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-soil-brown text-soil-brown hover:bg-soil-brown hover:text-cream">
                  Fish Farming Guide
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src={fishVarieties}
                  alt="Fresh fish varieties"
                  className="w-full rounded-2xl shadow-farm"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-farm-green-light rounded-full flex items-center justify-center shadow-honey animate-float">
                  <span className="text-2xl">🌊</span>
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
              Our Fish Selection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our fresh, sustainably farmed fish varieties, 
              perfect for healthy meals and aquaculture projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fishProducts.map((product, index) => (
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
                      <Badge key={feature} className="bg-farm-green-light/90 text-soil-brown border-0">
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
                      Order Now
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

export default Fish;