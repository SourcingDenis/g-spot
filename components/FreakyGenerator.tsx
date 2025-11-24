import React, { useState } from 'react';
import { generateCreativeIdea } from '../services/gemini';
import { GeneratorState } from '../types';
import { Sparkles, Send, RefreshCw, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FreakyGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [state, setState] = useState<GeneratorState>(GeneratorState.IDLE);
  const { t, language } = useLanguage();

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setState(GeneratorState.LOADING);
    setResult(null);

    const idea = await generateCreativeIdea(input, language);
    setResult(idea);
    setState(GeneratorState.SUCCESS);
  };

  return (
    <section id="generator" className="py-32 relative overflow-hidden bg-black border-y border-white/5">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="text-[25vw] font-bold whitespace-nowrap">{t.generator.bg_text}</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-purple/50 rounded-full mb-8 border border-white/10 animate-float">
            <Cpu className="w-8 h-8 text-electric-blue" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.generator.title}</h2>
          <p className="text-gray-400 text-lg">{t.generator.desc}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-acid-lime via-electric-blue to-hot-pink rounded-lg opacity-25 group-hover:opacity-50 blur transition duration-500"></div>
            <div className="glass-panel p-2 rounded-lg flex flex-col sm:flex-row gap-2 relative bg-black">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder={t.generator.placeholder}
                className="flex-1 bg-transparent border-none outline-none text-white px-6 py-4 text-lg placeholder:text-gray-700 font-bold uppercase tracking-wide"
              />
              <button
                onClick={handleGenerate}
                disabled={state === GeneratorState.LOADING}
                className="bg-white text-black px-8 py-4 font-bold uppercase hover:bg-acid-lime transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-sm active:scale-95"
              >
                {state === GeneratorState.LOADING ? (
                  <RefreshCw className="animate-spin w-5 h-5" />
                ) : (
                  <>
                    {t.generator.btn_generate} <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {result && (
            <div className="mt-12 relative group animate-float-fast">
               <div className="relative bg-neutral-900/80 backdrop-blur p-8 md:p-12 border border-white/20 flex flex-col items-center justify-center text-center rounded-xl">
                 <span className="text-xs font-mono text-acid-lime mb-4 uppercase tracking-widest border border-acid-lime px-3 py-1 rounded-full">{t.generator.result_prefix}</span>
                 <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                   "{result}"
                 </h3>
                 <div className="absolute -bottom-2 w-[90%] h-4 bg-acid-lime/20 blur-xl rounded-full"></div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};