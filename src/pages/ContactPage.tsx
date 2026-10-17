import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FaqAccordion } from '../components/FaqAccordion';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0B0F17] pt-8 text-white min-h-screen">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-400 mb-3">
          <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
            Início
          </button>
          <span>/</span>
          <span className="text-[#C5A059] font-semibold">Contato & Agendamento</span>
        </div>
      </div>

      <ContactSection onNavigate={onNavigate} />
      <FaqAccordion />
    </div>
  );
};
