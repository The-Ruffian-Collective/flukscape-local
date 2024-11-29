import React, { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';

interface NavigationProps {
  onWaitlistClick: () => void;
}

export function Navigation({ onWaitlistClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-6">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-12 text-xl">
            <a href="#destinations" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors">DESTINATIONS</a>
            <a href="#cuisine" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors">LOCAL CUISINE</a>
            <a href="#activities" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors">ACTIVITIES</a>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <div className="flex justify-between items-center">
        <div className="hidden lg:flex gap-8">
          <a href="#destinations" className="hover:text-yellow-400 transition-colors">DESTINATIONS</a>
          <a href="#cuisine" className="hover:text-yellow-400 transition-colors">LOCAL CUISINE</a>
          <a href="#activities" className="hover:text-yellow-400 transition-colors">ACTIVITIES</a>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden"
        >
          <Menu className="w-8 h-8" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Compass className="w-6 h-6" />
          <span className="font-medium text-sm sm:text-base">Roamly: Hyperlocal Travel</span>
        </div>

        <button 
          onClick={onWaitlistClick} 
          className="px-4 sm:px-6 py-2 border-2 rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base"
        >
          GET STARTED
        </button>
      </div>
    </nav>
  );
}