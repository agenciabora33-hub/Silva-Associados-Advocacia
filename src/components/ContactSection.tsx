import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Navigation,
  Scale
} from 'lucide-react';
import { 
  getWhatsAppUrl, 
  WHATSAPP_PHONE_DISPLAY, 
  WHATSAPP_PHONE,
  EMAIL_CONTACT, 
  OFFICE_ADDRESS, 
  GOOGLE_MAPS_LINK,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  TIKTOK_LINK,
  TIKTOK_HANDLE,
  FACEBOOK_LINK,
  LAWYER_NAME,
  FIRM_NAME
} from '../utils/whatsapp';
import { InstagramIcon, TikTokIcon, FacebookIcon } from './SocialIcons';
import { LeadSubmission } from '../types';
import { trackAdConversion } from '../utils/analytics';
import { useDemo } from '../context/DemoContext';

interface ContactSectionProps {
  onNavigate?: (path: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const { city } = useDemo();
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'Divórcio & Partilha',
    urgencia: 'proximos_dias' as 'imediata' | 'proximos_dias' | 'orientacao_preventiva',
    mensagem: '',
    cidade: city || 'São Paulo e todo o Brasil'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const urgenciaFormatada =
      formData.urgencia === 'imediata'
        ? 'Urgência Imediata (Liminar / Prazo)'
        : formData.urgencia === 'proximos_dias'
        ? 'Atendimento nos Próximos Dias'
        : 'Orientação Preventiva';

    const text = `*SOLICITAÇÃO DE CONSULTA CONFIDENCIAL*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email || 'Não informado'}\n` +
      `*Localidade:* ${formData.cidade}\n` +
      `*Área de Interesse:* ${formData.assunto}\n` +
      `*Nível de Urgência:* ${urgenciaFormatada}\n` +
      (formData.mensagem ? `*Breve Resumo:* ${formData.mensagem}\n` : '') +
      `\n_Enviado pelo formulário de triagem online do site ${FIRM_NAME}._`;

    trackAdConversion('Lead', {
      category: formData.assunto,
      urgency: formData.urgencia,
      city: formData.cidade
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(getWhatsAppUrl(text), '_blank');
    }, 600);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0B0F17] border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
            <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Agendamento & Triagem Confidencial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight text-balance">
            Atendimento Presencial e Online para todo o Brasil.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Preencha os dados abaixo para uma triagem preliminar com {LAWYER_NAME}. Atendemos com reuniões reservadas em nosso escritório físico e por videoconferência criptografada em qualquer localidade do país.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form in Dark Luxe */}
          <div className="lg:col-span-7 bg-[#111827] p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Solicitação Encaminhada com Sucesso!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Os dados foram preparados para envio direto à {LAWYER_NAME} no WhatsApp. Nossa banca retornará com a máxima discrição.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: '',
                        telefone: '',
                        email: '',
                        assunto: 'Divórcio & Partilha',
                        urgencia: 'proximos_dias',
                        mensagem: '',
                        cidade: city || 'São Paulo e todo o Brasil'
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-neutral-300 bg-[#1f2937] border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-bold text-[#0B0F17] bg-[#C5A059] rounded-lg hover:bg-[#d4af37] transition-colors"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(99) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                      E-mail para Contato
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                      Cidade / Estado
                    </label>
                    <input
                      type="text"
                      placeholder="Sua cidade / Estado"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                      Área de Interesse *
                    </label>
                    <select
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    >
                      <option value="Divórcio & Partilha">Divórcio & Partilha de Bens</option>
                      <option value="Inventário em Cartório / Judicial">Inventário em Cartório / Judicial</option>
                      <option value="Planejamento Sucessório">Planejamento Sucessório & Doações</option>
                      <option value="Guarda e Convivência">Guarda & Regime de Convivência</option>
                      <option value="Direitos TEA & Liminar de Saúde">Direitos TEA (Autismo) & Cobertura de Saúde</option>
                      <option value="Pensão Alimentícia">Fixação ou Cobrança de Pensão Alimentícia</option>
                      <option value="Outro Assunto">Outro Assunto Jurídico</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                      Nível de Urgência
                    </label>
                    <select
                      value={formData.urgencia}
                      onChange={(e) => setFormData({ ...formData, urgencia: e.target.value as any })}
                      className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    >
                      <option value="imediata">Urgência Imediata (Liminar / Prazo Judicial)</option>
                      <option value="proximos_dias">Atendimento nos Próximos Dias</option>
                      <option value="orientacao_preventiva">Orientação Preventiva / Planejamento</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-300 tracking-wider mb-1.5">
                    Resumo do Caso (Confidencial)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente o que aconteceu ou qual é o seu objetivo..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0B0F17] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Processando envio seguro...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0B0F17]" />
                        <span>Solicitar Triagem Confidencial via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-neutral-400 pt-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>Seus dados são protegidos por sigilo profissional da OAB e LGPD.</span>
                  </div>
                  {onNavigate ? (
                    <button
                      type="button"
                      onClick={() => onNavigate('/privacidade')}
                      className="text-[#C5A059] hover:underline font-medium text-left cursor-pointer"
                    >
                      Política de Privacidade
                    </button>
                  ) : (
                    <a href="/privacidade" className="text-[#C5A059] hover:underline font-medium">
                      Política de Privacidade
                    </a>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Right Column: NAP & Local Location in Dark Luxe */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-white">
                Sede Central & Atendimento Nacional
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                Atendimento presencial com agendamento prévio e atendimento online seguro para clientes em qualquer região do Brasil através de plataforma criptografada.
              </p>
            </div>

            <div className="space-y-4 bg-[#111827] p-6 rounded-2xl border border-neutral-800 shadow-xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-200 tracking-wider">
                    Endereço Oficial:
                  </h4>
                  <p className="text-sm text-neutral-300 mt-0.5">
                    {OFFICE_ADDRESS}
                  </p>
                  <p className="text-xs text-[#C5A059] mt-0.5">
                    {FIRM_NAME} · Atendimento Presencial & Online
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-200 tracking-wider">
                    Telefone & WhatsApp:
                  </h4>
                  <a
                    href={`tel:+${WHATSAPP_PHONE}`}
                    className="text-sm font-mono font-medium text-white hover:text-[#C5A059] transition-colors"
                  >
                    {WHATSAPP_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-200 tracking-wider">
                    E-mail Institucional:
                  </h4>
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="text-sm text-neutral-300 hover:text-[#C5A059] transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-200 tracking-wider">
                    Horário de Atendimento:
                  </h4>
                  <p className="text-sm text-neutral-300 mt-0.5">
                    Segunda a Sexta-feira: 08:30 às 18:30
                  </p>
                  <p className="text-xs text-neutral-400">
                    Reuniões presenciais e por videoconferência com horário reservado
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Route Card */}
            <div className="bg-[#0B0F17] text-white p-6 rounded-2xl border border-[#C5A059]/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-white">
                    Localização & Rota no Google Maps
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Navegue com GPS direto até o escritório
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#161F2E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C5A059] hover:bg-[#d4af37] text-[#0B0F17] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow"
              >
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>

            {/* Redes Sociais Oficiais */}
            <div className="p-5 bg-[#111827] rounded-2xl border border-neutral-800 space-y-3 shadow-xl">
              <h4 className="text-xs uppercase font-semibold text-neutral-200 tracking-wider">
                Acompanhe nas Redes Sociais:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-800 hover:border-[#C5A059] hover:bg-[#0B0F17] text-neutral-200 font-medium transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>

                <a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-800 hover:border-[#C5A059] hover:bg-[#0B0F17] text-neutral-200 font-medium transition-colors"
                >
                  <TikTokIcon className="w-4 h-4 text-[#C5A059]" />
                  <span>{TIKTOK_HANDLE}</span>
                </a>

                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-800 hover:border-[#C5A059] hover:bg-[#0B0F17] text-neutral-200 font-medium transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-[#C5A059]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
