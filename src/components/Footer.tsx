import React from 'react';
import { ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onWaitlistClick: () => void;
}

export function Footer({ onWaitlistClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-20 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Ready to uncover the world your way?</h2>
          <button 
            onClick={onWaitlistClick}
            className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full text-base sm:text-lg font-semibold mx-auto hover:bg-yellow-400 transition-all"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-t border-white/10 pt-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About Roamly</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizing travel planning with AI-powered personalization and local insights.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <a href="mailto:hello@roamly.ai" className="text-gray-400 hover:text-yellow-400 text-sm block mb-2">
              hello@roamly.ai
            </a>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Cookie Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Updates</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest features and travel insights.
            </p>
            <button
              onClick={onWaitlistClick}
              className="text-sm text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Join the waitlist →
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
          <p> {currentYear} Roamly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}