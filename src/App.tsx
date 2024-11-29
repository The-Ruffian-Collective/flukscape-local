import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { Benefits } from './components/Benefits';
import { EarlyAccess } from './components/EarlyAccess';
import { Footer } from './components/Footer';
import { WaitlistForm } from './components/WaitlistForm';

export default function App() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const handleWaitlistClick = () => {
    setShowWaitlistForm(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 bg-gradient-to-b from-transparent via-white to-white text-black">
        <div className="text-white">
          <Navigation onWaitlistClick={handleWaitlistClick} />
          <Hero onGetStartedClick={handleWaitlistClick} />
        </div>

        <FeatureSection
          id="destinations"
          headline="Go Beyond the Guidebooks"
          body="From ancient temples to secret cafés, explore destinations through local eyes. Our AI matches your unique travel style with hidden wonders - helping you discover places most travelers never see."
          imageSrc="https://i.ibb.co/4fJ9tsK/bornraskull-Go-Beyond-the-Guidebooks-From-iconic-landmarks-t-94071cb6-16a8-4c59-bd44-c4ddf150baa5-0.png"
        />

        <FeatureSection
          id="cuisine"
          headline="Taste the Extraordinary"
          body="From hole-in-the-wall eateries to Michelin-starred gems, uncover culinary experiences that match your palate perfectly. Every meal becomes a memory, every dish tells a story."
          imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
        />

        <FeatureSection
          id="activities"
          headline="Your Journey, Your Way"
          body="Whether you seek thrilling adventures or peaceful retreats, our AI crafts each day to match your style. Experience the world exactly as you dream it."
          imageSrc="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80"
        />

        <Benefits />
        <EarlyAccess onSignUpClick={handleWaitlistClick} />
        <Footer onWaitlistClick={handleWaitlistClick} />
      </div>

      {showWaitlistForm && (
        <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
      )}
    </div>
  );
}