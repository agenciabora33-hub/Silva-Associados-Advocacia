import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Search, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calculator, 
  Layers, 
  Award, 
  Clock, 
  Check, 
  BriefcaseBusiness,
  Building2,
  Users2,
  Lock,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { useDemo, THEMES } from '../context/DemoContext';

interface ForLawyersPageProps {
  onNavigate: (path: string) => void;
}

export const ForLawyersPage: React.FC<ForLawyersPageProps> = ({ onNavigate }) => {
  const { 
    lawyerName, 
    firmName, 
    city, 
    themeColor,
    setThemeColor,
    setIsProposalModalOpen,
    setIsAuditModalOpen,
    getAgencyWhatsAppUrl,
    agencyEmail 
  } = useDemo();

  // ROI Calculator State
  const [ticketMedio, setTicketMedio] = useState<number>(5000);
  const [consultasNovas, setConsultasNovas] = useState<number>(3);
  const [taxaFechamento, setTaxaFechamento] = useState<number>(40);

  const novosClientesMes = Math.max(1, Math.round((consultasNovas * 4 * (taxaFechamento / 100))));
  const faturamentoMensalExtra = novosClientesMes * ticketMedio;
  const faturamentoAnualExtra = faturamentoMensalExtra * 12;

  useEffect(() => {
    document.title = "Ecossistema Digital de Alta Conversão para Advogados | Agência Bora33";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Breadcrumb & Agency Badge */}
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-medium mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
              Voltar ao Site Modelo
            </button>
            <span>/</span>
            <span className="text-[#D4AF37] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Apresentação Técnica & Comercial para Advogados
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#D4AF37] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Solução Chave na Mão · Agência Bora33</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
                A presença digital que transforma visitantes em <span className="text-[#D4AF37]">clientes qualificados</span> para o seu escritório.
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-3xl">
                87% dos sites de advocacia são lentos, genéricos e não geram contatos reais. Construímos uma <strong>máquina de autoridade digital</strong> que combina design editorial sofisticado, triagem inteligente de casos e blindagem ética com o <strong>Provimento 205/2021 da OAB</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsProposalModalOpen(true)}
                  className="px-7 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#111827] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-[#111827]" />
                  <span>Quero Este Projeto no Meu Escritório</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 text-neutral-200 border border-neutral-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Ver Raio-X Técnico (Score 99)</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>100% Ética OAB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Entrega em até 10 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Customização Total de Especialidades</span>
                </div>
              </div>

            </div>

            {/* Right Card: Quick Demonstration Stats */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-[#111827] border border-[#C5A059]/30 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Resumo do Ecossistema
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-800/60">
                    <span className="text-neutral-400">Tempo de Carregamento</span>
                    <span className="font-mono font-bold text-emerald-400">0.6s (Instantâneo)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-800/60">
                    <span className="text-neutral-400">Conformidade OAB</span>
                    <span className="font-semibold text-white">Provimento 205/2021</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-800/60">
                    <span className="text-neutral-400">Triagem de Clientes</span>
                    <span className="font-semibold text-sky-400">Calculadora & Rito</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-800/60">
                    <span className="text-neutral-400">SEO Local</span>
                    <span className="font-semibold text-purple-400">JSON-LD LegalService</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-neutral-400">Rastreamento de Tráfego</span>
                    <span className="font-semibold text-[#D4AF37]">Google Ads & Meta</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('/')}
                  className="w-full py-2.5 text-xs font-semibold text-center bg-white/5 hover:bg-white/10 text-neutral-200 border border-neutral-700 rounded transition-colors"
                >
                  Navegar no Site Modelo Demo
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Comparison: Site Comum vs Nosso Ecossistema */}
      <section className="py-20 lg:py-28 bg-[#0F172A] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
              Comparativo de Mercado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mt-2">
              Por que a maioria dos sites de advogados falha em gerar clientes?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
              Veja a diferença entre um template comum de mercado e um ecossistema projetado sob a ótica da alta conversão e autoridade jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Common WordPress site */}
            <div className="p-8 rounded-xl bg-[#1E293B]/60 border border-red-500/30 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Sites Comuns (WordPress / Modelos Prontos)</h3>
                  <span className="text-xs text-red-400">Baixa conversão e risco ético</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Lentidão excessiva:</strong> demoram de 6 a 12 segundos para abrir no celular, perdendo mais de 50% dos cliques de anúncios pagos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Design genérico de template:</strong> fotos clichês de martelo de juiz e estátuas da justiça que transmitem impressão amadora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Formulários estáticos e frios:</strong> o cliente precisa preencher campos burocráticos e esperar dias por resposta.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Vulnerabilidade de segurança:</strong> dezenas de plugins desatualizados sujeitos a invasões e quebras constantes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Risco com a OAB:</strong> textos agressivos com promessas de resultado que atraem advertências da Seccional.</span>
                </li>
              </ul>
            </div>

            {/* Our Premium System */}
            <div className="p-8 rounded-xl bg-[#111827] border border-[#C5A059]/60 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center text-[#D4AF37]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Ecossistema Agência Bora33</h3>
                  <span className="text-xs text-[#D4AF37] font-semibold">Engenharia de Alta Conversão</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Abertura em 0.6 segundo:</strong> navegação instantânea em SPA (React), retendo praticamente 100% dos visitantes do Google e Meta Ads.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Design editorial de alto luxo:</strong> tipografia serifada nobre que justifica a cobrança de honorários de alto padrão.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Triagem interativa de casos:</strong> o cliente descobre o seu rito e chega ao seu WhatsApp com dados pré-qualificados.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>SEO Local com Schema LegalService:</strong> seu escritório indexado com autoridade na comarca no Google e Maps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% de conformidade ética OAB:</strong> conteúdo estritamente informativo sem mercantilização ou autopromoção desmedida.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive ROI Calculator for Lawyers */}
      <section className="py-20 lg:py-28 bg-[#0B0F17] border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0D131F] border border-[#C5A059]/40 shadow-2xl">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Simulador de Impacto Financeiro para o Escritório
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                  Quanto um site com taxa de conversão profissional gera ao ano?
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block">Potencial Anual de Honorários</span>
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D4AF37]">
                  R$ {faturamentoAnualExtra.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <div className="flex justify-between text-xs font-medium text-neutral-300 mb-2">
                    <span>Ticket Médio de Honorários do Escritório:</span>
                    <span className="font-mono text-[#D4AF37] font-bold">R$ {ticketMedio.toLocaleString('pt-BR')}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="20000"
                    step="500"
                    value={ticketMedio}
                    onChange={(e) => setTicketMedio(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                    <span>R$ 2.000</span>
                    <span>R$ 10.000</span>
                    <span>R$ 20.000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-neutral-300 mb-2">
                    <span>Consultas Qualificadas Adicionais por Semana:</span>
                    <span className="font-mono text-[#D4AF37] font-bold">{consultasNovas} por semana ({consultasNovas * 4}/mês)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={consultasNovas}
                    onChange={(e) => setConsultasNovas(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-neutral-300 mb-2">
                    <span>Taxa de Fechamento em Consulta:</span>
                    <span className="font-mono text-[#D4AF37] font-bold">{taxaFechamento}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="70"
                    step="5"
                    value={taxaFechamento}
                    onChange={(e) => setTaxaFechamento(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                </div>

              </div>

              {/* Result Summary Card */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-[#0B0F17] border border-neutral-800 space-y-4">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider block">Estimativa Mensal Extra</span>
                  <span className="text-3xl font-mono font-extrabold text-emerald-400 mt-1 block">
                    + R$ {faturamentoMensalExtra.toLocaleString('pt-BR')} / mês
                  </span>
                  <span className="text-xs text-neutral-400 mt-2 block">
                    Com base em <strong>{novosClientesMes} novos contratos</strong> fechados mensalmente.
                  </span>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>O investimento no site se paga com o primeiro cliente fechado.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ativo digital definitivo que valoriza a marca do escritório.</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsProposalModalOpen(true)}
                  className="w-full py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#111827] text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                >
                  Solicitar Proposta para Meu Escritório
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Deliverables: O que está incluso */}
      <section className="py-20 lg:py-28 bg-[#0F172A] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
              Escopo Completo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mt-2">
              O que você recebe ao contratar o projeto com a Agência Bora33
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
              Entregamos um ecossistema pronto para operar, sem necessidade de conhecimento técnico da sua equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-xl bg-[#1E293B]/70 border border-neutral-700/80 space-y-3">
              <div className="w-10 h-10 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">1. Design Editorial Exclusivo</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Adaptação visual completa com a paleta de cores do seu escritório, logotipo, fotos da sua equipe e acabamento visual de alto padrão.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1E293B]/70 border border-neutral-700/80 space-y-3">
              <div className="w-10 h-10 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">2. Redação Jurídica & Copywriting</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Textos especializados escritos para as áreas exatas que seu escritório atua (Família, Sucessões, Cível, Empresarial, Tributário, etc.).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1E293B]/70 border border-neutral-700/80 space-y-3">
              <div className="w-10 h-10 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">3. Ferramentas Interativas</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Simulador de triagem jurídica e calculadora para envolver o visitante e encaminhar contatos com dados essenciais já levantados.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1E293B]/70 border border-neutral-700/80 space-y-3">
              <div className="w-10 h-10 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">4. Otimização SEO Local & Maps</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Configuração de metadados geográficos da sua comarca e Schema.org LegalService para que o Google entenda sua autoridade regional.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1E293B]/70 border border-neutral-700/80 space-y-3">
              <div className="w-10 h-10 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">5. Hospedagem Turbo & Domínio</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Configuração do domínio próprio (.adv.br ou .com.br), certificado de segurança SSL e servidor de borda ultrarrápido sem quedas.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1E293B]/70 border border-neutral-700/80 space-y-3">
              <div className="w-10 h-10 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">6. LGPD e OAB Compliance</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Termos de uso, política de privacidade e aviso de cookies já estruturados, protegendo seu escritório contra multas e questionamentos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ for Lawyers */}
      <section className="py-20 lg:py-28 bg-[#0B0F17] border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white mt-2">
              Perguntas comuns de advogados e sócios de escritórios
            </h2>
          </div>

          <div className="space-y-4">
            
            <div className="p-6 rounded-xl bg-[#111827] border border-neutral-800 space-y-2">
              <h4 className="font-serif text-lg font-bold text-white">
                1. O site está 100% de acordo com o Código de Ética e o Provimento 205/2021 da OAB?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Sim, absolutamente. Todas as estruturas de copy e design foram desenvolvidas observando o caráter <strong>meramente informativo, educativo e sóbrio</strong> exigido pelo CFOAB. Não há mercantilização, promessas milagrosas de ganho de causa ou captação agressiva. O cliente busca o escritório por convicção técnica.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-neutral-800 space-y-2">
              <h4 className="font-serif text-lg font-bold text-white">
                2. Meu escritório atua em outras áreas além de Família (ex: Trabalhista, Cível, Empresarial). Vocês adaptam?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Sim! Este site é um modelo de alta performance demonstrando a estrutura. No momento da contratação, personalizamos 100% das áreas de atuação, criando páginas dedicadas para as especialidades que seu escritório mais deseja expandir.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-neutral-800 space-y-2">
              <h4 className="font-serif text-lg font-bold text-white">
                3. Qual é o prazo de entrega do projeto para o meu escritório?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                O prazo médio de entrega com todos os textos revisados, fotos inseridas, domínio configurado e testes de velocidade aprovados é de <strong>7 a 10 dias úteis</strong> após a entrega das informações do escritório.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-neutral-800 space-y-2">
              <h4 className="font-serif text-lg font-bold text-white">
                4. Como funciona o suporte e as atualizações?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                A Agência Bora33 oferece suporte contínuo para atualizações de fotos, novos artigos, adição de novas áreas e monitoramento de desempenho e segurança do servidor em nuvem.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            Transforme Sua Presença Digital
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white text-balance">
            Pronto para colocar o seu escritório no topo do mercado jurídico?
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Converse diretamente com o estrategista da Agência Bora33 e receba uma demonstração personalizada para a sua comarca e especialidades.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsProposalModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#111827] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-2xl transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-[#111827]" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/')}
              className="px-6 py-4 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-neutral-700 text-xs sm:text-sm font-medium rounded-lg transition-colors"
            >
              Explorar Navegação no Site Modelo
            </button>
          </div>

          <div className="pt-6 text-xs text-neutral-500">
            <span>Desenvolvido com excelência por </span>
            <strong className="text-neutral-400">Agência Bora33</strong>
            <span> · Todos os direitos reservados.</span>
          </div>

        </div>
      </section>

    </div>
  );
};
