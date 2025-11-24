import React from 'react';
import { X, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-neutral-900 border border-acid-lime shadow-[0_0_50px_rgba(204,255,0,0.2)] p-8 md:p-12 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-acid-lime hover:rotate-90 transition-all duration-300"
        >
          <X className="w-8 h-8" />
        </button>

        <h2 className="text-3xl font-bold uppercase mb-2 tracking-tighter text-white">
          Booking <span className="text-acid-lime">Request</span>
        </h2>
        <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
          Let's make it loud
        </p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if(window.confetti) window.confetti(); onClose(); }}>
          <div className="group">
            <label className="block text-xs font-bold uppercase tracking-widest text-acid-lime mb-2">Who</label>
            <input type="text" className="w-full bg-black border border-white/20 p-4 focus:border-acid-lime focus:outline-none transition-colors text-white font-mono" placeholder="Your Name / Org" />
          </div>
          
          <div className="group">
             <label className="block text-xs font-bold uppercase tracking-widest text-acid-lime mb-2">Contact</label>
             <input type="email" className="w-full bg-black border border-white/20 p-4 focus:border-acid-lime focus:outline-none transition-colors text-white font-mono" placeholder="email@address.com" />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-acid-lime mb-2">When</label>
                <input type="date" className="w-full bg-black border border-white/20 p-4 focus:border-acid-lime focus:outline-none transition-colors text-white font-mono text-sm" />
             </div>
             <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-acid-lime mb-2">Type</label>
                <select className="w-full bg-black border border-white/20 p-4 focus:border-acid-lime focus:outline-none transition-colors text-white font-mono appearance-none">
                    <option>DJ Set</option>
                    <option>Production</option>
                    <option>Brand Visuals</option>
                    <option>Consulting</option>
                </select>
             </div>
          </div>

          <div className="group">
            <label className="block text-xs font-bold uppercase tracking-widest text-acid-lime mb-2">Details</label>
            <textarea rows={3} className="w-full bg-black border border-white/20 p-4 focus:border-acid-lime focus:outline-none transition-colors text-white font-mono resize-none" placeholder="Tell me about the vibe..."></textarea>
          </div>

          <button className="w-full bg-acid-lime text-black font-bold py-4 uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-2 group relative overflow-hidden">
            <span className="relative z-10">Send Request</span> 
            <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </form>
      </div>
    </div>
  );
};