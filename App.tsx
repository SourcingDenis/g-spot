import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { FreakyGenerator } from './components/FreakyGenerator';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader, Disc } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50 flex-col gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-acid-lime blur-2xl opacity-20 rounded-full animate-pulse"></div>
          <Disc className="w-16 h-16 text-acid-lime animate-spin relative z-10" />
        </div>
        <div className="flex flex-col items-center gap-2">
           <span className="text-white font-bold tracking-[0.5em] text-sm animate-pulse">g.spot</span>
           <span className="text-gray-500 text-xs tracking-[0.2em]">LOADING REALITY</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-acid-lime selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <FreakyGenerator />
        <Gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;