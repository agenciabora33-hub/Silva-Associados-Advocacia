import React from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Check, Scale, FileText, HeartHandshake, ShieldCheck, Coins } from 'lucide-react';
import { getWhatsAppUrl, getServiceWhatsAppUrl, LAWYER_NAME, FIRM_NAME } from '../utils/whatsapp';

import divorcioImg from '../assets/images/divorcio_partilha_bens_1791555645234.jpg';
import sucessoesImg from '../assets/images/sucessoes_patrimonio_1791386831317.jpg';
import guardaImg from '../assets/images/guarda_infancia_protegida_1791555656534.jpg';
import teaImg from '../assets/images/family_care_specialized_1791386814944.jpg';
import pensaoImg from '../assets/images/pensao_alimenticia_apoio_1791579205311.jpg';

const SERVICE_INDEX_VISUALS: Record<string, { src: string; fallback: string; alt: string; tag: string }> = {
  'divorcio-e-partilha': {
    src: divorcioImg,
    fallback: '/images/divorcio_partilha_bens_1791555645234.jpg',
    alt: 'Divórcio consensual e partilha estratégica de patrimônio matrimonial',
    tag: 'Direito de Família'
  },
  'pensao-alimenticia': {
    src: pensaoImg,
    fallback: '/images/pensao_alimenticia_apoio_1791579205311.jpg',
    alt: 'Pensão alimentícia, fixação e cobrança sob rito de prisão ou penhora',
    tag: 'Direito de Família'
  },
  'inventario-e-sucessoes': {
    src: sucessoesImg,
    fallback: '/images/sucessoes_patrimonio_1791386831317.jpg',
    alt: 'Inventário em cartório e planejamento sucessório com economia fiscal',
    tag: 'Direito Sucessório'
  },
  'guarda-e-convivencia': {
    src: guardaImg,
    fallback: '/images/guarda_infancia_protegida_1791555656534.jpg',
    alt: 'Guarda compartilhada e convivência familiar preservando os filhos',
    tag: 'Proteção à Infância'
  },
  'direitos-tea-e-apoio-especializado': {
    src: teaImg,
    fallback: '/images/family_care_specialized_1791386814944.jpg',
    alt: 'Direitos da pessoa autista com cobertura de terapias ABA',
    tag: 'Neurodiversidade'
  }
};

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#C5A059]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#C5A059]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-[#070A0F] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-400 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
              Início
            </button>
            <span>/</span>
            <span className="text-[#C5A059] font-semibold">Áreas de Atuação</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight">
            Especialidades Jurídicas Estratégicas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Advocacia consultiva e contenciosa especializada em causas de família, partilhas patrimoniais, inventários em cartório e tutela de direitos fundamentais conduzidas pela <strong>{FIRM_NAME}</strong>. Atendimento presencial com agendamento prévio e online para todo o Brasil.
          </p>
        </div>

        {/* Services Full List with Visual Portrayals */}
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const visual = SERVICE_INDEX_VISUALS[service.id];
            const formattedIndex = `0${index + 1}`;

            return (
              <div
                key={service.id}
                className="bg-[#111827] rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl hover:border-[#C5A059]/50 transition-all"
              >
                {/* Visual Top Banner for each service */}
                {visual && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                      onError={(e) => {
                        e.currentTarget.src = visual.fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/35 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-[#C5A059] font-mono font-bold text-sm">{formattedIndex}.</span>
                        <span className="font-semibold uppercase tracking-wider text-xs text-white">{service.badge}</span>
                      </div>
                      <span className="text-[11px] text-neutral-300 font-light bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                        {visual.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 sm:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#C5A059] block">
                            {formattedIndex} · {service.badge}
                          </span>
                          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                        {service.longDescription}
                      </p>

                      <div>
                        <h4 className="text-xs uppercase font-semibold text-neutral-200 tracking-wider mb-2">
                          Destaques e Benefícios da Condução do Caso:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#0B0F17] p-6 rounded-xl border border-neutral-800 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block mb-1">
                          Para quem é indicada:
                        </span>
                        <p className="text-xs text-neutral-300 leading-relaxed font-light">
                          {service.targetAudience}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <button
                          onClick={() => onNavigate(`/servicos/${service.slug}`)}
                          className="w-full py-3 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#C5A059] transition-colors flex items-center justify-center gap-2"
                        >
                          <span>Ver Página Completa & Etapas</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                        </button>

                        <a
                          href={getServiceWhatsAppUrl(service.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center block shadow"
                        >
                          Consultar sobre esta Área
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Box */}
        <div className="mt-16 bg-[#111827] text-white p-8 sm:p-12 rounded-2xl border border-[#C5A059]/30 text-center max-w-3xl mx-auto space-y-4 shadow-2xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium">
            Precisa de auxílio em uma questão com características mistas?
          </h3>
          <p className="text-sm text-neutral-300 font-light max-w-xl mx-auto">
            Muitas situações envolvem divórcio conjunto com partilha de patrimônio societário ou execução urgente de alimentos. Conte com assessoria estratégica unificada e atendimento nacional com {LAWYER_NAME}.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl(`Olá, ${LAWYER_NAME}! Tenho um caso com características específicas e gostaria de agendar uma consulta com a ${FIRM_NAME}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-xl"
            >
              <span>Conversar com {LAWYER_NAME}</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
