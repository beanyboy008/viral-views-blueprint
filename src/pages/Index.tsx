
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BreakdownSection } from '@/components/BreakdownSection';
import { PackageSection } from '@/components/PackageSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { OfferSection } from '@/components/OfferSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BreakdownSection />
        <PackageSection />
        <SocialProofSection />
        <OfferSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
