import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Honey", path: "/honey" },
    { name: "Rabbits", path: "/rabbits" },
    { name: "Fish", path: "/fish" },
    { name: "Goats", path: "/goats" },
    { name: "Vegetables", path: "/vegetables" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="font-serif font-bold text-xl text-foreground group-hover:text-farm-green transition-colors">
                KRAAL & BARN
              </div>
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search products, categories..."
                  className="pl-10 bg-muted/50 border-muted focus:border-farm-green"
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-farm-green ${
                    isActivePage(item.path) 
                      ? "text-farm-green border-b-2 border-farm-green pb-1" 
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Button & Menu Toggle */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+254720733194"
                className="hidden sm:flex items-center space-x-2 text-sm text-farm-green hover:text-farm-green-light transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+254 720 733194</span>
              </a>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-soil-brown/20 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 z-50 h-full w-80 bg-background border-l border-border shadow-farm animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-serif font-bold text-xl text-foreground">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Search */}
              <div className="p-6 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search..."
                    className="pl-10 bg-muted/50 border-muted focus:border-farm-green"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 p-6">
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActivePage(item.path)
                          ? "bg-farm-green text-primary-foreground"
                          : "text-foreground hover:bg-muted hover:text-farm-green"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 border-t border-border">
                <a 
                  href="tel:+254720733194"
                  className="flex items-center space-x-3 text-farm-green hover:text-farm-green-light transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm">+254 720 733194</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Content Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;