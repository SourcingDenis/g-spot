import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Brain, Radar, Settings2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { 
        icon: <Sparkles className="w-10 h-10" />, 
        title: t.skills.card1_title, 
        desc: t.skills.card1_desc,
        color: 'text-acid-lime',
        border: 'group-hover:border-acid-lime'
    },
    { 
        icon: <Brain className="w-10 h-10" />, 
        title: t.skills.card2_title, 
        desc: t.skills.card2_desc,
        color: 'text-hot-pink',
        border: 'group-hover:border-hot-pink'
    },
    { 
        icon: <Radar className="w-10 h-10" />, 
        title: t.skills.card3_title, 
        desc: t.skills.card3_desc,
        color: 'text-electric-blue',
        border: 'group-hover:border-electric-blue'
    },
    { 
        icon: <Settings2 className="w-10 h-10" />, 
        title: t.skills.card4_title, 
        desc: t.skills.card4_desc,
        color: 'text-purple-400',
        border: 'group-hover:border-purple-400'
    },
  ];

  return (
    <section id="skills" className="py-32 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-5xl md:text-8xl font-bold uppercase leading-none tracking-tighter">
            {t.skills.title_main} <span className="text-stroke hover:text-white transition-colors duration-500">{t.skills.title_stroke}</span>
          </h2>
          <div className="w-24 h-1 bg-acid-lime mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`group glass-panel p-8 relative overflow-hidden hover:-translate-y-2 transition-transform duration-500 border-t-2 border-transparent ${skill.border}`}
            >
              {/* Icon Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${skill.color.replace('text-', 'bg-')}`}></div>

              <div className={`mb-6 ${skill.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold uppercase mb-4 text-white leading-tight">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {skill.desc}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className={`w-2 h-2 ${skill.color.replace('text-', 'bg-')}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};