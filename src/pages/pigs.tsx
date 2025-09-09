
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Leaf, Droplet, Sun, Shield } from "lucide-react";

const Vegetables = () => {
  const vegetableProducts = [
    {
      name: "Organic Kale",
      rating: 4.9,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=600&h=400&fit=crop",
      features: ["Rich in Vitamins", "Iron Source", "Antioxidant Rich"]
    },
    {
      name: "Fresh Spinach",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&h=400&fit=crop",
      features: ["High in Iron", "Folate Rich", "Nutrient Dense"]
    },
    {
      name: "Cherry Tomatoes",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=400&fit=crop",
      features: ["Lycopene Source", "Sweet Flavor", "Vitamin C"]
    },
    {
      name: "Bell Peppers",
      rating: 4.7,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=400&fit=crop",
      features: ["Colorful Mix", "Crispy Fresh", "Vitamin Rich"]
    },
    {
      name: "Organic Carrots",
      rating: 4.8,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=400&fit=crop",
      features: ["Beta Carotene", "Naturally Sweet", "Fiber Rich"]
    },
    {
      name: "Fresh Lettuce",
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1622901815915-a2f0b6e31d4c?w=600&h=400&fit=crop",
      features: ["Crisp Texture", "Hydrating", "Low Calorie"]
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "100% Organic",
      description: "No pesticides or harmful chemicals used in our vegetable cultivation"
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Fresh Daily",
      description: "Harvested every morning to ensure maximum freshness and nutrition"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Sun Ripened",
      description: "Naturally grown under optimal sunlight for best flavor development"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Each vegetable is carefully inspected for quality and freshness"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-earth overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fresh Garden Vegetables
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the taste of nature with our organically grown vegetables. 
              Harvested daily from our fertile gardens to bring you the freshest, 
              most nutritious produce straight from soil to table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="farm" size="lg" className="px-8 py-4 rounded-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Fresh Vegetables
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-full">
                Growing Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Vegetables?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to sustainable farming practices ensures you get the healthiest, 
              most flavorful vegetables nature can provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-farm transition-shadow">
                <div className="text-farm-green mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Fresh Vegetable Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From leafy greens to vibrant peppers, discover our full range of 
              premium organic vegetables grown with care and harvested at peak freshness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vegetableProducts.map((product, index) => (
              <Card 
                key={index}
                className="group hover:shadow-farm transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-farm-green text-primary-foreground">
                      Organic
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-farm-green transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-honey-gold text-honey-gold mr-1" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
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
    </div>
  );
};

export default Vegetables;

