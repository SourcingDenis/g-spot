import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Translations } from '../types';

type Language = 'en' | 'uk';

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      manifesto: 'BIO',
      generator: 'VIBE GEN',
      skills: 'POWERS', 
      contacts: 'CONNECT',
      join: 'BOOKING'
    },
    hero: {
      tag: 'g.spot / DARIIA',
      role1: 'DJ',
      role2: 'PRODUCER',
      role3: 'MARKETER',
      btn_listen: 'Listen Mix',
      btn_collab: 'Let\'s Collab'
    },
    manifesto: {
      title: 'Who is',
      subtitle: 'g.spot?',
      p1: 'I don\'t just play music; I curate atmospheres. As a DJ and Producer, I blend deep basslines with hypnotic rhythms to create a "Freaky" state of mind.',
      p2: 'Beyond the decks, I am a Marketer obsessed with brand identity and digital storytelling. I know how to make people listen, watch, and feel.',
      p3: 'My mission is simple: Break the silence. Be Freaky. Make it loud.',
      stat1: '4+',
      stat1_desc: 'Years in Music',
      stat2: '∞',
      stat2_desc: 'Vibes Created',
      stat3: '100%',
      stat3_desc: 'Freaky Energy'
    },
    generator: {
      bg_text: 'VIBE CHECK',
      title: 'FREAKY IDEA GEN',
      desc: 'Need inspiration for a track, a post, or just life? Give me a word, and I\'ll give you a concept.',
      placeholder: 'Techno, Branding, Night...',
      btn_generate: 'INSPIRE ME',
      result_prefix: 'CONCEPT:'
    },
    skills: {
      title_main: 'MY SUPER',
      title_stroke: 'POWERS',
      card1_title: 'VIBE ARCHITECT',
      card1_desc: 'Curating sonic landscapes that control the energy of the room. From lounge to peak-time techno.',
      card2_title: 'BRAND SORCERY',
      card2_desc: 'Turning abstract concepts into cult-like brand identities. I make visuals that scream.',
      card3_title: 'TREND HUNTER',
      card3_desc: 'Predicting the next wave before it breaks. Analyzing culture, fashion, and sound.',
      card4_title: 'CHAOS CONTROL',
      card4_desc: 'Managing complex projects and productions without losing the creative spark.',
    },
    footer: {
      title_pre: "Let's make",
      desc: 'Booking, collaboration, or just want to send some love? I am always open to crazy projects.',
      form_name: 'NAME',
      form_email: 'EMAIL',
      form_msg: 'IDEA',
      form_btn: 'SEND IT',
      rights: '© 2025 g.spot.',
      credits: 'DESIGNED TO BE FREAKY.'
    }
  },
  uk: {
    nav: {
      manifesto: 'БІО',
      generator: 'ВАЙБ',
      skills: 'СИЛА',
      contacts: 'КОНТАКТ',
      join: 'БУКІНГ'
    },
    hero: {
      tag: 'g.spot / ДАРІЯ',
      role1: 'DJ',
      role2: 'ПРОДЮСЕРКА',
      role3: 'МАРКЕТОЛОГИНЯ',
      btn_listen: 'Слухати Мікс',
      btn_collab: 'Співпраця'
    },
    manifesto: {
      title: 'Хто така',
      subtitle: 'g.spot?',
      p1: 'Я не просто граю музику, я створюю атмосферу. Як DJ та продюсерка, я змішую глибокі баси з гіпнотичними ритмами, щоб ввести вас у стан "Freaky".',
      p2: 'Поза пультами я — маркетологиня, одержима айдентикою та цифровим сторітелінгом. Я знаю, як змусити людей слухати, дивитися та відчувати.',
      p3: 'Моя місія проста: Порушити тишу. Бути дивною. Робити гучно.',
      stat1: '4+',
      stat1_desc: 'Роки в музиці',
      stat2: '∞',
      stat2_desc: 'Створених вайбів',
      stat3: '100%',
      stat3_desc: 'Freaky Енергія'
    },
    generator: {
      bg_text: 'ВАЙБ ЧЕК',
      title: 'ГЕНЕРАТОР ІДЕЙ',
      desc: 'Потрібне натхнення для треку, посту чи просто життя? Дай мені слово, і я дам тобі концепт.',
      placeholder: 'Техно, Бренд, Ніч...',
      btn_generate: 'НАТХНЕННЯ',
      result_prefix: 'КОНЦЕПТ:'
    },
    skills: {
      title_main: 'МОЯ',
      title_stroke: 'СУПЕРСИЛА',
      card1_title: 'АРХІТЕКТОР ВАЙБУ',
      card1_desc: 'Створення звукових ландшафтів, що керують енергією. Від лаунжу до пік-тайм техно.',
      card2_title: 'БРЕНД-МАГІЯ',
      card2_desc: 'Перетворення абстракцій на культову айдентику. Візуали, що змушують зупинитися.',
      card3_title: 'МИСЛИВЕЦЬ ТРЕНДІВ',
      card3_desc: 'Передбачення наступної хвилі до її появи. Аналіз культури, моди та звуку.',
      card4_title: 'КОНТРОЛЬ ХАОСУ',
      card4_desc: 'Менеджмент складних проєктів та продакшну без втрати творчої іскри.',
    },
    footer: {
      title_pre: "Створимо",
      desc: 'Букінг, колаборація чи просто хочеш привітатись? Я завжди відкрита до божевільних проєктів.',
      form_name: 'ІМ\'Я',
      form_email: 'EMAIL',
      form_msg: 'ІДЕЯ',
      form_btn: 'ВІДПРАВИТИ',
      rights: '© 2025 g.spot.',
      credits: 'DESIGNED TO BE FREAKY.'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uk');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};