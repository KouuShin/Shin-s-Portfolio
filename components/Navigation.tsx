import { useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const menuItems = [
    { id: 'home', label: 'About' },
    { id: 'project', label: 'Project' },
    { id: 'thoughts', label: 'Thoughts' },
    { id: 'design', label: 'Design' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className="fixed right-12 top-1/2 -translate-y-1/2 z-50"
      style={{ fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif" }}
    >
      <div className="flex flex-col items-end space-y-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-2xl font-light tracking-wide transition-all duration-300 relative group"
            style={{ 
              color: activeSection === item.id ? '#C0F200' : '#FFFFFF',
              textShadow: activeSection === item.id ? '0 0 20px rgba(192, 242, 0, 0.6)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#C0F200';
                e.currentTarget.style.textShadow = '0 0 15px rgba(192, 242, 0, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.textShadow = 'none';
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
