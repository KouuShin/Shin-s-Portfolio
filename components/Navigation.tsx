import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-medium text-foreground">
            寇欣怡
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              首页
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              关于
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              技能
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              作品
            </button>
            <button 
              onClick={() => window.open('https://xhslink.com/m/7zur4w8wu0f', '_blank')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              博客
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              联系
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
          >
            开始合作
          </Button>
        </div>
      </div>
    </nav>
  );
}