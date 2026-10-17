import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronRight, ShieldCheck, Coins, Scale } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY, LAWYER_NAME, FIRM_NAME } from '../utils/whatsapp';
import { trackAdConversion } from '../utils/analytics';
import { useDemo } from '../context/DemoContext';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { lawyerName, firmName } = useDemo();
  const currentLawyer = lawyerName || LAWYER_NAME;
  const currentFirm = firmName || FIRM_NAME;

  useEffect(() => {
    // Show gentle tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWhatsApp = (customMessage?: string) => {
    trackAdConversion('Contact', { source: 'floating_drawer', message: customMessage });
    try {
      window.open(getWhatsAppUrl(customMessage), '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = getWhatsAppUrl(customMessage);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Quick Interactive Triage Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#111827] text-white rounded-2xl shadow-2xl border border-[#C5A059]/40 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Drawer Header */}
          <div className="bg-[#0B0F17] text-white p-4 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#161F2E] border border-[#C5A059]/50 flex items-center justify-center font-serif text-sm font-bold text-[#C5A059]">
                  <Scale className="w-5 h-5 text-[#C5A059]" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0B0F17] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white">{currentLawyer}</h4>
                <p className="text-xs text-[#C5A059] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {currentFirm}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-3 bg-[#070A0F] text-xs text-neutral-300 border-b border-neutral-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Atendimento sigiloso conforme o Código de Ética da OAB.</span>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Selecione o assunto para orientação imediata:
            </p>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  `Olá, ${currentLawyer}! Gostaria de orientação jurídica sobre Pensão Alimentícia e Cobrança de Atrasados.`
                )
              }
              className="w-full text-left p-3 bg-[#0B0F17] hover:bg-[#161F2E] border border-neutral-800 hover:border-[#C5A059]/50 rounded-xl text-xs text-white font-medium flex items-center justify-between transition-colors group"
            >
              <span className="text-[#D4AF37] font-semibold flex items-center gap-2">
                <Coins className="w-3.5 h-3.5 text-[#C5A059]" />
                Pensão Alimentícia (Fixação / Cobrança)
              </span>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  `Olá, ${currentLawyer}! Gostaria de agendar orientação sobre Divórcio e Partilha de Bens.`
                )
              }
              className="w-full text-left p-3 bg-[#0B0F17] hover:bg-[#161F2E] border border-neutral-800 hover:border-[#C5A059]/50 rounded-xl text-xs text-white font-medium flex items-center justify-between transition-colors group"
            >
              <span>Divórcio & Partilha Estratégica</span>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  `Olá, ${currentLawyer}! Preciso de orientação jurídica sobre Inventário e Sucessões.`
                )
              }
              className="w-full text-left p-3 bg-[#0B0F17] hover:bg-[#161F2E] border border-neutral-800 hover:border-[#C5A059]/50 rounded-xl text-xs text-white font-medium flex items-center justify-between transition-colors group"
            >
              <span>Inventário em Cartório ou Judicial</span>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  `Olá, ${currentLawyer}! Gostaria de conversar com o escritório ${currentFirm}.`
                )
              }
              className="w-full text-left p-3.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors shadow-lg"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#0B0F17]" />
                <span>Conversar Diretamente no WhatsApp</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#0B0F17]" />
            </button>
          </div>
        </div>
      )}

      {/* Interactive Tooltip Banner */}
      {!isOpen && showTooltip && (
        <div className="mb-2 relative hidden sm:block">
          <div className="bg-[#111827] text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl border border-[#C5A059]/40 flex items-center gap-2 whitespace-nowrap animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Falar com {currentLawyer} agora</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-neutral-400 hover:text-white ml-1 p-0.5"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir WhatsApp para atendimento jurídico"
        className="relative group p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 border-2 border-white/20"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#111827] rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#111827] rounded-full" />
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </button>
    </div>
  );
};
