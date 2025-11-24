import React, { useEffect, useState, useRef } from 'react';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

declare global {
  interface Window {
    confetti: any;
  }
}

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 100,
        origin: { x, y },
        colors: ['#CCFF00', '#FF0099', '#ffffff'],
        disableForReducedMotion: true
      });
    }
  };

  const togglePlayer = () => {
    setIsPlayerOpen(!isPlayerOpen);
  };

  return (
    <section ref={parallaxRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black perspective-1000 transition-all duration-500">
      
      {/* Container for the main frame */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        
        {/* The Blue Frame Box - Static anchor */}
        <div className="relative border-2 border-[#6B8AFD] min-h-[80vh] flex flex-col justify-center items-center isolate overflow-hidden p-6 md:p-12 transition-all duration-700 ease-premium-ease">
            
            {/* 1. Background Photo Layer (Blended) - Parallax slower */}
            <div 
              className="absolute inset-0 z-0 will-change-transform"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                 <img 
                    src="/dasha.jpg" 
                    className="w-full h-full object-cover object-center opacity-60 transition-all duration-700 hover:opacity-80 scale-105"
                    alt="Dariia Background"
                    onError={(e) => {
                      // Only fallback if absolutely necessary, but prioritize the main image
                      console.warn("Image failed to load:", e.currentTarget.src);
                    }}
                 />
                 {/* Dark overlay to ensure text readability */}
                 <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* 2. Abstract Color Blobs - Parallax subtle movement */}
            <div 
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#4a5e0b] rounded-full blur-[80px] opacity-60 mix-blend-screen animate-pulse-slow pointer-events-none will-change-transform"
              style={{ transform: `translate(-50%, -50%) translateY(${scrollY * -0.05}px)` }}
            ></div>
            <div 
              className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-[#46002b] rounded-full blur-[80px] opacity-60 mix-blend-screen animate-float pointer-events-none will-change-transform"
              style={{ transform: `translate(50%, -50%) translateY(${scrollY * -0.08}px)` }}
            ></div>

            {/* 3. Blue Curved Line (SVG) - Static relative to frame */}
            <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path 
                    d="M -10 20 Q 20 10, 40 50 T 110 80" 
                    stroke="#6B8AFD" 
                    strokeWidth="0.3" 
                    fill="none" 
                    vectorEffect="non-scaling-stroke"
                 />
                 <path 
                    d="M 110 30 Q 80 80, 50 50 T -10 90" 
                    stroke="#6B8AFD" 
                    strokeWidth="0.3" 
                    fill="none" 
                    vectorEffect="non-scaling-stroke"
                    className="opacity-50"
                 />
            </svg>

            {/* 4. Content */}
            
            {/* Top Tag - Fade in up */}
            <div className="relative z-20 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full hover:border-acid-lime/50 transition-colors duration-300">
                    <span className="w-2 h-2 bg-acid-lime rounded-full shadow-[0_0_8px_#CCFF00] animate-pulse"></span>
                    <span className="text-white text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                        {t.hero.tag}
                    </span>
                </div>
            </div>

            {/* Main Title Composition - Parallax effect */}
            <div className="relative z-10 text-center w-full max-w-5xl mx-auto mb-8">
                {/* Outline Text - Moves slightly down */}
                <h1 
                    className="text-[18vw] md:text-[13rem] leading-[0.8] font-bold tracking-tighter text-transparent select-none transition-all duration-500 hover:text-white/5 will-change-transform"
                    style={{ 
                      WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                      transform: `translateY(${scrollY * 0.15}px)` 
                    }}
                >
                    g.spot
                </h1>
                
                {/* Overlaid Pink Text - Moves slightly faster (closer depth) */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none will-change-transform"
                  style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.25}px)` }}
                >
                    <span className="block text-5xl md:text-8xl font-bold text-hot-pink mix-blend-normal rotate-[-6deg] tracking-tight drop-shadow-[0_0_15px_rgba(255,0,153,0.5)]">
                        (DARIIA)
                    </span>
                </div>
            </div>

            {/* Roles - Fade in */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-xl font-mono uppercase tracking-widest relative z-20 font-bold mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative group cursor-default">
                    <span className="text-white group-hover:text-acid-lime transition-colors duration-300">{t.hero.role1}</span>
                    <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-acid-lime transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#CCFF00]"></span>
                </div>
                <div className="hidden md:block text-gray-600">/</div>
                <div className="relative group cursor-default">
                    <span className="text-white group-hover:text-hot-pink transition-colors duration-300">{t.hero.role2}</span>
                    <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-hot-pink transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#FF0099]"></span>
                </div>
                <div className="hidden md:block text-gray-600">/</div>
                <div className="relative group cursor-default">
                    <span className="text-white group-hover:text-electric-blue transition-colors duration-300">{t.hero.role3}</span>
                    <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-electric-blue transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#00F0FF]"></span>
                </div>
            </div>

            {/* Buttons - Fade in with Premium Hover */}
            <div className="flex flex-col md:flex-row gap-6 relative z-20 w-full md:w-auto px-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <button 
                    onClick={togglePlayer}
                    onMouseEnter={triggerConfetti}
                    className="group bg-acid-lime text-black px-10 py-5 font-bold text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-200 ease-premium-ease shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)] hover:scale-105 active:scale-95 w-full md:w-auto overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Play className="fill-black w-5 h-5 relative z-10 group-hover:animate-wiggle" />
                    <span className="relative z-10">{t.hero.btn_listen}</span>
                </button>
                <a 
                    href="#footer"
                    className="group border border-white/30 text-white px-10 py-5 font-bold text-lg md:text-xl uppercase tracking-widest hover:bg-white hover:text-black hover:border-transparent transition-all duration-200 ease-premium-ease hover:scale-105 active:scale-95 w-full md:w-auto text-center relative overflow-hidden"
                >
                     <span className="relative z-10">{t.hero.btn_collab}</span>
                </a>
            </div>

            {/* Expanding SoundCloud Player */}
            <div 
              className={`w-full max-w-4xl mx-auto overflow-hidden transition-all duration-700 ease-premium-ease relative z-30 ${isPlayerOpen ? 'max-h-[600px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0'}`}
            >
              <div className="bg-black/80 backdrop-blur-md border border-acid-lime shadow-[0_0_30px_rgba(204,255,0,0.15)] rounded-sm">
                   {/* Player Header */}
                   <div className="flex justify-between items-center bg-white/5 border-b border-white/10 p-4">
                      <div className="flex items-center gap-2">
                         <span className="w-2 h-2 bg-acid-lime rounded-full animate-pulse"></span>
                         <span className="text-xs font-mono text-acid-lime tracking-widest uppercase">Now Playing: PINKSEX.WAV</span>
                      </div>
                      <button 
                        onClick={() => setIsPlayerOpen(false)}
                        className="text-gray-400 hover:text-acid-lime hover:rotate-90 transition-all duration-300"
                      >
                        <X className="w-6 h-6" />
                      </button>
                   </div>
                   
                   {/* SoundCloud Embed */}
                   <div className="relative aspect-video md:h-[400px] w-full bg-black">
                     <iframe
                       width="100%"
                       height="100%"
                       scrolling="no"
                       frameBorder="no"
                       allow="autoplay"
                       src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pbyntxc0jsly/02-pinksex-wav&color=%23ccff00&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                       className="w-full h-full"
                     ></iframe>
                   </div>
                </div>
            </div>

        </div>
      </div>
      
       {/* Scroll Indicator - Fade out on scroll */}
       <div 
         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 animate-bounce-slow pointer-events-none transition-opacity duration-300"
         style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
       >
         <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
         <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </section>
  );
};