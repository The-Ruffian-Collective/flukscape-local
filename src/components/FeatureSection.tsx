import React from 'react';

interface FeatureSectionProps {
  id: string;
  headline: string;
  body: string;
  imageSrc: string;
}

export function FeatureSection({ id, headline, body, imageSrc }: FeatureSectionProps) {
  return (
    <section id={id} className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold">{headline}</h2>
          <p className="text-base sm:text-lg opacity-90 leading-relaxed">{body}</p>
        </div>
        <div className="flex-1 w-full">
          <img
            src={imageSrc}
            alt={headline}
            className="rounded-2xl shadow-xl w-full object-cover aspect-4/3"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}