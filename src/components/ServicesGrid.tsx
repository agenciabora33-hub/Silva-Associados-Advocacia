import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Scale, FileText, HeartHandshake, ShieldCheck, ArrowRight, Check, X, ExternalLink, Coins } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

import divorcioImg from '../assets/images/divorcio_partilha_bens_1791555645234.jpg';
import sucessoesImg from '../assets/images/sucessoes_patrimonio_1791386831317.jpg';
import guardaImg from '../assets/images/guarda_infancia_protegida_1791555656534.jpg';
import teaImg from '../assets/images/family_care_specialized_1791386814944.jpg';
import pensaoImg from '../assets/images/pensao_alimenticia_apoio_1791579205311.jpg';

interface ServiceVisualMeta {
  src: string;
  fallback: string;
  alt: string;
  visualTag: string;
}

const SERVICE_VISUALS: Record<string, ServiceVisualMeta> = {
  'divorcio-e-partilha': {
    src: divorcioImg,
    fallback: '/images/divorcio_partilha_bens_1791555645234.jpg',
    alt: 'Divórcio consensual e partilha estratégica de patrimônio matrimonial com segurança documental',
    visualTag: 'Partilha Patrimonial & Acordo Justo'
  },
  'pensao-alimenticia': {
    src: pensaoImg,
    fallback: '/images/pensao_alimenticia_apoio_1791579205311.jpg',
    alt: 'Pensão alimentícia, fixação de alimentos provisórios, execução sob prisão e revisional em Caxias do Sul',
    visualTag: 'Fixação, Execução & Revisional'
  },
  'inventario-e-sucessoes': {
    src: sucessoesImg,
    fallback: '/images/sucessoes_patrimonio_1791386831317.jpg',
    alt: 'Inventário extrajudicial em cartório e planejamento sucessório com proteção de herança',
    visualTag: 'Inventário & Transmissão de Bens'
  },
  'guarda-e-convivencia': {
    src: guardaImg,
    fallback: '/images/guarda_infancia_protegida_1791555656534.jpg',
    alt: 'Guarda compartilhada e convivência familiar com preservação da estabilidade dos filhos',
    visualTag: 'Proteção à Infância & Plano Parental'
  },
  'direitos-tea-e-apoio-especializado': {
    src: teaImg,
    fallback: '/images/family_care_specialized_1791386814944.jpg',
    alt: 'Apoio jurídico especializado para liberação de terapias ABA e direitos da pessoa autista',
    visualTag: 'Direitos TEA & Terapias Multidisciplinares'
  }
};

interface ServicesGridProps {
  onNavigate: (path: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#C5A059]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#C5A059]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C5A059]" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-[#C5A059]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#070A0F] border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>Especialidades Jurídicas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight text-balance">
              Atuação especializada com rigor técnico e sensibilidade.
            </h2>
            <p className="mt-3 text-base text-neutral-300 font-light">
              Soluções jurídicas sob medida para resolver conflitos, proteger bens e salvaguardar quem mais importa para você. Atendimento presencial e online em todo o Brasil.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/servicos')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-[#C5A059] transition-colors group shrink-0"
          >
            <span>Ver todas as áreas detalhadas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Asymmetric Luxury Bento Cards with Authentic Portraying Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const visual = SERVICE_VISUALS[service.id];
            const formattedIndex = `0${index + 1}`;

            return (
              <div
                key={service.id}
                className="bg-[#111827] rounded-xl border border-neutral-800 hover:border-[#C5A059]/50 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Banner specifically portraying this legal service */}
                {visual && (
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter brightness-[0.90] group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes(visual.fallback)) {
                          target.src = visual.fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/40 to-transparent" />
                    
                    {/* Top right icon */}
                    <div className="absolute top-3.5 right-3.5 w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md">
                      {getIcon(service.iconName)}
                    </div>

                    {/* Bottom overlay info bar */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#F4EDE0]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#C5A059] font-mono font-bold text-sm">{formattedIndex}.</span>
                        <span className="tracking-wide uppercase font-semibold text-[11px] text-white drop-shadow-sm">{service.badge}</span>
                      </div>
                      <span className="hidden sm:inline-block text-[10px] text-neutral-300 font-medium px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm border border-white/10">
                        {visual.visualTag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {!visual && (
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded bg-[#161F2E] border border-[#C5A059]/20 flex items-center justify-center">
                          {getIcon(service.iconName)}
                        </div>
                        <span className="text-xs font-mono text-neutral-400">
                          {formattedIndex}. {service.badge}
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-[#C5A059] transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                      {service.shortDescription}
                    </p>

                    {/* Key Highlights */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                        <li key={bIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-neutral-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-neutral-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                    >
                      <span>Visualizar Detalhes</span>
                      <ExternalLink className="w-3 h-3 text-[#C5A059]" />
                    </button>

                    <button
                      onClick={() => onNavigate(`/servicos/${service.slug}`)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#334155] rounded border border-[#C5A059]/40 transition-colors whitespace-nowrap"
                    >
                      Página Completa →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic CTA Callout - Dark Theme */}
        <div className="mt-16 bg-gradient-to-r from-[#111827] via-[#161F2E] to-[#111827] p-6 sm:p-8 rounded-xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-1">
              Dúvidas sobre o enquadramento do seu caso?
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
              Utilize nosso simulador interativo de diagnóstico jurídico preliminar
            </h4>
          </div>
          <button
            onClick={() => {
              document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0F17] text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shrink-0 whitespace-nowrap transition-all"
          >
            Fazer Simulação Gratuita
          </button>
        </div>

      </div>

      {/* Quick Preview Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Visual */}
            {SERVICE_VISUALS[selectedService.id] && (
              <div className="relative h-44 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-xl bg-neutral-900">
                <img
                  src={SERVICE_VISUALS[selectedService.id].src}
                  alt={SERVICE_VISUALS[selectedService.id].alt}
                  className="w-full h-full object-cover filter brightness-[0.85]"
                  onError={(e) => {
                    e.currentTarget.src = SERVICE_VISUALS[selectedService.id].fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-white text-xs">
                  <span className="font-mono text-[#C5A059] font-bold uppercase tracking-wider">
                    {selectedService.badge}
                  </span>
                  <span className="text-[11px] text-neutral-300">
                    {SERVICE_VISUALS[selectedService.id].visualTag}
                  </span>
                </div>
              </div>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111827] mb-4">
              {selectedService.title}
            </h3>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-light">
              {selectedService.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-semibold text-[#111827] tracking-wider mb-3">
                Benefícios & Proteções Conquistadas:
              </h4>
              <ul className="space-y-2">
                {selectedService.benefits.map((b, i) => (
                  <li key={i} className="text-xs text-neutral-600 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-4 rounded bg-[#F9FAFB] border border-neutral-200">
              <h4 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider mb-2">
                Documentação Inicial Recomendada:
              </h4>
              <ul className="text-xs text-neutral-600 space-y-1 list-disc list-inside">
                {selectedService.documentsRequired.slice(0, 4).map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-100">
              <a
                href={getServiceWhatsAppUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 px-4 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#C5A059] transition-colors"
              >
                Falar com a Dra. Letícia sobre {selectedService.title}
              </a>

              <button
                onClick={() => {
                  const slug = selectedService.slug;
                  setSelectedService(null);
                  onNavigate(`/servicos/${slug}`);
                }}
                className="py-3 px-4 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold uppercase tracking-wider rounded border border-neutral-300 transition-colors"
              >
                Abrir Página Completa
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
