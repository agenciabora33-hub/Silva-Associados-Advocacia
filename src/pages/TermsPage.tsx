import React from 'react';
import { ShieldCheck, ArrowLeft, Scale, AlertCircle } from 'lucide-react';
import { OFFICE_ADDRESS, EMAIL_CONTACT, WHATSAPP_PHONE_DISPLAY, LAWYER_NAME, FIRM_NAME } from '../utils/whatsapp';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#070A0F] py-16 lg:py-24 text-neutral-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-400 mb-6">
          <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
            Início
          </button>
          <span>/</span>
          <span className="text-[#C5A059] font-semibold">Termos de Uso e Avisos Legais</span>
        </div>

        {/* Header */}
        <div className="bg-[#111827] p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-3">
            <Scale className="w-4 h-4" />
            <span>Código de Ética da OAB & Diretrizes de Plataformas de Anúncios</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
            Termos de Uso & Avisos Regulatórios
          </h1>
          <p className="mt-3 text-sm text-neutral-300 font-light leading-relaxed">
            Regras de navegação, conformidade ética com o Provimento nº 205/2021 do Conselho Federal da OAB e avisos legais sobre serviços de comunicação institucional da <strong>{FIRM_NAME}</strong>.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-[#111827] p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl space-y-8 text-sm leading-relaxed text-neutral-300">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-white">
              1. Caráter Informativo e Não Vinculante (Provimento 205/2021 OAB)
            </h2>
            <p>
              O conteúdo deste site possui caráter estritamente educativo, institucional e informativo. Os textos, simuladores preliminares e respostas a perguntas frequentes não constituem consultoria jurídica vinculante nem substituem a análise formal de documentos por um advogado regularmente inscrito na OAB.
            </p>
            <p className="text-neutral-400">
              A advocacia brasileira proíbe a promessa de resultado ou causa ganha, uma vez que toda decisão judicial depende da apreciação soberana do Poder Judiciário e das particularidades de cada caso concreto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-white">
              2. Modalidades de Atendimento
            </h2>
            <p>
              A <strong>{FIRM_NAME}</strong>, sob liderança de <strong>{LAWYER_NAME}</strong>, presta assessoria jurídica nas seguintes modalidades oficiais:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#0B0F17] border border-neutral-800">
                <strong className="text-white block font-medium mb-1">Atendimento Presencial com Agendamento</strong>
                <p className="text-xs text-neutral-400">
                  {OFFICE_ADDRESS}. Reuniões com horário marcado para garantia de sigilo e conforto.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0F17] border border-neutral-800">
                <strong className="text-white block font-medium mb-1">Atendimento Online Seguro</strong>
                <p className="text-xs text-neutral-400">
                  Videoconferências com criptografia de ponta a ponta e assinatura digital de documentos válidas perante o judiciário de todo o Brasil.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-white">
              3. Isenção de Plataformas e Canais de Comunicação
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Este site não possui vínculo corporativo ou societário com Meta Platforms, Google LLC, WhatsApp LLC ou redes sociais de terceiros. Todos os canais de contato disponibilizados destinam-se exclusivamente ao agendamento de consultas preliminares nos termos das normas éticas da OAB.
            </p>
          </section>

          <div className="pt-6 border-t border-neutral-800 flex justify-between items-center">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para a Página Inicial</span>
            </button>
            <span className="text-xs text-neutral-500 font-mono">
              Telefone: {WHATSAPP_PHONE_DISPLAY} · {EMAIL_CONTACT}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
