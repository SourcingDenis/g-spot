import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-black border border-acid-lime text-acid-lime shadow-[0_0_10px_rgba(204,255,0,0.2)] transition-all duration-500 hover:bg-acid-lime hover:text-black hover:shadow-[0_0_25px_#CCFF00] hover:scale-110 active:scale-95 group clip-path-slant ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300 stroke-[3px]" />
    </button>
  );
};