import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Send, Youtube, Disc } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-acid-lime/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold uppercase mb-8 leading-[0.85] tracking-tighter">
                {t.footer.title_pre} <br/>
                <span className="text-stroke hover:text-acid-lime transition-colors duration-500">Freaky</span>
              </h2>
              <p className="text-gray-400 max-w-md mb-8 text-lg leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            
            <div className="flex gap-4 mt-8 md:mt-0">
              <a href="#" className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all rounded-full group">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-[#0088cc] hover:text-white hover:border-transparent transition-all rounded-full group">
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-[#ff0000] hover:text-white hover:border-transparent transition-all rounded-full group">
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-acid-lime hover:text-black hover:border-transparent transition-all rounded-full group">
                <Disc className="w-6 h-6 group-hover:animate-spin" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 relative">
             <div className="absolute top-0 right-0 p-4">
                <div className="relative w-20 h-20 rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_15px_rgba(204,255,0,0.3)] group-hover:border-acid-lime transition-colors">
                  <img 
                    src="/dasha.jpg" 
                    alt="Dariia" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => console.warn("Avatar load failed", e.currentTarget.src)}
                   />
                </div>
             </div>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if(window.confetti) window.confetti(); }}>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-acid-lime transition-colors">{t.footer.form_name}</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-acid-lime focus:outline-none transition-colors text-white text-xl font-medium" placeholder="Dariia..." />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-acid-lime transition-colors">{t.footer.form_email}</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-acid-lime focus:outline-none transition-colors text-white text-xl font-medium" placeholder="hello@..." />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-acid-lime transition-colors">{t.footer.form_msg}</label>
                <textarea rows={2} className="w-full bg-transparent border-b border-white/20 py-3 focus:border-acid-lime focus:outline-none transition-colors text-white resize-none text-xl font-medium" placeholder="Let's cook..."></textarea>
              </div>
              <button className="w-full bg-white text-black font-bold py-5 uppercase tracking-widest hover:bg-acid-lime transition-colors mt-4 text-sm relative overflow-hidden group">
                <span className="relative z-10">{t.footer.form_btn}</span>
                <div className="absolute inset-0 bg-acid-lime translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.2em] gap-4">
          <p>{t.footer.rights}</p>
          <p className="flex items-center gap-2">
            {t.footer.credits}
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};