import React, { useState } from 'react';
import { Scale, Sparkles, X, Info } from 'lucide-react';
import { FIRM_NAME } from '../utils/whatsapp';

export const DiscreetDemoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Tarja informativa de site demonstrativo"
      className="relative z-50 bg-[#06090E] text-neutral-400 border-b border-[#C5A059]/25 text-[11px] sm:text-xs py-2 px-4 font-sans tracking-wide shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap mx-auto sm:mx-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#D4AF37] font-semibold text-[10px] uppercase tracking-wider">
            <Scale className="w-3 h-3 text-[#C5A059]" />
            <span>Site Demonstrativo</span>
          </div>
          
          <span className="text-neutral-600 hidden sm:inline">|</span>
          
          <span className="text-neutral-300 font-medium">
            {FIRM_NAME}
          </span>

          <span className="text-neutral-500 hidden md:inline">·</span>

          <span className="text-neutral-400 hidden md:inline text-[11px]">
            Projeto conceitual de alta conversão desenvolvido para demonstração de tecnologia jurídica digital. Contatos e dados fictícios.
          </span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-500 hover:text-white transition-colors p-1 rounded hover:bg-neutral-800/60 shrink-0"
          aria-label="Fechar aviso de demonstração"
          title="Fechar aviso discreto"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
