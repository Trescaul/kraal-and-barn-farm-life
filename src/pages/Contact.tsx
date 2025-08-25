import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-farm-green" />,
      title: "Call Us",
      subtitle: "Speak with our team",
      value: "+254 720 733194",
      action: "tel:+254720733194"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-honey-gold" />,
      title: "WhatsApp",
      subtitle: "Quick response guaranteed",
      value: "Chat with us",
      action: "https://wa.me/254720733194"
    },
    {
      icon: <Mail className="h-6 w-6 text-farm-green-light" />,
      title: "Email",
      subtitle: "Send us a message",
      value: "barn.kraal@gmail.com",
      action: "mailto:barn.kraal@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-soil-brown" />,
      title: "Visit Farm",
      subtitle: "Come see us in person",
      value: "Nairobi, Kenya",
      action: "#location"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "10:00 AM - 2:00 PM" }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-farm-green-lighter to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
              Get In Touch
              <span className="block text-farm-green">With KRAAL & BARN</span>
            </h1>
            <p className="text-lg text-soil-brown-light max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions about our products, 
              want to visit our farm, or need farming advice, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="text-center p-6 hover:shadow-farm transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-cream rounded-full group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {method.subtitle}
                  </p>
                  <a 
                    href={method.action}
                    className="text-farm-green font-medium hover:text-farm-green-light transition-colors"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-farm bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="border-muted focus:border-farm-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="border-muted focus:border-farm-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="border-muted focus:border-farm-green"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+254 xxx xxx xxx"
                    className="border-muted focus:border-farm-green"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="border-muted focus:border-farm-green"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about how we can help you..."
                    rows={5}
                    className="border-muted focus:border-farm-green resize-none"
                  />
                </div>
                
                <Button variant="farm" size="lg" className="w-full rounded-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-farm-green" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <span className="text-farm-green">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="honey"
                    className="w-full justify-start rounded-full"
                    asChild
                  >
                    <a href="https://wa.me/254720733194" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      WhatsApp Us Now
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full justify-start rounded-full border-farm-green text-farm-green hover:bg-farm-green hover:text-primary-foreground"
                    asChild
                  >
                    <a href="tel:+254720733194">
                      <Phone className="mr-3 h-5 w-5" />
                      Call Directly
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost"
                    className="w-full justify-start rounded-full hover:bg-muted"
                    asChild
                  >
                    <a href="mailto:barn.kraal@gmail.com">
                      <Mail className="mr-3 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Farm Location */}
              <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-farm-green" />
                    Visit Our Farm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Come experience our sustainable farming practices firsthand. 
                    Farm visits available by appointment.
                  </p>
                  <p className="text-foreground font-medium">
                    📍 Nairobi, Kenya
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Exact location will be shared upon appointment booking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;