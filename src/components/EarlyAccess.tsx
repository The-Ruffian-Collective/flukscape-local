import React from 'react';
import { Timer } from 'lucide-react';

interface EarlyAccessProps {
  onSignUpClick: () => void;
}

export function EarlyAccess({ onSignUpClick }: EarlyAccessProps) {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-yellow-400/10 to-orange-400/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Be the First to Explore</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          Sign up now for exclusive early access and special perks when we launch.
        </p>
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-lg sm:text-xl">Launching early 2025</span>
          </div>
          <button 
            onClick={onSignUpClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-yellow-400 hover:text-black transition-all text-base sm:text-lg"
          >
            Sign Me Up
          </button>
        </div>
      </div>
    </section>
  );
}