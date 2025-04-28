import React from 'react';
import { Section } from './Section';
import { CallToActionButton } from './CallToActionButton';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  const phoneNumber = "555-123-4567"; // Replace with actual phone number

  const handleTextClick = () => {
    // For mobile devices, open SMS with pre-filled message
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `sms:${phoneNumber}?body=$25,000`;
    }
  };
  return <Section id="hero" className="pt-32 md:pt-40">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-stagger">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight animate-slide-up">
          More Views = More Money.
          <br />
          <span className="text-gradient">It's That Simple.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl animate-slide-up">
          Book a Call Now — See How Our Viral Army Can 10X Your Visibility and Lead Flow.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl animate-slide-up">
          <a href="#book-call" className="w-full">
            <CallToActionButton size="lg" className="w-full group">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </CallToActionButton>
          </a>
        </div>
        
        
      </div>
    </Section>;
}