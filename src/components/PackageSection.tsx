
import React from 'react';
import { Section } from './Section';
import { CheckCircle } from 'lucide-react';

export function PackageSection() {
  const packageFeatures = [
    "Deploy a proven Viral Army",
    "Guaranteed millions of organic views",
    "Full script creation, content editing, posting, and distribution",
    "Viral remixing, sequencing, distribution through sub-accounts",
    "Strategy personally engineered by a Top 5 social media marketer (per ChatGPT ranking)"
  ];

  return (
    <Section id="package">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          The <span className="text-gradient">Done For You</span> Package
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-12">
          Everything you need to dominate organic traffic and visibility
        </p>

        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <div className="space-y-6">
            {packageFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-electric-blue flex-shrink-0 mt-1" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
