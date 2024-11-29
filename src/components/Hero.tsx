import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStartedClick: () => void;
}

export function Hero({ onGetStartedClick }: HeroProps) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
        Discover Local.<br className="md:hidden" /> Travel Deeper. Go Roamly.
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl px-4">
        Tailored itineraries, hidden gems, and authentic experiences - crafted just for you.
      </p>
      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={onGetStartedClick}
          className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-all"
        >
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-sm opacity-80">Be the first to unlock unforgettable adventures.</p>
      </div>
    </section>
  );
}