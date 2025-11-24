import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const menuItems = [
    { id: 'home', label: 'About' },
    { id: 'project', label: 'Project' },
    { id: 'thoughts', label: 'Thoughts' },
    { id: 'design', label: 'Design' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className="fixed right-16 top-12 z-50"
      style={{ fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif" }}
    >
      <div className="flex flex-col items-end space-y-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className="font-normal tracking-wide transition-all duration-300 text-right"
            style={{ 
              fontSize: '32px',
              letterSpacing: '0.16em',
              color: currentPage === item.id ? '#C0F200' : '#FFFFFF',
              textShadow: currentPage === item.id ? '0 0 20px rgba(192, 242, 0, 0.6)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== item.id) {
                e.currentTarget.style.color = '#C0F200';
                e.currentTarget.style.textShadow = '0 0 15px rgba(192, 242, 0, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.id) {
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
