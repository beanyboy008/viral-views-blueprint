
import React from 'react';
import { Section } from './Section';

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Built personal brands doing billions of views.",
      author: "Industry Leader"
    },
    {
      quote: "Generated billions in minutes watched, followers, and sales.",
      author: "Top Creator"
    }
  ];

  // Placeholder for client logos
  const logos = Array(4).fill("LOGO");

  return (
    <Section id="social-proof" color="dark-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Proven <span className="text-gradient">Results</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black p-8 rounded-lg border border-zinc-800 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="text-xl md:text-2xl font-bold mb-4">{testimonial.quote}</p>
              <p className="text-gray-400">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((_, index) => (
            <div 
              key={index} 
              className="h-16 w-32 bg-zinc-800 rounded flex items-center justify-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-400 font-bold">LOGO</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
