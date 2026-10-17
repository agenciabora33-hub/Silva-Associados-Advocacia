import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, ArrowRight, Sparkles, Scale } from 'lucide-react';
import {
  WHATSAPP_PHONE_DISPLAY,
  WHATSAPP_PHONE,
  EMAIL_CONTACT,
  OFFICE_ADDRESS,
  getWhatsAppUrl,
  GOOGLE_MAPS_LINK,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  TIKTOK_LINK,
  TIKTOK_HANDLE,
  FACEBOOK_LINK,
  FACEBOOK_NAME,
  LAWYER_NAME,
  FIRM_NAME
} from '../utils/whatsapp';
import { InstagramIcon, TikTokIcon, FacebookIcon, GoogleMapsPinIcon } from './SocialIcons';
import { useDemo } from '../context/DemoContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lawyerName, firmName, oabNumber } = useDemo();
  const currentLawyer = lawyerName || LAWYER_NAME;
  const currentFirm = firmName || FIRM_NAME;

  return (
    <footer className="bg-[#070A0F] text-neutral-300 border-t border-neutral-800">
      {/* Top Banner / Confidentiality Commitment */}
      <div className="border-b border-neutral-800/80 py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              Proteja seu patrimônio e garanta a paz da sua família
            </h3>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Atendimento estratégico, técnico e com sensibilidade humana. Agende seu diagnóstico preliminar com total sigilo.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(`Olá, ${currentLawyer}! Gostaria de agendar uma consulta preliminar para orientação jurídica na ${currentFirm}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl transition-all active:scale-[0.99] whitespace-nowrap"
          >
            <span>Iniciar Atendimento Confidencial</span>
            <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Identity & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111827] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                {currentFirm}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#C5A059]">
              <ShieldCheck className="w-4 h-4" />
              <span className="tracking-wide uppercase font-medium">{oabNumber} · {currentLawyer}</span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Advocacia estratégica e humanizada dedicada ao Direito de Família, Sucessões, Inventários e Direitos de Pessoas com TEA / PCD em todo o Brasil.
            </p>

            <div className="pt-1 text-xs text-neutral-500 font-mono">
              {currentFirm} · Excelência Jurídica
            </div>

            {/* Quick Icon Links with Subtle Gold Accent */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-medium">
                Canais Rápidos:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${currentLawyer} (${INSTAGRAM_HANDLE})`}
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all shadow-sm"
                  title={`Instagram ${INSTAGRAM_HANDLE}`}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TikTok de ${currentLawyer} (${TIKTOK_HANDLE})`}
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all shadow-sm"
                  title={`TikTok ${TIKTOK_HANDLE}`}
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>

                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook de ${currentFirm}`}
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all shadow-sm"
                  title="Facebook Oficial"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Perfil no Google Maps`}
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all shadow-sm"
                  title="Google Maps"
                >
                  <GoogleMapsPinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Áreas de Atuação */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('/servicos/divorcio-e-partilha')}
                  className="hover:text-white transition-colors text-left"
                >
                  Divórcio Consensual & Litigioso
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/pensao-alimenticia')}
                  className="hover:text-white transition-colors text-left text-[#C5A059] font-medium"
                >
                  Pensão Alimentícia & Execução de Alimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicos/inventario-e-sucessoes')}
                  className="hover:text-white transition-colors text-left"
                >
                  Inventário em Cartório & Judicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicos/inventario-e-sucessoes')}
                  className="hover:text-white transition-colors text-left"
                >
                  Planejamento Sucessório & Holding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicos/guarda-e-convivencia')}
                  className="hover:text-white transition-colors text-left"
                >
                  Guarda Compartilhada & Convivência
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicos/direitos-tea-e-apoio-especializado')}
                  className="hover:text-white transition-colors text-left"
                >
                  Direitos TEA & Cobertura de Terapias
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: NAP & Localização */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-4">
              Sede & Atendimento
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-200 block font-normal">Sede Central</strong>
                  <span>{OFFICE_ADDRESS}</span>
                  <span className="block text-xs text-[#C5A059] mt-0.5 font-medium">
                    Presencial com Agendamento · Online em Todo o Brasil
                  </span>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-neutral-400 hover:text-white underline mt-1"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:+${WHATSAPP_PHONE}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL_CONTACT}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span>Segunda a Sexta: 08:30 às 18:30</span>
                  <span className="block text-xs text-neutral-500">Atendimento sob reserva prévia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Links Rápidos */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('/bio')}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <span>Hub de Links Instagram / Bio</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contato')}
                  className="hover:text-white transition-colors"
                >
                  Como Chegar no Escritório
                </button>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(`Olá, ${currentLawyer}! Gostaria de agendar uma consulta virtual por videoconferência com a ${currentFirm}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Atendimento Online para todo o Brasil
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/');
                    setTimeout(() => {
                      document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Destaque Moderado: Bloco Exclusivo de Redes Sociais com Ícones */}
        <div className="mt-12 pt-8 border-t border-neutral-800/90">
          <div className="bg-[#111827] border border-[#C5A059]/25 hover:border-[#C5A059]/40 rounded-2xl p-6 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Canais Oficiais de {currentLawyer}</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  Conecte-se e Acompanhe Orientações Jurídicas
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light max-w-xl">
                  Conteúdos semanais sobre Direito de Família, Sucessões, partilha patrimonial e defesa dos direitos fundamentais.
                </p>
              </div>

              {/* Cards de Redes Sociais com Ícones em Destaque */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
                {/* Instagram */}
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row items-center gap-3 p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 hover:border-[#C5A059] transition-all hover:bg-[#161F2E] active:scale-[0.98] shadow-sm text-center sm:text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] flex items-center justify-center transition-colors shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-[#C5A059] transition-colors block">
                      Instagram
                    </span>
                    <span className="text-[11px] text-neutral-400 block font-mono">
                      {INSTAGRAM_HANDLE}
                    </span>
                  </div>
                </a>

                {/* TikTok */}
                <a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row items-center gap-3 p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 hover:border-[#C5A059] transition-all hover:bg-[#161F2E] active:scale-[0.98] shadow-sm text-center sm:text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] flex items-center justify-center transition-colors shrink-0">
                    <TikTokIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-[#C5A059] transition-colors block">
                      TikTok
                    </span>
                    <span className="text-[11px] text-neutral-400 block font-mono">
                      {TIKTOK_HANDLE}
                    </span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row items-center gap-3 p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 hover:border-[#C5A059] transition-all hover:bg-[#161F2E] active:scale-[0.98] shadow-sm text-center sm:text-left col-span-2 sm:col-span-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0F17] flex items-center justify-center transition-colors shrink-0">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-[#C5A059] transition-colors block">
                      Facebook
                    </span>
                    <span className="text-[11px] text-neutral-400 block truncate max-w-[130px]">
                      {FACEBOOK_NAME}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer OAB & Advertising Compliance */}
        <div className="mt-10 pt-8 border-t border-neutral-800/80 text-xs text-neutral-500 text-justify md:text-left leading-relaxed space-y-3">
          <p>
            <strong>Aviso de Conformidade Ética (OAB):</strong> Este site possui caráter estritamente informativo e institucional, em total conformidade com o Provimento nº 205/2021 e com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB). O conteúdo veiculado não substitui a consulta jurídica formal individualizada nem configura captação indevida de clientela ou promessa de resultado. Todas as informações compartilhadas por clientes são protegidas por sigilo profissional inviolável garantido por lei.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs pt-1 text-neutral-400">
            <button
              onClick={() => onNavigate('/privacidade')}
              className="text-[#C5A059] hover:underline"
            >
              Política de Privacidade (LGPD)
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('/termos')}
              className="text-[#C5A059] hover:underline"
            >
              Termos de Uso & Avisos Regulatórios
            </button>
            <span>·</span>
            <span className="text-neutral-400">Atendimento Presencial e Online para todo o Brasil</span>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} {currentFirm} — Advocacia & Consultoria Estratégica. Todos os direitos reservados.
          </div>
          
          <div className="text-center md:text-right text-neutral-400">
            <span>Site de Demonstração Jurídica · </span>
            <strong className="text-[#C5A059]">{currentFirm}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
