import React from 'react';
import {
  MessageCircle,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  Globe,
  Sparkles,
  Scale,
  HeartHandshake,
  Coins
} from 'lucide-react';
import {
  getWhatsAppUrl,
  GOOGLE_MAPS_LINK,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  TIKTOK_LINK,
  TIKTOK_HANDLE,
  FACEBOOK_LINK,
  FACEBOOK_NAME,
  WHATSAPP_PHONE_DISPLAY,
  LAWYER_NAME,
  FIRM_NAME,
  OFFICE_ADDRESS
} from '../utils/whatsapp';
import { downloadVCard } from '../utils/vcard';
import { InstagramIcon, TikTokIcon, FacebookIcon, GoogleMapsPinIcon } from '../components/SocialIcons';
import { useDemo } from '../context/DemoContext';

interface BioLinkPageProps {
  onNavigate: (path: string) => void;
}

export const BioLinkPage: React.FC<BioLinkPageProps> = ({ onNavigate }) => {
  const { lawyerName, firmName, oabNumber } = useDemo();
  const currentLawyer = lawyerName || LAWYER_NAME;
  const currentFirm = firmName || FIRM_NAME;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070A0F] via-[#0B0F17] to-[#070A0F] text-white py-12 px-4 flex flex-col justify-between">
      <div className="max-w-md w-full mx-auto space-y-6">
        
        {/* Profile Card */}
        <div className="text-center space-y-3">
          <div className="relative inline-block">
            <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#C5A059] via-white/50 to-[#D4AF37] shadow-xl">
              <img
                src="https://i.ibb.co/kVdW3dYG/watermarked-img-15853591358428785044.jpg"
                alt={currentLawyer}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-full"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('dra_leticia_possenti')) {
                    target.src = '/images/dra_leticia_possenti.jpg';
                  }
                }}
              />
            </div>
            <span className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-[#111827] rounded-full" />
          </div>

          <div>
            <h1 className="font-serif text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-1.5">
              <span>{currentLawyer}</span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </h1>
            <p className="text-xs uppercase tracking-wider text-[#C5A059] font-medium mt-0.5">
              {currentFirm} · {oabNumber}
            </p>
            <p className="text-xs text-neutral-300 max-w-xs mx-auto mt-2 font-light leading-relaxed">
              Direito de Família, Sucessões, Inventários e Proteção Patrimonial. Atendimento presencial e online em todo o Brasil.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[11px] text-neutral-200 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atendimento Presencial & Online em Todo o Brasil</span>
          </div>

          {/* Social Quick-Access Icons Bar */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all border border-white/10"
              title={`Instagram ${INSTAGRAM_HANDLE}`}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={TIKTOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`TikTok ${TIKTOK_HANDLE}`}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all border border-white/10"
              title={`TikTok ${TIKTOK_HANDLE}`}
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook ${FACEBOOK_NAME}`}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all border border-white/10"
              title="Facebook Oficial"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0B0F17] flex items-center justify-center transition-all border border-white/10"
              title="Google Maps"
            >
              <GoogleMapsPinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Action Link Tree */}
        <div className="space-y-3">
          {/* Main Priority: WhatsApp Consultation */}
          <a
            href={getWhatsAppUrl(`Olá, ${currentLawyer}! Encontrei seu contato pelo Link da Bio e gostaria de agendar uma consulta com a ${currentFirm}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] hover:brightness-110 text-[#0B0F17] text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all shadow-xl active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0B0F17]/15 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#0B0F17]" />
              </div>
              <div className="text-left">
                <span className="block font-bold">Falar no WhatsApp Oficial</span>
                <span className="text-[11px] text-[#0B0F17]/80 font-normal">Atendimento e triagem sigilosa</span>
              </div>
            </div>
            <span className="text-[#0B0F17]">→</span>
          </a>

          {/* VCard Download */}
          <button
            onClick={() => downloadVCard()}
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <Download className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Salvar Contato no Celular (vCard)</span>
                <span className="text-[11px] text-neutral-400">Adicione à sua agenda de contatos</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </button>

          {/* Social Links */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Instagram Oficial</span>
                <span className="text-[11px] text-neutral-400">{INSTAGRAM_HANDLE}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          <a
            href={TIKTOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <TikTokIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">TikTok Oficial</span>
                <span className="text-[11px] text-neutral-400">{TIKTOK_HANDLE}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <FacebookIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Página Oficial no Facebook</span>
                <span className="text-[11px] text-neutral-400">{FACEBOOK_NAME}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          {/* Serviços em Destaque */}
          <button
            onClick={() => onNavigate('/pensao-alimenticia')}
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-[#C5A059]/40 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <Coins className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold text-[#F4EDE0]">Pensão Alimentícia & Execução</span>
                <span className="text-[11px] text-[#C5A059]">Fixação urgente, cobrança e revisão</span>
              </div>
            </div>
            <span className="text-[#C5A059] text-xs">→</span>
          </button>

          <button
            onClick={() => onNavigate('/servicos/divorcio-e-partilha')}
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <Scale className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Divórcio & Partilha de Bens</span>
                <span className="text-[11px] text-neutral-400">Consensual em cartório ou contencioso</span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs">→</span>
          </button>

          <button
            onClick={() => onNavigate('/servicos/inventario-e-sucessoes')}
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Inventário & Herança</span>
                <span className="text-[11px] text-neutral-400">Processo rápido em cartório ou judicial</span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs">→</span>
          </button>

          {/* Localização no Google Maps */}
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#111827] hover:bg-[#1f2937] border border-neutral-700 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <GoogleMapsPinIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Localização no Google Maps</span>
                <span className="text-[11px] text-neutral-400">{OFFICE_ADDRESS}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          {/* Site Completo */}
          <button
            onClick={() => onNavigate('/')}
            className="w-full p-3.5 rounded-xl bg-[#C5A059] text-[#0B0F17] hover:bg-[#d4af37] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
          >
            <Globe className="w-4 h-4 text-[#0B0F17]" />
            <span>Acessar Site Institucional Completo</span>
          </button>
        </div>

        {/* Contact info info-strip */}
        <div className="text-center text-xs text-neutral-400 pt-2 space-y-1">
          <p>Telefone: {WHATSAPP_PHONE_DISPLAY}</p>
          <p>Atendimento Presencial com Agendamento e Online para todo o Brasil</p>
          <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-neutral-400">
            <button onClick={() => onNavigate('/privacidade')} className="hover:text-[#C5A059] transition-colors">
              Privacidade (LGPD)
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('/termos')} className="hover:text-[#C5A059] transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Mandatory Signature */}
      <div className="text-center text-xs text-neutral-400 pt-8 mt-6 border-t border-neutral-800 max-w-md mx-auto w-full">
        <p className="text-[11px]">
          © {new Date().getFullYear()} {currentFirm} · {currentLawyer}. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};
