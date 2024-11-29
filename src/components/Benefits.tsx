import React from 'react';
import { Map, Clock, Users, Star } from 'lucide-react';

const benefits = [
  {
    icon: Map,
    title: 'Uncover Hidden Gems',
    description: 'Explore authentic destinations tailored to your tastes'
  },
  {
    icon: Clock,
    title: 'Travel, Your Way',
    description: 'Enjoy flexible, dynamic plans that adapt to you'
  },
  {
    icon: Users,
    title: 'Stress-Free Group Adventures',
    description: 'Effortlessly plan and decide together with your crew'
  },
  {
    icon: Star,
    title: 'Insights You Can Trust',
    description: 'Get recommendations from locals who know best'
  }
];

export function Benefits() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Roamly?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6">
              <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="opacity-80 text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}