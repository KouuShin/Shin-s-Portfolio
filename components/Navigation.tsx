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
      isScrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
    }`} style={{
      backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
      borderColor: isScrolled ? 'rgba(192, 242, 0, 0.2)' : 'transparent'
    }}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl tracking-tight transition-colors duration-200"
            style={{ color: '#C0F200' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FAFAF0'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#C0F200'}
          >
            KOU XINYI
          </button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm transition-colors duration-200"
              style={{ color: '#808080' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm transition-colors duration-200"
              style={{ color: '#808080' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('thoughts')}
              className="text-sm transition-colors duration-200"
              style={{ color: '#808080' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}
            >
              Thoughts
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm transition-colors duration-200"
              style={{ color: '#808080' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
