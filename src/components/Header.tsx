import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Scale } from 'lucide-react';
import { 
  getWhatsAppUrl, 
  WHATSAPP_PHONE_DISPLAY, 
  WHATSAPP_PHONE, 
  FIRM_NAME, 
  LAWYER_NAME 
} from '../utils/whatsapp';
import { useDemo } from '../context/DemoContext';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { city } = useDemo();

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Discreet Local Trust Bar - Dark Luxe */}
      <div className="bg-[#070A0F] text-xs text-neutral-400 py-1.5 px-4 sm:px-8 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-medium text-neutral-200">Atendimento Presencial e Online em Todo o Brasil</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-400 hidden sm:inline">Sigilo Profissional OAB</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href={`tel:+${WHATSAPP_PHONE}`}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-mono text-xs">{WHATSAPP_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar - Strictly 3 Zones - Deep Luxury Dark */}
      <header className="sticky top-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md border-b border-neutral-800/90 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Wordmark with Legal Icon */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded bg-[#111827] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors shrink-0 shadow-inner">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-[#C5A059] transition-colors block leading-none">
                {FIRM_NAME}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#C5A059] font-sans font-medium mt-1">
                Direito de Família & Sucessões · {LAWYER_NAME}
              </span>
            </div>
          </button>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <button
              onClick={() => handleNavClick('/')}
              className={`hover:text-[#C5A059] transition-colors pb-0.5 ${
                currentPath === '/' ? 'text-white font-semibold border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('/servicos')}
              className={`hover:text-[#C5A059] transition-colors pb-0.5 ${
                currentPath.startsWith('/servicos') || currentPath === '/pensao-alimenticia' ? 'text-white font-semibold border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-[#C5A059] transition-colors"
            >
              O Escritório
            </button>
            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-[#C5A059] transition-colors"
            >
              Simulador Jurídico
            </button>
            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-[#C5A059] transition-colors"
            >
              Dúvidas
            </button>
            <button
              onClick={() => handleNavClick('/contato')}
              className={`hover:text-[#C5A059] transition-colors pb-0.5 ${
                currentPath === '/contato' ? 'text-white font-semibold border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111827] hover:bg-[#1E293B] active:scale-[0.99] rounded border border-[#C5A059]/60 shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Agendar Consulta</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Dark Theme */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-neutral-800 px-6 py-6 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3 text-base font-medium text-neutral-200">
              <button
                onClick={() => handleNavClick('/')}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-800"
              >
                Início
              </button>
              <button
                onClick={() => handleNavClick('/servicos')}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-800"
              >
                Áreas de Atuação
              </button>
              <button
                onClick={() => {
                  handleNavClick('/');
                  setTimeout(() => {
                    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-800"
              >
                O Escritório & {LAWYER_NAME}
              </button>
              <button
                onClick={() => {
                  handleNavClick('/');
                  setTimeout(() => {
                    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-800"
              >
                Simulador Jurídico & Triagem
              </button>
              <button
                onClick={() => {
                  handleNavClick('/');
                  setTimeout(() => {
                    document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-800"
              >
                Dúvidas Frequentes (FAQ)
              </button>
              <button
                onClick={() => handleNavClick('/contato')}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-800"
              >
                Contato & Localização
              </button>
              <button
                onClick={() => handleNavClick('/bio')}
                className="text-left py-2 text-[#C5A059] font-medium text-sm"
              >
                Hub de Links / Bio Instagram →
              </button>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#111827] hover:bg-[#1E293B] rounded border border-[#C5A059]"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Falar no WhatsApp Agora</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
