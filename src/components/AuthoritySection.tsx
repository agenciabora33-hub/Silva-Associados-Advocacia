import React from 'react';
import { ShieldCheck, HeartHandshake, Scale, Award, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, LAWYER_NAME, FIRM_NAME } from '../utils/whatsapp';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#0B0F17] border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>Autoridade & Posicionamento Jurídico</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight text-balance">
            Técnica jurídica refinada aliada à profunda empatia humana.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Conflitos familiares e transmissões patrimoniais não são meros números de processos. Envolvem histórias de vida, laços afetivos e o futuro de filhos e herdeiros. A atuação da <strong>{FIRM_NAME}</strong> é pautada pela condução serena, discreta e intransigente na garantia dos seus direitos.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid - Dark Luxe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-8 rounded-xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/50 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#161F2E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Atendimento Humanizado
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Compreensão das angústias emocionais de momentos de ruptura, inventários e diagnósticos médicos atípicos, acolhendo sem julgamentos.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/50 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#161F2E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Rigor Técnico & Partilha Justa
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Auditoria patrimonial meticulosa de imóveis, contas, participações societárias e regimes de bens para evitar prejuízos invisíveis.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/50 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#161F2E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Discrição & Sigilo Inviolável
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Proteção rigorosa da privacidade da sua família e negócios familiares em todos os âmbitos, seja presencialmente ou por videoconferência.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/50 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#161F2E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Defesa Especializada TEA / PCD
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Atuação combativa com liminares de urgência contra planos de saúde e SUS para liberação integral de terapias ABA, medicamentos e LOAS.
            </p>
          </div>

        </div>

        {/* Lawyer Bio Spotlight Box - Dark Luxury Container */}
        <div className="mt-16 bg-gradient-to-r from-[#111827] via-[#161F2E] to-[#111827] rounded-2xl text-white p-8 sm:p-12 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                <span>Sócia Titular</span>
                <span className="text-neutral-500">·</span>
                <span>Inscrição na OAB Nacional</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {LAWYER_NAME}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Advogada graduada com especialização contínua nas transformações do Direito das Famílias, Sucessões e Gestão de Conflitos Patrimoniais. À frente da <strong>{FIRM_NAME}</strong>, atua nacionalmente orientando indivíduos e famílias com estratégia processual de excelência, sigilo absoluto e preservação dos vínculos mais caros.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  {FIRM_NAME}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  Atendimento Presencial e Online em todo o Brasil
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={getWhatsAppUrl(`Olá, ${LAWYER_NAME}! Gostaria de agendar uma consulta sobre meu caso com a ${FIRM_NAME}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-xl active:scale-[0.99] font-bold"
              >
                <span>Agendar Orientação Jurídica</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
              </a>
              <span className="text-xs text-neutral-400 mt-2">
                Atendimento confidencial e prioritário
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
