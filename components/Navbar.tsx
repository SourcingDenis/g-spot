import React, { useState, useEffect } from 'react';
import { Menu, X, Disc } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookingModal } from './BookingModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.manifesto, href: '#manifesto' },
    { label: t.nav.generator, href: '#generator' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contacts, href: '#footer' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Find target element
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-black/90 backdrop-blur-lg border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="group flex items-center gap-2">
            <Disc className="text-acid-lime group-hover:animate-spin-slow transition-transform" />
            <span className="font-bold text-2xl tracking-tighter group-hover:text-acid-lime transition-colors">
              g.spot
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold tracking-widest hover:text-acid-lime transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-acid-lime hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <button 
                onClick={toggleLanguage}
                className="font-mono text-sm font-bold hover:text-acid-lime transition-colors"
              >
                <span className={language === 'uk' ? 'text-acid-lime' : 'text-gray-500'}>UA</span>
                <span className="mx-1 text-gray-700">/</span>
                <span className={language === 'en' ? 'text-acid-lime' : 'text-gray-500'}>EN</span>
              </button>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="px-5 py-2 bg-white text-black hover:bg-acid-lime transition-colors font-bold text-xs tracking-widest uppercase clip-path-slant"
              >
                {t.nav.join}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="font-mono text-sm font-bold"
            >
               <span className={language === 'uk' ? 'text-acid-lime' : 'text-gray-500'}>UA</span>
               <span className="mx-1 text-gray-700">/</span>
               <span className={language === 'en' ? 'text-acid-lime' : 'text-gray-500'}>EN</span>
            </button>
            <button 
              className="text-white hover:text-acid-lime transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 items-center animate-fade-in-down h-screen">
             {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold tracking-wider hover:text-acid-lime uppercase"
              >
                {link.label}
              </a>
            ))}
             <button 
                onClick={() => { setIsBookingOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-acid-lime transition-colors mt-4"
             >
                {t.nav.join}
              </button>
          </div>
        )}
      </nav>
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};