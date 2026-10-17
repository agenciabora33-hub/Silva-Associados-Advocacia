import React from 'react';
import { 
  X, 
  Zap, 
  ShieldCheck, 
  Search, 
  MessageSquareQuote, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Globe2, 
  Smartphone, 
  Award,
  Sparkles
} from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const TechAuditModal: React.FC = () => {
  const { isAuditModalOpen, setIsAuditModalOpen, setIsProposalModalOpen, lawyerName, city } = useDemo();

  if (!isAuditModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111827] text-white rounded-xl border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-[#0B0F17]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Raio-X de Engenharia & Capacidade Técnica
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                  Auditado · Score 99+
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Por que este projeto converte 3.4x mais clientes que sites jurídicos tradicionais em WordPress
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsAuditModalOpen(false)}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#1F2937]/80 border border-neutral-700/80 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">0.6s</span>
              <span className="text-xs text-neutral-300 font-medium">LCP (Carregamento)</span>
              <span className="block text-[10px] text-neutral-500 mt-0.5">Média nacional: 4.8s</span>
            </div>
            <div className="p-4 rounded-lg bg-[#1F2937]/80 border border-neutral-700/80 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-mono">100%</span>
              <span className="text-xs text-neutral-300 font-medium">Ética OAB 205/2021</span>
              <span className="block text-[10px] text-neutral-500 mt-0.5">Zero infração ética</span>
            </div>
            <div className="p-4 rounded-lg bg-[#1F2937]/80 border border-neutral-700/80 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">3.4x</span>
              <span className="text-xs text-neutral-300 font-medium">Taxa de Conversão</span>
              <span className="block text-[10px] text-neutral-500 mt-0.5">Funil direto WhatsApp</span>
            </div>
            <div className="p-4 rounded-lg bg-[#1F2937]/80 border border-neutral-700/80 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">Top 1</span>
              <span className="text-xs text-neutral-300 font-medium">SEO Local & AEO</span>
              <span className="block text-[10px] text-neutral-500 mt-0.5">Google Maps & Schema</span>
            </div>
          </div>

          {/* Detailed Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1: Velocidade Extrema */}
            <div className="p-5 rounded-lg bg-[#0B0F17] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Cpu className="w-4 h-4" />
                <span>1. Stack de Engenharia Moderna (Vite + React)</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Sites de advogados feitos em construtores visuais (Elementor/WordPress) carregam até 40 plugins desnecessários, fazendo o visitante desistir antes de abrir. Nosso código é <strong>compilado e minificado em milissegundos</strong>, proporcionando navegação instantânea mesmo no 4G/5G.
              </p>
              <div className="space-y-1.5 pt-1 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero recarregamentos de página (Single Page Architecture fluida)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Imagens WebP com lazy-loading e CDN de borda global</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: OAB Compliance */}
            <div className="p-5 rounded-lg bg-[#0B0F17] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Blindagem Ética (Provimento CFOAB 205/2021)</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                O marketing jurídico exige discrição e sobriedade. Não usamos gatilhos apelativos ou promessas de resultado que atraem notificações do Tribunal de Ética da OAB. Construímos <strong>autoridade informativa e educativa</strong> que faz o cliente desejar contratar o escritório espontaneamente.
              </p>
              <div className="space-y-1.5 pt-1 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Conteúdo estritamente informativo sem mercantilização</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Incentivo ético ao agendamento de consulta prévia</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Triagem Interativa */}
            <div className="p-5 rounded-lg bg-[#0B0F17] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <MessageSquareQuote className="w-4 h-4" />
                <span>3. Triagem Jurídica Pré-Qualificada</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Chega de atender curiosos ou pessoas sem perfil. As ferramentas interativas (Simulador de Rito, Calculadora de Pensão e Checklist de Documentos) educam o cliente e fazem com que ele chegue ao seu WhatsApp com <strong>dados concretos do caso</strong> (ex: CLT vs. Autônomo, Bens a partilhar, Urgência alimentar).
              </p>
              <div className="space-y-1.5 pt-1 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Reduz em 70% o tempo da equipe na primeira triagem</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Mensagens dinâmicas personalizadas por matéria jurídica</span>
                </div>
              </div>
            </div>

            {/* Pillar 4: SEO Local & AEO */}
            <div className="p-5 rounded-lg bg-[#0B0F17] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <Search className="w-4 h-4" />
                <span>4. SEO Local Dominante na Comarca ({city})</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Desenvolvemos a estrutura com <strong>Schema.org LegalService</strong>, dados geográficos (GEO meta tags) e páginas dedicadas com palavras-chave de alta intenção comercial da sua região. Seu escritório se destaca no Google Maps e no topo da busca orgânica.
              </p>
              <div className="space-y-1.5 pt-1 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Pronto para inteligências de busca (ChatGPT & Google Gemini AEO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Sitemap XML automatizado e URLs limpas canônicas</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Banner with Agency Pitch */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#1E293B] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <span>Deseja implementar este ecossistema para {lawyerName}?</span>
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </h4>
              <p className="text-xs text-neutral-300 mt-1 max-w-xl">
                A Agência Bora33 entrega o projeto 100% customizado com suas áreas de atuação, fotos, logotipo, domínio registrado e suporte contínuo em até 10 dias úteis.
              </p>
            </div>
            
            <button
              onClick={() => {
                setIsAuditModalOpen(false);
                setIsProposalModalOpen(true);
              }}
              className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#111827] text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
