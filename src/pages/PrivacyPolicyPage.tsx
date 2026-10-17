import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { OFFICE_ADDRESS, EMAIL_CONTACT, WHATSAPP_PHONE_DISPLAY, LAWYER_NAME, FIRM_NAME } from '../utils/whatsapp';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#070A0F] py-16 lg:py-24 text-neutral-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-400 mb-6">
          <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
            Início
          </button>
          <span>/</span>
          <span className="text-[#C5A059] font-semibold">Política de Privacidade</span>
        </div>

        {/* Header */}
        <div className="bg-[#111827] p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Conformidade com a LGPD (Lei nº 13.709/2018) & Diretrizes Éticas OAB</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="mt-3 text-sm text-neutral-300 font-light leading-relaxed">
            A <strong>{FIRM_NAME}</strong>, sob a condução de <strong>{LAWYER_NAME}</strong>, preza pelo mais elevado padrão de ética, sigilo profissional e transparência no tratamento de dados pessoais de clientes e visitantes em todo o Brasil.
          </p>
          <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-wrap gap-4 text-xs text-neutral-400">
            <span>Última atualização: Outubro de 2026</span>
            <span>·</span>
            <span>Controlador: {FIRM_NAME}</span>
            <span>·</span>
            <span>Atendimento Presencial e Online em Todo o Brasil</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-[#111827] p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl space-y-8 text-sm leading-relaxed text-neutral-300">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#C5A059]" />
              <span>1. Sigilo Profissional da Advocacia & Controlador dos Dados</span>
            </h2>
            <p>
              O escritório <strong>{FIRM_NAME}</strong>, com sede em {OFFICE_ADDRESS}, atua sob as prerrogativas inegociáveis do <em>Estatuto da Advocacia e da OAB (Lei Federal nº 8.906/1994)</em>. Todas as comunicações, dados e documentos compartilhados por clientes — seja no atendimento presencial ou online para todo o Brasil — são resguardados pelo sigilo profissional inviolável garantido por lei.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C5A059]" />
              <span>2. Dados Coletados e Finalidade</span>
            </h2>
            <p>
              Coletamos apenas as informações estritamente necessárias para a prestação do atendimento jurídico preliminar, incluindo:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-neutral-400">
              <li><strong>Dados de Identificação:</strong> Nome completo, telefone/WhatsApp e endereço de e-mail informados voluntariamente em formulários de contato.</li>
              <li><strong>Dados do Caso:</strong> Descrição preliminar de demandas de família, divórcio, partilha, inventário ou alimentos fornecidas para triagem confidencial.</li>
              <li><strong>Dados de Navegação:</strong> Informações técnicas anônimas (endereço IP aproximado, tipo de dispositivo e páginas acessadas) para fins de métricas de desempenho e conformidade de campanhas digitais.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <span>3. Direitos do Titular (LGPD) e Contato</span>
            </h2>
            <p>
              Você possui direito de confirmação da existência de tratamento, acesso, correção de dados incompletos ou eliminação de dados pessoais desnecessários. Para exercer esses direitos, contate nossa banca pelo e-mail oficial: <a href={`mailto:${EMAIL_CONTACT}`} className="text-[#C5A059] hover:underline font-mono">{EMAIL_CONTACT}</a> ou pelo telefone <span className="font-mono">{WHATSAPP_PHONE_DISPLAY}</span>.
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
              {FIRM_NAME} · LGPD Compliance
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
