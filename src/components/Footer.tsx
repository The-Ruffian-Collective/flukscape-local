import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onWaitlistClick: () => void;
}

export function Footer({ onWaitlistClick }: FooterProps) {
  return (
    <footer className="py-12 sm:py-20 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Ready to uncover the world your way?</h2>
        <button 
          onClick={onWaitlistClick}
          className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full text-base sm:text-lg font-semibold mx-auto hover:bg-yellow-400 transition-all"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}