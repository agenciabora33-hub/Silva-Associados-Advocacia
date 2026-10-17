import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  Gavel, 
  Sparkles,
  PhoneCall,
  Clock,
  Landmark
} from 'lucide-react';
import { 
  getWhatsAppUrl, 
  LAWYER_NAME, 
  FIRM_NAME, 
  WHATSAPP_PHONE_DISPLAY 
} from '../utils/whatsapp';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#05070A] via-[#090D14] to-[#0D131F] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-800 text-white">
      {/* Luxury Gold and Slate Ambient Lighting Flares */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#C5A059]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Magnetic Value Proposition & Legal Authority */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Juridical Heraldry Badge Strip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827]/90 border border-[#C5A059]/40 shadow-lg text-xs uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1.5 text-[#D4AF37] font-bold">
                <Scale className="w-4 h-4 text-[#C5A059] animate-pulse" />
                {FIRM_NAME}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-200">Família & Sucessões</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#C5A059] flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" />
                Atuação Nacional
              </span>
            </div>

            {/* Main Headline - High-End Serif & Editorial Stature */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12] tracking-tight text-balance">
              Advocacia estratégica, combativa e humanizada para momentos decisivos.
            </h1>

            {/* Sub-headline / Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              Liderada pela <strong>{LAWYER_NAME}</strong>, nossa banca jurídica atua com rigor processual e acolhimento sensível na condução de <strong>divórcios de alto patrimônio</strong>, <strong>inventários ágeis em cartório</strong>, <strong>pensão alimentícia justa</strong> e proteção de direitos fundamentais em todo o Brasil.
            </p>

            {/* 4 Architectural Juridical Pillars Grid with Prominent Legal Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-neutral-200 font-medium">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111827]/90 border border-neutral-800 hover:border-[#C5A059]/50 hover:bg-[#161F2E] transition-all shadow-md group">
                <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] transition-colors shrink-0">
                  <Gavel className="w-4 h-4" />
                </div>
                <span>Inventários céleres e holding familiar</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111827]/90 border border-neutral-800 hover:border-[#C5A059]/50 hover:bg-[#161F2E] transition-all shadow-md group">
                <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] transition-colors shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Partilha estratégica sem dilapidação</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111827]/90 border border-neutral-800 hover:border-[#C5A059]/50 hover:bg-[#161F2E] transition-all shadow-md group">
                <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] transition-colors shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <span>Pensão alimentícia & rito de prisão</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111827]/90 border border-neutral-800 hover:border-[#C5A059]/50 hover:bg-[#161F2E] transition-all shadow-md group">
                <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] transition-colors shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>Direitos TEA & liminares em saúde</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(`Olá, ${LAWYER_NAME}! Gostaria de agendar uma consulta para orientação jurídica especializada com a ${FIRM_NAME}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#0B0F17] bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] hover:brightness-110 active:scale-[0.99] rounded-lg shadow-xl hover:shadow-[#C5A059]/20 transition-all whitespace-nowrap font-sans font-bold"
              >
                <span>Falar com {LAWYER_NAME}</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
              </a>

              <button
                onClick={() => onNavigate('/servicos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-200 hover:text-[#C5A059] bg-[#111827]/90 hover:bg-[#1E293B] border border-neutral-700/80 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                <span>Conhecer Especialidades</span>
              </button>
            </div>

            {/* Direct Contact Phone & Ethical Guarantee Footer Strip */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C5A059]" />
                <span>Sigilo Profissional Inviolável (OAB)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>Defesa Estratégica & Contenciosa</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-mono text-xs">{WHATSAPP_PHONE_DISPLAY}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Visual Asset with Legal Seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C5A059]/35 transform rotate-1 hidden sm:block pointer-events-none" />
              
              <div className="relative rounded-xl overflow-hidden bg-[#111827] shadow-2xl border border-neutral-800">
                {/* Lawyer Portrait */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#070A0F] overflow-hidden">
                  <img
                    src="https://i.ibb.co/kVdW3dYG/watermarked-img-15853591358428785044.jpg"
                    alt={`${LAWYER_NAME} — ${FIRM_NAME}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('dra_leticia_possenti')) {
                        target.src = '/images/dra_leticia_possenti.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />
                  
                  {/* Floating Juridical Seal at Top Right */}
                  <div className="absolute top-4 right-4 bg-[#0B0F17]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#C5A059]/50 shadow-2xl flex items-center gap-2 text-xs">
                    <Scale className="w-4 h-4 text-[#C5A059]" />
                    <span className="font-semibold text-white tracking-wide">OAB Regular</span>
                  </div>

                  {/* Floating Legal Pillars Badge at Top Left */}
                  <div className="absolute top-4 left-4 bg-[#0B0F17]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 shadow-xl flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                    <Gavel className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Família & Sucessões</span>
                  </div>

                  {/* Floating card anchor on portrait */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0B0F17]/95 backdrop-blur-md p-5 rounded-xl border border-[#C5A059]/40 shadow-2xl space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-serif text-xl font-bold text-white block">
                          {LAWYER_NAME}
                        </span>
                        <span className="text-xs text-[#D4AF37] font-medium tracking-wide uppercase block">
                          Sócia Titular · {FIRM_NAME}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#161F2E] border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0">
                        <Scale className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Atendimento com Agendamento
                      </span>
                      <span className="text-neutral-500">·</span>
                      <span className="text-[#C5A059] font-mono">
                        {WHATSAPP_PHONE_DISPLAY}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
