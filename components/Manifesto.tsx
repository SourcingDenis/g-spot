import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AudioWaveform, Zap, Heart, Disc } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll relative to this section for parallax
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Only update if visible viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setScrollY(window.scrollY);
        }
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="manifesto" ref={sectionRef} className="py-32 bg-neutral-950 relative overflow-hidden">
        {/* Parallax Background Text */}
        <div 
            className="absolute top-20 right-0 text-[20vw] font-bold text-white/5 leading-none select-none pointer-events-none whitespace-nowrap will-change-transform transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${(scrollY - (sectionRef.current?.offsetTop || 0)) * -0.15}px)` }}
        >
            DARIIA
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <div className="relative group reveal-on-scroll perspective-1000">
             {/* Back Layers for Glitch Effect */}
             <div className="absolute inset-0 bg-acid-lime translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color-dodge rounded-sm"></div>
             <div className="absolute inset-0 bg-hot-pink -translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color-dodge rounded-sm"></div>
             
             {/* Glow */}
             <div className="absolute -inset-4 bg-gradient-to-r from-acid-lime to-hot-pink rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
             
             <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 border border-white/10 rounded-sm transform transition-transform duration-500 group-hover:scale-[1.02]">
               
               <img 
                src="/dasha.jpg" 
                alt="Dariia g.spot" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125 block"
                onError={(e) => console.warn("Image load failed", e.currentTarget.src)}
               />
               
               {/* Sticker overlay */}
               <div className="absolute top-4 right-4 bg-acid-lime text-black font-bold text-xs px-3 py-1 uppercase tracking-widest rotate-3 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] z-20">
                   Real Human
               </div>

               {/* Text Overlay */}
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-24">
                  <h3 className="text-5xl font-bold uppercase text-white mb-2 tracking-tighter leading-none">
                    Dariia
                  </h3>
                  <div className="flex items-center gap-2 text-acid-lime font-mono text-sm tracking-widest">
                    <Disc className="w-4 h-4 animate-spin-slow" />
                    <span>g.spot</span>
                  </div>
               </div>
             </div>
          </div>

          <div className="space-y-12">
            <div className="reveal-on-scroll">
              <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8">
                {t.manifesto.title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-lime to-white">{t.manifesto.subtitle}</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-400 font-light pl-6 border-l-2 border-hot-pink">
                <p>{t.manifesto.p1}</p>
                <p className="text-white font-normal text-xl">{t.manifesto.p2}</p>
                <p>{t.manifesto.p3}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal-on-scroll delay-200">
              
              {/* Stat Block 1 */}
              <div className="glass-panel p-6 text-center hover:bg-white/5 transition-all group cursor-default">
                <div className="relative inline-block mb-4">
                     <AudioWaveform className="w-8 h-8 text-acid-lime transition-transform group-hover:scale-110" />
                     {/* Pseudo-animation for waves */}
                     <div className="absolute -inset-2 bg-acid-lime/20 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-acid-lime transition-colors">{t.manifesto.stat1}</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">{t.manifesto.stat1_desc}</p>
              </div>
              
              {/* Stat Block 2 */}
              <div className="glass-panel p-6 text-center hover:bg-white/5 transition-all group cursor-default">
                <div className="relative inline-block mb-4">
                    <Zap className="w-8 h-8 text-hot-pink transition-transform group-hover:rotate-12 group-hover:scale-110" />
                    <div className="absolute -inset-2 bg-hot-pink/20 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-hot-pink transition-colors">{t.manifesto.stat2}</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">{t.manifesto.stat2_desc}</p>
              </div>

              {/* Stat Block 3 */}
              <div className="glass-panel p-6 text-center hover:bg-white/5 transition-all group cursor-default">
                <div className="relative inline-block mb-4">
                    <Heart className="w-8 h-8 text-electric-blue transition-transform group-hover:animate-bounce-slow" />
                    <div className="absolute -inset-2 bg-electric-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">{t.manifesto.stat3}</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">{t.manifesto.stat3_desc}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};