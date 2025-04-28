
import React from 'react';
import { Section } from './Section';

export function BreakdownSection() {
  const viewPoints = [
    "Want more sales? More views.",
    "Want better leads? More views.",
    "Want to hire better talent? More views.",
    "Want to grow your personal brand? More views."
  ];

  return (
    <Section id="breakdown" color="dark-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Why Views Solve <span className="text-gradient">Everything</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-stagger">
          {viewPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-electric-blue transition-all animate-slide-up"
            >
              <p className="text-xl md:text-2xl font-bold">{point}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-zinc-800 p-8 rounded-lg mt-10 animate-slide-up">
          <p className="text-2xl md:text-3xl font-bold text-electric-blue">
            Views are the single issue that fixes all business problems.
          </p>
        </div>
      </div>
    </Section>
  );
}
