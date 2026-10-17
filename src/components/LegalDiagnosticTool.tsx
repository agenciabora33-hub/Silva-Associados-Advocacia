import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, RotateCcw, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackAdConversion } from '../utils/analytics';

export const LegalDiagnosticTool: React.FC = () => {
  const [category, setCategory] = useState<'pensao' | 'inventario' | 'divorcio' | 'tea'>('pensao');

  // Pensao state
  const [objetivoPensao, setObjetivoPensao] = useState<'fixar' | 'cobrar' | 'revisar'>('fixar');
  const [pensaoTipoDevedor, setPensaoTipoDevedor] = useState<'clt' | 'autonomo' | 'desempregado'>('clt');
  const [pensaoTemAcordo, setPensaoTemAcordo] = useState<boolean>(false);
  
  // Inventario state
  const [herdeirosAcordo, setHerdeirosAcordo] = useState<boolean | null>(true);
  const [temMenores, setTemMenores] = useState<boolean | null>(false);
  const [temTestamento, setTemTestamento] = useState<boolean | null>(false);

  // Divorcio state
  const [divorcioConsenso, setDivorcioConsenso] = useState<boolean | null>(true);
  const [divorcioFilhosMenores, setDivorcioFilhosMenores] = useState<boolean | null>(false);
  const [bensPartilhar, setBensPartilhar] = useState<boolean | null>(true);

  // TEA state
  const [possuiLaudo, setPossuiLaudo] = useState<boolean | null>(true);
  const [temNegativa, setTemNegativa] = useState<boolean | null>(true);
  const [tipoDemanda, setTipoDemanda] = useState<'plano_saude' | 'loas' | 'escola'>('plano_saude');

  const [diagnosticResult, setDiagnosticResult] = useState<any | null>(null);

  const calculateDiagnosis = () => {
    if (category === 'pensao') {
      const isExecucao = objetivoPensao === 'cobrar';
      const isRevisao = objetivoPensao === 'revisar';
      setDiagnosticResult({
        category: 'Pensão Alimentícia',
        route: isExecucao
          ? 'Execução de Alimentos sob Rito de Prisão (Art. 528 CPC) ou Penhora'
          : isRevisao
          ? 'Ação Revisional de Alimentos (Binômio Necessidade x Possibilidade)'
          : 'Ação de Alimentos com Pedido Liminar de Alimentos Provisórios',
        badge: isExecucao ? 'Cobrança Coercitiva Imediata' : isRevisao ? 'Readequação Justa' : 'Tutela de Urgência Protetiva',
        urgency: isExecucao
          ? 'Intimação para pagar em 3 dias sob pena de prisão civil'
          : 'Liminar de alimentos provisórios apreciada em 48 a 72 horas pelo juiz em Caxias do Sul',
        recommendations: isExecucao
          ? [
              'Cobrança imediata das 3 últimas parcelas vencidas sob pena de prisão civil em regime fechado.',
              'Bloqueio de contas bancárias (SISBAJUD), veículos (RENAJUD) e retenção de restituição do IRPF.',
              'Suspensão de CNH e retenção de passaporte caso haja tentativa de ocultação de patrimônio.'
            ]
          : isRevisao
          ? [
              'Comprovação contundente da mudança na capacidade financeira ou novas despesas médicas/escolares.',
              'Planilha pormenorizada de despesas reais do filho dependente.',
              'Demonstração da divisão equilibrada e proporcional entre pai e mãe.'
            ]
          : [
              'Fixação célere de alimentos provisórios antes mesmo da primeira audiência.',
              pensaoTipoDevedor === 'clt'
                ? 'Expedição de ofício para desconto direto em folha de pagamento (salário, 13º e férias).'
                : 'Aplicação da Teoria da Aparência para investigar renda informal através de sinais exteriores de riqueza.',
              'Homologação de conta bancária para crédito seguro dos depósitos mensais.'
            ],
        whatsappMessage: `Olá, Dra. Juliete Silva! Fiz o diagnóstico no site para Pensão Alimentícia (${isExecucao ? 'Cobrança de parcelas em atraso' : isRevisao ? 'Revisão do valor' : 'Fixação pela primeira vez'}). Gostaria de orientação jurídica.`
      });
    } else if (category === 'inventario') {
      const isCartorio = herdeirosAcordo && !temMenores && !temTestamento;
      setDiagnosticResult({
        category: 'Inventário e Partilha',
        route: isCartorio
          ? 'Inventário Extrajudicial em Cartório'
          : 'Inventário Judicial Estratégico',
        badge: isCartorio ? 'Via Mais Rápida & Econômica' : 'Via Judicial com Acompanhamento Protetivo',
        urgency: isCartorio ? 'Conclusão estimada em 15 a 45 dias' : 'Necessita abertura célere para evitar multa do ITCD (60 dias)',
        recommendations: isCartorio
          ? [
              'Reunir certidões negativas fiscais e certidão de óbito atualizada.',
              'Todos os herdeiros devem outorgar procuração ao mesmo advogado para lavratura em tabelionato.',
              'Apuração preliminar do ITCD para recolhimento com possíveis isenções.'
            ]
          : [
              'Necessário protocolo judicial na comarca competente.',
              'Definição do Inventariante para administração dos bens do espólio.',
              'Intervenção do Ministério Público caso envolva menores ou incapazes.'
            ],
        whatsappMessage: `Olá, Dra. Juliete Silva! Fiz o diagnóstico no seu site para Inventário (${isCartorio ? 'em cartório' : 'judicial'}). Gostaria de enviar os dados para sua análise.`
      });
    } else if (category === 'divorcio') {
      const isConsensualCartorio = divorcioConsenso && !divorcioFilhosMenores;
      setDiagnosticResult({
        category: 'Divórcio & Partilha',
        route: isConsensualCartorio
          ? 'Divórcio Extrajudicial Consensual em Cartório'
          : divorcioConsenso
          ? 'Divórcio Consensual Homologado Judicialmente'
          : 'Divórcio Litigioso com Tutela Protetiva',
        badge: isConsensualCartorio ? 'Celeridade Máxima' : 'Proteção dos Filhos & Bens',
        urgency: isConsensualCartorio ? 'Lavratura da escritura em poucos dias' : 'Garantia liminar de alimentos e guarda provisória',
        recommendations: isConsensualCartorio
          ? [
              'Sem necessidade de audiências desgastantes.',
              'Partilha patrimonial formalizada com segurança de registro em imóveis e veículos.',
              'Retorno imediato ao nome de solteiro(a) se desejado.'
            ]
          : [
              'Estruturação detalhada do Plano de Parentalidade e pensão dos filhos.',
              'Medidas preventivas para evitar dissipação de patrimônio comum.',
              'Atendimento humanizado para proteger a integridade emocional dos envolvidos.'
            ],
        whatsappMessage: `Olá, Dra. Juliete Silva! Realizei o diagnóstico no site para Divórcio (${divorcioConsenso ? 'Consensual' : 'Litigioso'}${bensPartilhar ? ' com bens' : ''}). Gostaria de agendar orientação.`
      });
    } else {
      setDiagnosticResult({
        category: 'Direitos TEA & Saúde',
        route: tipoDemanda === 'plano_saude'
          ? 'Ação Judicial com Pedido de Liminar de Urgência (STJ / ANS)'
          : tipoDemanda === 'loas'
          ? 'Requerimento / Recurso Judicial de Benefício LOAS / BPC'
          : 'Ação para Suporte Escolar com Mediador Especializado',
        badge: 'Tutela de Urgência',
        urgency: 'Pedidos liminares de saúde são apreciados com urgência pelo juiz (frequentemente 24h a 72h)',
        recommendations: [
          'Laudo médico circunstanciado com carga horária semanal indicada (ex: Método ABA).',
          'Apresentação da negativa do convênio ou ausência de rede credenciada.',
          'Cobrança de multa diária (astreintes) pelo descumprimento pelo plano de saúde.'
        ],
        whatsappMessage: `Olá, Dra. Juliete Silva! Fiz o diagnóstico sobre Direitos TEA (${tipoDemanda === 'plano_saude' ? 'Plano de Saúde' : 'BPC/LOAS'}). Meu filho necessita de atendimento jurídico urgente.`
      });
    }
  };

  const resetDiagnosis = () => {
    setDiagnosticResult(null);
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-[#070A0F] border-b border-neutral-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa de Orientação Jurídica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight text-balance">
            Simulador de Diagnóstico Jurídico Preliminar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light">
            Descubra em segundos o procedimento mais rápido e seguro para o seu caso antes de dar entrada na documentação.
          </p>
        </div>

        {/* Diagnostic Tool Card */}
        <div className="bg-[#111827] rounded-2xl border border-[#C5A059]/40 shadow-2xl overflow-hidden p-6 sm:p-10 text-white">
          
          {!diagnosticResult ? (
            <div className="space-y-8">
              {/* Category Segmented Selector (Buttons/Tabs) */}
              <div>
                <label className="block text-xs uppercase font-semibold text-neutral-200 tracking-wider mb-3">
                  Passo 1: Qual é o tema da sua necessidade jurídica?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setCategory('pensao')}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all text-center ${
                      category === 'pensao'
                        ? 'bg-[#C5A059] text-[#0B0F17] font-bold border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-[#161F2E] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    Pensão Alimentícia
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('divorcio')}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all text-center ${
                      category === 'divorcio'
                        ? 'bg-[#C5A059] text-[#0B0F17] font-bold border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-[#161F2E] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    Divórcio & Partilha
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('inventario')}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all text-center ${
                      category === 'inventario'
                        ? 'bg-[#C5A059] text-[#0B0F17] font-bold border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-[#161F2E] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    Inventário & Herança
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('tea')}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all text-center ${
                      category === 'tea'
                        ? 'bg-[#C5A059] text-[#0B0F17] font-bold border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-[#161F2E] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    Direitos TEA / Saúde
                  </button>
                </div>
              </div>

              {/* Step 2: Context Questions based on Category */}
              <div className="pt-6 border-t border-neutral-200/80 space-y-6">
                <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-2">
                  Passo 2: Informações essenciais sobre o cenário
                </label>

                {category === 'pensao' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Qual é o seu objetivo principal?
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setObjetivoPensao('fixar')}
                          className={`py-1.5 px-2 text-xs font-medium rounded text-left ${
                            objetivoPensao === 'fixar' ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Fixar pensão (1ª vez)
                        </button>
                        <button
                          type="button"
                          onClick={() => setObjetivoPensao('cobrar')}
                          className={`py-1.5 px-2 text-xs font-medium rounded text-left ${
                            objetivoPensao === 'cobrar' ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Cobrar atrasados (Execução)
                        </button>
                        <button
                          type="button"
                          onClick={() => setObjetivoPensao('revisar')}
                          className={`py-1.5 px-2 text-xs font-medium rounded text-left ${
                            objetivoPensao === 'revisar' ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Revisar valor (Aumentar/Reduzir)
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Situação profissional do pagador:
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setPensaoTipoDevedor('clt')}
                          className={`py-1.5 px-2 text-xs font-medium rounded text-left ${
                            pensaoTipoDevedor === 'clt' ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          CLT / Servidor Público
                        </button>
                        <button
                          type="button"
                          onClick={() => setPensaoTipoDevedor('autonomo')}
                          className={`py-1.5 px-2 text-xs font-medium rounded text-left ${
                            pensaoTipoDevedor === 'autonomo' ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Autônomo / Empresário / Informal
                        </button>
                        <button
                          type="button"
                          onClick={() => setPensaoTipoDevedor('desempregado')}
                          className={`py-1.5 px-2 text-xs font-medium rounded text-left ${
                            pensaoTipoDevedor === 'desempregado' ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Desempregado atualmente
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Já existe decisão ou acordo judicial anterior?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setPensaoTemAcordo(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            pensaoTemAcordo === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, homologado
                        </button>
                        <button
                          type="button"
                          onClick={() => setPensaoTemAcordo(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            pensaoTemAcordo === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Não / Apenas verbal
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {category === 'inventario' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Todos os herdeiros estão de acordo com a partilha?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setHerdeirosAcordo(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            herdeirosAcordo === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, todos
                        </button>
                        <button
                          type="button"
                          onClick={() => setHerdeirosAcordo(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            herdeirosAcordo === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Há divergência
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Existe algum herdeiro menor de 18 anos ou incapaz?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setTemMenores(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            temMenores === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Não, todos maiores
                        </button>
                        <button
                          type="button"
                          onClick={() => setTemMenores(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            temMenores === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, há menor
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        O falecido deixou testamento formalmente registrado?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setTemTestamento(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            temTestamento === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Não deixou
                        </button>
                        <button
                          type="button"
                          onClick={() => setTemTestamento(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            temTestamento === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim ou dúvida
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {category === 'divorcio' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        O casal concorda amigavelmente com o divórcio?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setDivorcioConsenso(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            divorcioConsenso === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, consensual
                        </button>
                        <button
                          type="button"
                          onClick={() => setDivorcioConsenso(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            divorcioConsenso === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Litigioso
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Há filhos menores de idade ou dependentes?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setDivorcioFilhosMenores(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            divorcioFilhosMenores === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Não há filhos menores
                        </button>
                        <button
                          type="button"
                          onClick={() => setDivorcioFilhosMenores(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            divorcioFilhosMenores === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, há menores
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Existem imóveis, empresas ou veículos para partilha?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setBensPartilhar(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            bensPartilhar === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, com bens
                        </button>
                        <button
                          type="button"
                          onClick={() => setBensPartilhar(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            bensPartilhar === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Não há bens
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {category === 'tea' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Qual é o objetivo principal da ação?
                      </p>
                      <select
                        value={tipoDemanda}
                        onChange={(e) => setTipoDemanda(e.target.value as any)}
                        className="w-full text-xs p-2 border border-neutral-300 rounded bg-white text-neutral-800"
                      >
                        <option value="plano_saude">Terapias ABA / Plano de Saúde</option>
                        <option value="loas">Benefício BPC / LOAS</option>
                        <option value="escola">Apoio Escolar / Mediador</option>
                      </select>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        Já possui laudo médico com indicação de carga horária?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setPossuiLaudo(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            possuiLaudo === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, detalhado
                        </button>
                        <button
                          type="button"
                          onClick={() => setPossuiLaudo(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            possuiLaudo === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Ainda não
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-xs font-medium text-neutral-800 mb-2">
                        O plano de saúde já formalizou negativa ou recusa?
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setTemNegativa(true)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            temNegativa === true ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Sim, tenho negativa
                        </button>
                        <button
                          type="button"
                          onClick={() => setTemNegativa(false)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded ${
                            temNegativa === false ? 'bg-[#111827] text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          Não formalizou
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={calculateDiagnosis}
                  className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded shadow transition-all active:scale-[0.99] flex items-center gap-2"
                >
                  <span>Gerar Diagnóstico Preliminar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Diagnostic Output */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-4">
                <div>
                  <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block">
                    Resultado da Análise Preliminar
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#111827]">
                    {diagnosticResult.route}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#111827] text-white rounded">
                    {diagnosticResult.badge}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#C5A059]/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-neutral-900 tracking-wider">
                    Prazo e Celeridade Esperada:
                  </h4>
                  <p className="text-sm text-neutral-700 mt-0.5">
                    {diagnosticResult.urgency}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-semibold text-neutral-800 tracking-wider mb-3">
                  Recomendações Práticas Imediatas:
                </h4>
                <ul className="space-y-2">
                  {diagnosticResult.recommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={resetDiagnosis}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Realizar Nova Simulação</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppUrl(diagnosticResult.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAdConversion('InitiateTriage', { category: diagnosticResult.category })}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#C5A059] shadow-lg transition-all"
                  >
                    <span>Enviar para a Dra. Letícia no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Simulação meramente orientativa. A confirmação do procedimento depende de análise documental individualizada.</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
