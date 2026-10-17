import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  SlidersHorizontal, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  RotateCcw, 
  Eye, 
  Building2, 
  BriefcaseBusiness,
  HelpCircle,
  FileCode2
} from 'lucide-react';
import { useDemo, THEMES, ThemeColor } from '../context/DemoContext';

interface DemoTopBarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const DemoTopBar: React.FC<DemoTopBarProps> = ({ onNavigate, currentPath }) => {
  const {
    lawyerName,
    setLawyerName,
    firmName,
    setFirmName,
    city,
    setCity,
    themeColor,
    setThemeColor,
    isDemoBarVisible,
    setIsDemoBarVisible,
    setIsAuditModalOpen,
    setIsProposalModalOpen,
    resetToDefaults
  } = useDemo();

  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  if (!isDemoBarVisible) {
    return (
      <aside aria-label="Controle de Demonstração" className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsDemoBarVisible(true)}
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-white bg-[#111827]/95 hover:bg-[#1f2937] border border-[#C5A059]/50 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-105 group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[#C5A059]">Modo Demonstração</span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-300 group-hover:text-white">Painel da Agência</span>
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059] ml-1" />
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Painel de Demonstração Interativa" className="relative z-50 bg-[#0B0F17] text-white border-b border-[#C5A059]/30 text-xs shadow-xl font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Demo Badge & Branding */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#D4AF37] font-semibold tracking-wider uppercase text-[10px]">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Demo Interativa · Agência Bora33</span>
            </div>
            
            <span className="text-neutral-500 hidden lg:inline">|</span>

            {/* Quick Live Palette Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-neutral-400 hidden sm:inline text-[11px] font-medium flex items-center gap-1">
                <Palette className="w-3 h-3 text-neutral-400" />
                Cores:
              </span>
              <div className="flex items-center gap-1">
                {(Object.keys(THEMES) as ThemeColor[]).map((tKey) => {
                  const t = THEMES[tKey];
                  const isActive = themeColor === tKey;
                  return (
                    <button
                      key={tKey}
                      onClick={() => setThemeColor(tKey)}
                      title={`${t.name} (${t.badge})`}
                      className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${
                        isActive
                          ? 'bg-white/15 text-white border border-white/40 shadow-sm font-semibold'
                          : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block border border-black/40"
                        style={{ backgroundColor: t.primaryHex }}
                      />
                      <span className="hidden md:inline">{t.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Actions & Customizer */}
          <div className="flex items-center gap-2 flex-wrap ml-auto">
            
            {/* Customizer Popover Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] font-medium transition-colors ${
                  isCustomizeOpen
                    ? 'bg-[#1f2937] text-[#D4AF37] border-[#C5A059]'
                    : 'bg-[#111827] text-neutral-300 border-neutral-700 hover:text-white hover:border-neutral-500'
                }`}
              >
                <SlidersHorizontal className="w-3 h-3 text-[#C5A059]" />
                <span>Personalizar com seu Nome</span>
                {isCustomizeOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {/* Customizer Dropdown Drawer */}
              {isCustomizeOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#111827] border border-[#C5A059]/40 rounded-lg shadow-2xl p-4 text-neutral-200 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#C5A059]" />
                      <h4 className="font-semibold text-white text-sm">Simular Seu Escritório</h4>
                    </div>
                    <button
                      onClick={resetToDefaults}
                      className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1"
                      title="Restaurar valores padrão"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Restaurar
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-400 mb-3 leading-relaxed">
                    Altere os campos abaixo para visualizar em tempo real como o site ficaria com a marca do seu escritório:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                        Nome do(a) Advogado(a):
                      </label>
                      <input
                        type="text"
                        value={lawyerName}
                        onChange={(e) => setLawyerName(e.target.value)}
                        placeholder="Ex: Dr. Roberto Silveira"
                        className="w-full bg-[#1F2937] border border-neutral-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                        Nome da Banca / Escritório:
                      </label>
                      <input
                        type="text"
                        value={firmName}
                        onChange={(e) => setFirmName(e.target.value)}
                        placeholder="Ex: Silveira Advocacia & Consultoria"
                        className="w-full bg-[#1F2937] border border-neutral-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                        Comarca / Cidade Principal:
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ex: São Paulo - SP ou Curitiba - PR"
                        className="w-full bg-[#1F2937] border border-neutral-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsCustomizeOpen(false)}
                        className="w-full py-1.5 text-xs font-semibold bg-[#C5A059] hover:bg-[#D4AF37] text-[#111827] rounded transition-colors"
                      >
                        Aplicar e Fechar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technical Audit Modal Button */}
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-neutral-700 text-[11px] transition-colors"
              title="Ver Auditoria Técnica do Projeto"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Raio-X Técnico</span>
            </button>

            {/* Dedicated "Para Advogados" Page Link */}
            <button
              onClick={() => onNavigate('/para-advogados')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                currentPath === '/para-advogados'
                  ? 'bg-[#C5A059] text-[#111827]'
                  : 'bg-white/10 hover:bg-white/20 text-[#D4AF37] border border-[#C5A059]/40'
              }`}
            >
              <BriefcaseBusiness className="w-3 h-3" />
              <span>Apresentação Comercial</span>
            </button>

            {/* Direct CTA: Contratar para seu Escritório */}
            <button
              onClick={() => setIsProposalModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded font-semibold text-[11px] bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#111827] shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>Quero Este Projeto</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            {/* Minimize Bar */}
            <button
              onClick={() => setIsDemoBarVisible(false)}
              className="text-neutral-500 hover:text-neutral-300 p-1 rounded"
              title="Minimizar barra de demo (ver modo cliente puro)"
              aria-label="Minimizar"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>
      </div>
    </aside>
  );
};
