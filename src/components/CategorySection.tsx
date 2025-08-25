import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Premium Honey",
    description: "Pure, golden honey harvested from our bee colonies. Rich in natural enzymes and perfect for health-conscious families.",
    path: "/honey",
    icon: "🍯",
    color: "honey-gold",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop"
  },
  {
    title: "Fresh Rabbits",
    description: "Healthy, organically raised rabbits. Perfect source of lean protein for your family's nutritious meals.",
    path: "/rabbits",
    icon: "🐰",
    color: "farm-green",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop"
  },
  {
    title: "Farm Fresh Fish",
    description: "Sustainably farmed fish from our clean ponds. Fresh, healthy, and delivered with care.",
    path: "/fish",
    icon: "🐟",
    color: "farm-green-light",
    image: "https://images.unsplash.com/photo-1544943503-317e6db9b640?w=600&h=400&fit=crop"
  },
  {
    title: "Quality Goats",
    description: "Premium goats raised in natural pastures. Ideal for milk production and sustainable farming.",
    path: "/goats",
    icon: "🐐",
    color: "soil-brown",
    image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=600&h=400&fit=crop"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Farm Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium farm products, 
            each raised with love and dedication to quality.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.path}
              className="group hover:shadow-farm transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-brown/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm rounded-full p-2">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <button className="absolute top-4 left-4 p-2 bg-cream/20 backdrop-blur-sm rounded-full hover:bg-cream/40 transition-colors group">
                  <Heart className="h-4 w-4 text-cream" />
                </button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-farm-green transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between hover:bg-farm-green hover:text-primary-foreground group"
                  asChild
                >
                  <Link to={category.path}>
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Ready to experience premium farm life?
          </p>
          <Button 
            variant="farm"
            size="lg"
            className="px-8 py-4 rounded-full"
            asChild
          >
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;