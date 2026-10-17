import React from 'react';
import { Hero } from '../components/Hero';
import { AuthoritySection } from '../components/AuthoritySection';
import { ServicesGrid } from '../components/ServicesGrid';
import { LegalDiagnosticTool } from '../components/LegalDiagnosticTool';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <AuthoritySection />
      <ServicesGrid onNavigate={onNavigate} />
      <LegalDiagnosticTool />
      <WhyChooseUs />
      <FaqAccordion />
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
};
