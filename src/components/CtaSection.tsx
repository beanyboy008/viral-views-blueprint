
import React from 'react';
import { Section } from './Section';
import { CallToActionButton } from './CallToActionButton';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  const phoneNumber = "555-123-4567"; // Replace with actual phone number
  
  const handleTextClick = () => {
    // For mobile devices, open SMS with pre-filled message
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `sms:${phoneNumber}?body=$25,000`;
    }
  };

  return (
    <Section id="book-call">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Views are the fuel of modern business.
        </h2>
        
        <p className="text-xl md:text-2xl text-electric-blue font-semibold mb-10">
          Stop leaving millions on the table.
        </p>
        
        <div className="flex flex-col items-center">
          {/* Replace with actual Calendly embed or form */}
          <div className="w-full max-w-xl bg-zinc-900 rounded-xl p-6 md:p-8 border border-zinc-800 mb-8">
            <h3 className="text-xl font-bold mb-6">Book Your Strategy Call</h3>
            
            <div className="space-y-4 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 bg-black border border-zinc-700 rounded focus:border-electric-blue outline-none"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-black border border-zinc-700 rounded focus:border-electric-blue outline-none"
              />
              <input 
                type="tel" 
                placeholder="Your Phone" 
                className="w-full p-3 bg-black border border-zinc-700 rounded focus:border-electric-blue outline-none"
              />
            </div>
            
            <CallToActionButton className="w-full group">
              Schedule Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </CallToActionButton>
          </div>
          
          <p className="text-gray-400 cursor-pointer hover:text-white" onClick={handleTextClick}>
            Prefer to text? Send <span className="font-semibold text-electric-blue">"$25,000"</span> to {phoneNumber}
          </p>
        </div>
      </div>
    </Section>
  );
}
