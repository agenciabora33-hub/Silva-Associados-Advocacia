import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Coins, 
  Check, 
  AlertTriangle, 
  FileCheck, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  MapPin, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { 
  getWhatsAppUrl, 
  WHATSAPP_PHONE_DISPLAY, 
  WHATSAPP_PHONE,
  OFFICE_ADDRESS,
  LAWYER_NAME,
  FIRM_NAME 
} from '../utils/whatsapp';
import { trackAdConversion } from '../utils/analytics';
import pensaoHeroImg from '../assets/images/pensao_alimenticia_apoio_1791579205311.jpg';
import { useDemo } from '../context/DemoContext';

interface PensaoAlimenticiaPageProps {
  onNavigate: (path: string) => void;
}

export const PensaoAlimenticiaPage: React.FC<PensaoAlimenticiaPageProps> = ({ onNavigate }) => {
  const { lawyerName, firmName } = useDemo();
  const currentLawyer = lawyerName || LAWYER_NAME;
  const currentFirm = firmName || FIRM_NAME;

  // Simulator state
  const [goal, setGoal] = useState<'fixar' | 'cobrar' | 'revisar' | 'exonerar'>('fixar');
  const [workStatus, setWorkStatus] = useState<'clt' | 'autonomo' | 'desempregado'>('clt');
  const [numChildren, setNumChildren] = useState<number>(1);

  // Local SEO Meta tags
  useEffect(() => {
    document.title = `Pensão Alimentícia | ${currentFirm} · ${currentLawyer}`;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `Advocacia especializada em Pensão Alimentícia com ${currentLawyer} da ${currentFirm}. Fixação de alimentos provisórios, cobrança sob rito de prisão (art. 528 CPC), ação revisional e exoneração.`
      );
    }
  }, [currentLawyer, currentFirm]);

  const getSimulatorResult = () => {
    switch (goal) {
      case 'fixar':
        return {
          title: 'Ação de Alimentos com Pedido de Liminar Provisória',
          subtitle: 'Urgência na garantia do sustento antes mesmo da primeira audiência.',
          description:
            workStatus === 'clt'
              ? 'Para alimentante com vínculo formal (CLT ou servidor público), a petição inicial solicita desconto direto em folha de pagamento sobre rendimentos líquidos, 13º e férias, trazendo pontualidade absoluta sem risco de inadimplência.'
              : workStatus === 'autonomo'
              ? 'Para alimentante autônomo, empresário ou profissional liberal, solicitamos fixação em percentual do salário mínimo ou investigação de faturamento bancário e sinais exteriores de riqueza.'
              : 'Mesmo para o genitor desempregado, a lei exige a contribuição mínima fixada sobre percentual do salário mínimo nacional, já que a necessidade básica do filho não cessa.',
          urgency: 'Alta Prioridade',
          cpcRef: 'Artigo 4º da Lei 5.478/1968 (Alimentos Provisórios)',
          recommendedAction: 'Reunir certidão de nascimento e planilha de custos da criança para ingresso imediato com pedido liminar na Vara de Família.'
        };
      case 'cobrar':
        return {
          title: 'Execução de Alimentos (Rito de Prisão ou Penhora)',
          subtitle: 'Cobrança coercitiva imediata das parcelas atrasadas com suporte legal rigoroso.',
          description:
            'A lei processual civil (art. 528 CPC) prevê que as 3 últimas parcelas não pagas (mais as que vencerem no processo) autorizam a decretação de Prisão Civil em regime fechado (de 1 a 3 meses) se o devedor não pagar em 3 dias. Para débitos anteriores, executamos sob o rito de penhora de contas (SISBAJUD), veículos (RENAJUD), retenção de FGTS e suspensão de CNH e passaporte.',
          urgency: 'Urgência Extrema',
          cpcRef: 'Artigos 528 e 530 do Código de Processo Civil',
          recommendedAction: 'Apresentar a decisão/acordo anterior que fixou a pensão e os comprovantes dos meses não pagos para protocolar a execução imediata.'
        };
      case 'revisar':
        return {
          title: 'Ação Revisional de Alimentos',
          subtitle: 'Readequação dos valores quando houver alteração comprovada no binômio necessidade x possibilidade.',
          description:
            'Cabível tanto para quem recebe (quando o filho passa a ter novas despesas com saúde, colégio ou terapias e o alimentante teve aumento salarial) quanto para quem paga (quando ocorreu redução involuntária de renda ou nascimento de novos dependentes comprovados documentalmente).',
          urgency: 'Regular / Estratégica',
          cpcRef: 'Artigo 1.699 do Código Civil',
          recommendedAction: 'Comprovar de forma contundente a mudança na situação econômico-financeira através de demonstrativos de renda e evolução das despesas.'
        };
      case 'exonerar':
        return {
          title: 'Ação de Exoneração de Alimentos',
          subtitle: 'Cessação formal da obrigação alimentar pela via judicial adequada.',
          description:
            'A maioridade civil (18 anos) NÃO extingue automaticamente a obrigação alimentar. De acordo com a Súmula 358 do STJ, parar de pagar por conta própria gera execução e risco de prisão. É indispensável ajuizar Ação de Exoneração demonstrando que o filho possui capacidade própria de sustento ou não estuda.',
          urgency: 'Preventiva / Decisória',
          cpcRef: 'Súmula 358 do STJ e Artigo 1.635 do Código Civil',
          recommendedAction: 'Ingressar com a ação antes de suspender os depósitos para garantir segurança jurídica e evitar execuções surpresa.'
        };
    }
  };

  const simResult = getSimulatorResult();

  const handleSimWhatsApp = () => {
    trackAdConversion('Contact', { type: 'pensao_simulator_whatsapp' });
    const goalText = 
      goal === 'fixar' ? 'Fixação de pensão alimentícia' :
      goal === 'cobrar' ? 'Cobrança de pensão em atraso (execução)' :
      goal === 'revisar' ? 'Revisão de pensão alimentícia' : 'Exoneração de pensão';
    const msg = `Olá, ${currentLawyer}! Fiz a simulação no site da ${currentFirm} sobre *${goalText}* (Filhos: ${numChildren}). Gostaria de agendar orientação jurídica especializada.`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-[#070A0F] text-white min-h-screen">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#0B0F17] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-400">
            <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
              Início
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/servicos')} className="hover:text-[#C5A059] transition-colors">
              Áreas de Atuação
            </button>
            <span>/</span>
            <span className="text-[#C5A059] font-semibold">Pensão Alimentícia</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#0B0F17] text-white py-16 sm:py-24 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={pensaoHeroImg}
            alt={`Pensão Alimentícia - ${currentFirm}`}
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-[#070A0F]/90 to-[#070A0F]/70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Atuação Especializada em Alimentos · {currentFirm}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] text-balance">
                Pensão alimentícia justa, célere e protegida pela lei.
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                O sustento dos seus filhos não pode esperar. A <strong>{currentFirm}</strong> atua com firmeza implacável e sensibilidade na <strong>fixação imediata de alimentos provisórios</strong>, <strong>cobrança sob rito de prisão civil</strong> e <strong>revisão judicial</strong>.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl(`Olá, ${currentLawyer}! Gostaria de consultar sobre Pensão Alimentícia com a ${currentFirm}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-xl whitespace-nowrap text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#0B0F17]" />
                  <span>Falar com {currentLawyer} no WhatsApp</span>
                </a>

                <a
                  href="#simulador-pensao"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#111827] hover:bg-[#1E293B] text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-lg border border-neutral-700 transition-colors whitespace-nowrap text-center"
                >
                  <span>Simular Meu Caso</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#111827] p-8 rounded-2xl border border-[#C5A059]/30 shadow-2xl space-y-4">
              <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block">
                Garantia de Direitos Fundamentais
              </span>
              <h3 className="font-serif text-2xl font-semibold text-white">
                Por que você não deve adiar a formalização da pensão?
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                A inadimplência de pensão ou a ausência de fixação formal gera insegurança alimentar e sobrecarga emocional. Atuamos com pedidos de tutela de urgência para que os depósitos comecem de pronto.
              </p>

              <div className="space-y-3 pt-2 text-xs text-neutral-300">
                <div className="p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Está com parcelas em atraso?</span>
                    <span>A partir de 1 mês de inadimplência já é possível cobrar sob pena de prisão civil do alimentante.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Nunca foi à Justiça?</span>
                    <span>Acordo de boca não tem validade de execução. Formalize para proteger o futuro da criança.</span>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Olá, ${currentLawyer}! Preciso de orientação urgente para fixar ou cobrar pensão alimentícia na ${currentFirm}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C5A059] hover:bg-[#d4af37] text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B0F17]" />
                <span>Consulta Reservada com a Advogada</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Specialized Fronts in Pensão */}
      <section className="py-20 bg-[#070A0F] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Áreas de Atuação em Alimentos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              As 4 Frentes Jurídicas para Solução Definitiva da Pensão
            </h2>
            <p className="mt-3 text-neutral-300 font-light text-base">
              Seja para iniciar a cobrança, recuperar meses em atraso ou ajustar o valor à realidade financeira, temos a estratégia processual exata para cada situação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Front 1: Fixação */}
            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-inner">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  01 · Início & Proteção Imediata
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Ação de Fixação de Alimentos (com Alimentos Provisórios)
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Destinada a quem nunca teve a pensão formalizada por sentença judicial ou cartório. Protocolamos a petição na Vara de Família com pedido de <strong>Alimentos Provisórios</strong> — decisão do juiz logo no início do processo que fixa o pagamento mensal antes mesmo da primeira audiência.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Desconto direto em folha de pagamento (CLT / Servidores)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Inclusão de percentual sobre 13º salário e terço de férias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Pensão gravídica para custear exames e pré-natal na gestação</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Front 2: Execução */}
            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center text-amber-400 shadow-inner">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  02 · Cobrança Coercitiva de Atrasados
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Execução de Pensão em Atraso (Rito de Prisão & Penhora)
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Quando o devedor não cumpre a obrigação já fixada pelo juiz. O Código de Processo Civil (art. 528) prevê medidas contundentes. Cobramos os valores atrasados exigindo que o devedor pague em até 3 dias sob pena de <strong>Prisão Civil em regime fechado</strong>, penhora de contas bancárias (SISBAJUD) e bloqueio de veículos.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Prisão civil de 1 a 3 meses para os últimos 3 meses não pagos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Penhora de contas bancárias, veículos e saldo de FGTS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Possibilidade de bloqueio de CNH e retenção de passaporte</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Front 3: Revisional */}
            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-inner">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  03 · Readequação Financeira Justa
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Ação Revisional de Alimentos (Aumento ou Redução)
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  A pensão alimentícia nunca faz coisa julgada definitiva; ela varia com o tempo. Se o filho cresceu e tem gastos maiores (escola particular, saúde, terapias) ou se o alimentante teve aumento salarial, cabe <strong>Ação de Majoração</strong>. Em queda involuntária de renda, cabe adequação proporcional.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Aumento do valor por elevação das despesas escolares ou de saúde</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Readequação por desemprego comprovado ou novos dependentes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Front 4: Exoneração */}
            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-inner">
                  <FileCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  04 · Encerramento Seguro da Obrigação
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Ação de Exoneração de Alimentos (Maioridade)
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Atingir 18 anos NÃO cancela o desconto da pensão por conta própria (Súmula 358 do STJ). Quem simplesmente deixa de pagar comete crime de desobediência e pode ser preso por execução de alimentos! Ingressamos com a <strong>Ação de Exoneração</strong> para obter cancelamento judicial seguro.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Cancelamento formal de desconto em folha via ofício judicial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Blindagem contra cobranças retroativas e execuções indevidas</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Pensão Simulator */}
      <section id="simulador-pensao" className="py-20 bg-[#0B0F17] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Ferramenta Interativa de Orientação
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Simulador Jurídico de Pensão Alimentícia
            </h2>
            <p className="mt-3 text-sm text-neutral-300 font-light">
              Identifique em instantes qual é a medida legal aplicável para a sua situação de acordo com o Código de Processo Civil.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#111827] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
            
            <div className="p-6 sm:p-10 border-b border-neutral-800 space-y-8">
              
              {/* Question 1 */}
              <div>
                <label className="text-xs font-semibold text-neutral-200 uppercase tracking-wider block mb-3">
                  1. Qual é o seu objetivo principal hoje?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'fixar', label: 'Fixar pensão pela 1ª vez', desc: 'Filho sem pensão formalizada na justiça' },
                    { key: 'cobrar', label: 'Cobrar pensão em atraso', desc: 'Devedor não está pagando o valor fixado' },
                    { key: 'revisar', label: 'Revisar valor da pensão', desc: 'Aumentar ou diminuir por mudança financeira' },
                    { key: 'exonerar', label: 'Encerrar pensão (Exoneração)', desc: 'Filho completou 18+ anos com autonomia' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setGoal(item.key as any)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        goal === item.key
                          ? 'border-[#C5A059] bg-[#C5A059]/15 text-white ring-1 ring-[#C5A059]'
                          : 'border-neutral-800 hover:border-neutral-700 bg-[#0B0F17] text-neutral-300'
                      }`}
                    >
                      <div className="font-semibold text-sm text-white">{item.label}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-neutral-200 uppercase tracking-wider block mb-3">
                    2. Situação profissional do pagador
                  </label>
                  <select
                    value={workStatus}
                    onChange={(e) => setWorkStatus(e.target.value as any)}
                    className="w-full p-3.5 rounded-xl border border-neutral-700 bg-[#0B0F17] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="clt">Empregado formal CLT ou Servidor Público</option>
                    <option value="autonomo">Autônomo / Empresário / Renda Informal</option>
                    <option value="desempregado">Desempregado no momento</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-200 uppercase tracking-wider block mb-3">
                    3. Quantidade de filhos dependentes
                  </label>
                  <select
                    value={numChildren}
                    onChange={(e) => setNumChildren(Number(e.target.value))}
                    className="w-full p-3.5 rounded-xl border border-neutral-700 bg-[#0B0F17] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value={1}>1 filho dependente</option>
                    <option value={2}>2 filhos dependentes</option>
                    <option value={3}>3 ou mais filhos dependentes</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Diagnostic Outcome Box */}
            <div className="p-6 sm:p-10 bg-[#0B0F17] text-white space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059] block">
                    DIAGNÓSTICO JURÍDICO ESTIMADO
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-white mt-1">
                    {simResult.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold w-fit">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{simResult.urgency}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {simResult.description}
              </p>

              <div className="p-4 rounded-xl bg-[#111827] border border-neutral-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Base Legal: {simResult.cpcRef}</span>
                </div>
                <p className="text-neutral-300">
                  <strong className="text-white">Próximo Passo Estratégico:</strong> {simResult.recommendedAction}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={handleSimWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-xl text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#0B0F17]" />
                  <span>Enviar Diagnóstico para Análise de {currentLawyer}</span>
                </button>

                <button
                  onClick={() => onNavigate('/contato')}
                  className="px-6 py-4 bg-[#111827] hover:bg-[#1E293B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-neutral-700 transition-colors text-center"
                >
                  <span>Formulário de Atendimento</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* The 30% Myth & Legal Reality Section */}
      <section className="py-20 bg-[#070A0F] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block">
                Direito sem Mitos · {currentFirm}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
                "A pensão alimentícia é sempre 30% do salário?" Entenda como a Justiça realmente decide
              </h2>
              <p className="text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
                Esse é um dos mitos mais difundidos no Direito de Família. <strong>A legislação brasileira não estipula qualquer percentual tabelado de 30%.</strong> A pensão é dosada através do <strong>Trinômio Fundamental</strong>:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#111827] border border-neutral-800 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">Necessidade Real do Alimentado</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Soma dos custos reais da criança com habitação, alimentação, escola, materiais, vestuário, plano de saúde e lazer.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111827] border border-neutral-800 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">Possibilidade Financeira do Pagador</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Apuração de rendimentos líquidos, faturamento empresarial, bens e padrão de vida real, resguardando o mínimo existencial.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111827] border border-neutral-800 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B0F17] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">Proporcionalidade entre Pai e Mãe</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Ambos os genitores possuem dever de sustento. Quem ganha mais deve contribuir em proporção maior.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 bg-[#111827] text-white p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl space-y-6">
              
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono text-[#C5A059] uppercase block mb-1">
                  INVESTIGAÇÃO PATRIMONIAL & SINAIS EXTERIORES
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  O devedor alega que não tem dinheiro, mas ostenta nas redes sociais?
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Muitos genitores autônomos ou empresários tentam camuflar renda declarando ganhos mínimos ou transferindo bens para terceiros. O Poder Judiciário aplica a <strong>Teoria da Aparência</strong>:
              </p>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Provas de Padrão de Vida:</strong> Fotografias de viagens, veículos utilizados e moradia nas redes sociais têm força probatória admitida.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0B0F17] border border-neutral-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Quebra de Sigilo Bancário & Fiscal:</strong> Requerimento judicial de extratos bancários, cartões de crédito e faturamento de empresas (SISBAJUD).</span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Olá, ${currentLawyer}! Suspeito de ocultação de renda pelo devedor de pensão e gostaria de orientações sobre investigação patrimonial com a ${currentFirm}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center shadow-lg"
              >
                <span>Analisar Meu Caso Sigilosamente</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Step-by-Step Methodology */}
      <section className="py-20 bg-[#0B0F17] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Condução Jurídica Estratégica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Como Conduzimos o seu Processo de Pensão
            </h2>
            <p className="mt-3 text-neutral-300 font-light text-base">
              Rigor técnico aliado à agilidade processual para que você tenha tranquilidade desde a primeira consulta até o cumprimento definitivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg">
                01
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Diagnóstico & Levantamento de Provas
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Elaboramos a planilha detalhada de custos do filho (escola, saúde, moradia, alimentação) e apuramos evidências sobre a capacidade financeira do alimentante.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg">
                02
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Pedido Liminar de Urgência
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Protocolamos a ação solicitando fixação imediata de alimentos provisórios em 48 a 72 horas para garantir o sustento sem demora.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111827] border border-neutral-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg">
                03
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Cumprimento e Execução sem Trégua
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Expedimos ofício para desconto em folha. Em caso de atraso, deflagramos a execução sob rito de prisão imediatamente, sem deixar a dívida prescrever.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Local Office & Direct Contact Section */}
      <section className="py-20 bg-[#070A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-mono font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>SEDE CENTRAL · ATENDIMENTO PRESENCIAL & ONLINE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Garanta o Sustento Digno e a Paz Familiar que Você Merece
              </h2>

              <p className="text-base text-neutral-300 font-light leading-relaxed">
                Cada semana sem formalização ou cobrança é um prejuízo que recai sobre quem menos tem culpa: seus filhos. Agende um diagnóstico reservado com a advogada {currentLawyer} na {currentFirm}.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl(`Olá, ${currentLawyer}! Gostaria de agendar uma consulta sobre Pensão Alimentícia com a ${currentFirm}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-xl text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#0B0F17]" />
                  <span>Agendar Consulta com {currentLawyer}</span>
                </a>

                <a
                  href={`tel:+${WHATSAPP_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#0B0F17] hover:bg-[#161F2E] text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-neutral-700 transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Ligar: {WHATSAPP_PHONE_DISPLAY}</span>
                </a>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Sigilo Absoluto Garantido pelo Estatuto da OAB</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
