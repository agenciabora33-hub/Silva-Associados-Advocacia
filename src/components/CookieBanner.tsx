import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (path: string) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('adv_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth appearance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('adv_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('adv_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#111827]/95 backdrop-blur-md text-white p-5 rounded-xl border border-[#C5A059]/40 shadow-2xl space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Privacidade & Cookies (LGPD)</span>
          </div>
          <button
            onClick={handleAcceptEssential}
            className="text-neutral-400 hover:text-white p-1 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed font-light">
          Utilizamos cookies e tecnologias seguras para aprimorar sua navegação, viabilizar nossos serviços e analisar o tráfego em conformidade com a LGPD e as diretrizes do Google e Meta.
        </p>

        <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <button
            onClick={() => {
              setIsVisible(false);
              onNavigate('/privacidade');
            }}
            className="text-[11px] text-[#C5A059] hover:underline text-left sm:text-center"
          >
            Ler Política de Privacidade
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAcceptEssential}
              className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white border border-neutral-700 rounded transition-colors"
            >
              Apenas Necessários
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-1.5 text-xs font-semibold text-[#111827] bg-[#C5A059] hover:bg-[#d4af37] rounded flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Aceitar Todos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
