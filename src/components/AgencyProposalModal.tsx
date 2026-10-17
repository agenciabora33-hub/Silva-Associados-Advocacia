import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  BriefcaseBusiness,
  Building,
  User,
  Phone,
  MapPin
} from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const AgencyProposalModal: React.FC = () => {
  const { 
    isProposalModalOpen, 
    setIsProposalModalOpen, 
    lawyerName, 
    firmName, 
    city, 
    themeColor,
    agencyPhone,
    agencyEmail,
    getAgencyWhatsAppUrl 
  } = useDemo();

  const [customLawyer, setCustomLawyer] = useState(lawyerName);
  const [customPhone, setCustomPhone] = useState('');
  const [customArea, setCustomArea] = useState('Direito de Família & Sucessões');
  const [customCity, setCustomCity] = useState(city);

  if (!isProposalModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, Agência Bora33! Acessei o site de demonstração jurídica e gostaria de uma proposta para meu escritório:\n\n` +
      `• *Advogado(a):* ${customLawyer || lawyerName}\n` +
      `• *Cidade / Comarca:* ${customCity || city}\n` +
      `• *Áreas de Atuação:* ${customArea}\n` +
      `• *Telefone:* ${customPhone || 'Não informado'}\n` +
      `• *Paleta escolhida no demo:* ${themeColor.toUpperCase()}\n\n` +
      `Gostaria de saber valores, prazos e condições de implementação exclusiva.`;

    const url = getAgencyWhatsAppUrl(message);
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
    setIsProposalModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B0F17] text-white rounded-xl border border-[#C5A059]/50 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Banner */}
        <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] p-6 sm:p-8 border-b border-[#C5A059]/30 relative">
          <div className="absolute right-0 top-0 w-60 h-60 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={() => setIsProposalModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Agência Bora33 · Exclusivo para Escritórios de Advocacia</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
            Solicite este Projeto Customizado para o seu Escritório
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-light leading-relaxed">
            Tenha um ecossistema com design de alto valor percebido, triagem interativa de clientes e conformidade ética OAB entregue pronto para atuar em até 10 dias úteis.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Deliverables Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Identidade visual e logotipo adaptados às suas cores</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Redação jurídica personalizada para suas especialidades</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Simulador de triagem e calculadora interativa</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>SEO Local para sua comarca no Google e Maps</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Hospedagem em nuvem de alta velocidade e SSL</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>100% de conformidade com o Provimento 205 OAB</span>
            </div>
          </div>

          {/* Quick Intake Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-neutral-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Seu Nome / Titulação</span>
                </label>
                <input
                  type="text"
                  required
                  value={customLawyer}
                  onChange={(e) => setCustomLawyer(e.target.value)}
                  placeholder="Ex: Dra. Mariana Costa ou Dr. Carlos"
                  className="w-full bg-[#161F2E] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Cidade / Comarca de Atuação</span>
                </label>
                <input
                  type="text"
                  required
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  placeholder="Ex: São Paulo - SP ou Salvador - BA"
                  className="w-full bg-[#161F2E] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <BriefcaseBusiness className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Área(s) de Atuação Principal</span>
                </label>
                <input
                  type="text"
                  value={customArea}
                  onChange={(e) => setCustomArea(e.target.value)}
                  placeholder="Ex: Família, Empresarial, Tributário, etc."
                  className="w-full bg-[#161F2E] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>WhatsApp de Contato</span>
                </label>
                <input
                  type="tel"
                  value={customPhone}
                  onChange={(e) => setCustomPhone(e.target.value)}
                  placeholder="(DDD) 99999-9999"
                  className="w-full bg-[#161F2E] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#111827] text-xs font-bold uppercase tracking-wider rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#111827]" />
                <span>Conversar no WhatsApp com o Estrategista</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${agencyEmail}?subject=Interesse%20no%20Site%20Jur%C3%ADdico%20Premium%20-%20Ag%C3%AAncia%20Bora33&body=Ol%C3%A1%20Bora33%2C%20tenho%20interesse%20em%20uma%20proposta%20para%20o%20meu%20escrit%C3%B3rio.`}
                className="py-3 px-4 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Enviar E-mail</span>
              </a>
            </div>

            <p className="text-[11px] text-neutral-500 text-center pt-2">
              Atendimento exclusivo para advogados e sociedades de advogados devidamente inscritos na OAB.
            </p>
          </form>

        </div>

      </div>
    </div>
  );
};
