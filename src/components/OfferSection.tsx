
import React from 'react';
import { Section } from './Section';

export function OfferSection() {
  const offerPoints = [
    "This is not for beginners.",
    "One-time investment starts at $25,000.",
    "Not monthly fees. No fake followers. Real leads. Real traffic.",
    "Option to continue ongoing monthly support after results."
  ];

  return (
    <Section id="offer">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 rounded-2xl p-10 border border-electric-blue">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            The $25K <span className="text-gradient">Jumpstart</span> Offer
          </h2>
          
          <p className="text-xl text-center mb-10 text-red-400 font-semibold">
            SERIOUS INQUIRIES ONLY
          </p>
          
          <div className="space-y-6 mb-10">
            {offerPoints.map((point, index) => (
              <p 
                key={index} 
                className="text-lg md:text-xl text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {point}
              </p>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-electric-blue">
              $25,000 – $75,000
            </p>
            <p className="text-gray-400 mt-2">One-time service investment</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
