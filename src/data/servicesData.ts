import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'divorcio-e-partilha',
    slug: 'divorcio-e-partilha',
    title: 'Divórcio & Partilha Estratégica',
    shortDescription: 'Dissolução matrimonial com proteção patrimonial, cálculo minucioso de bens e preservação da dignidade emocional.',
    badge: 'Direito de Família',
    iconName: 'Scale',
    heroHeadline: 'Segurança patrimonial e encerramento de ciclos com dignidade e discrição.',
    longDescription:
      'O divórcio não precisa ser um campo de batalha destrutivo. Atuamos com visão estratégica e humanizada tanto em acordos consensuais rápidos (em cartório ou via judicial) quanto em litígios patrimoniais de alta complexidade. Protegemos seus direitos sobre imóveis, quotas empresariais, investimentos e garantimos acordos justos de pensão alimentícia.',
    benefits: [
      'Agilidade em divórcios consensuais via cartório em Caxias do Sul (finalização em poucos dias quando não há menores)',
      'Blindagem e auditoria patrimonial para evitar ocultação de bens pelo ex-cônjuge',
      'Definição clara e exequível de pensão alimentícia para filhos ou cônjuge dependente',
      'Resolução conciliatória com redução drástica de desgaste emocional e custos judiciais',
      'Atuação combativa e técnica em divórcios litigiosos contenciosos quando o diálogo não é viável'
    ],
    stages: [
      {
        step: '01',
        title: 'Diagnóstico & Estratégia Inicial',
        description: 'Análise do regime de bens (comunhão parcial, universal, separação total), levantamento de patrimônio e definição do melhor caminho (consensual ou judicial).'
      },
      {
        step: '02',
        title: 'Estruturação do Acordo ou Petição',
        description: 'Elaboração minuciosa das cláusulas de partilha, pensão, guarda (se houver filhos) e uso de bens, priorizando a segurança jurídica definitiva.'
      },
      {
        step: '03',
        title: 'Homologação e Expedição de Formais',
        description: 'Acompanhamento até a averbação no registro civil e transferência efetiva dos imóveis e veículos nos registros competentes.'
      }
    ],
    documentsRequired: [
      'Certidão de casamento atualizada (expedida nos últimos 90 dias)',
      'Documento de identidade (RG ou CNH) e CPF dos cônjuges',
      'Comprovante de residência em Caxias do Sul ou região',
      'Certidão de nascimento dos filhos (se houver)',
      'Matrículas atualizadas dos imóveis e documentos dos veículos',
      'Extratos bancários, comprovantes de quotas empresariais ou investimentos a partilhar'
    ],
    faqs: [
      {
        question: 'É possível fazer divórcio em cartório mesmo com bens a partilhar?',
        answer: 'Sim! Desde que haja consenso pleno entre as partes e não existam filhos menores ou incapazes, o divórcio e a partilha podem ser lavrados diretamente em tabelionato em Caxias do Sul em questão de dias.'
      },
      {
        question: 'Como funciona se um dos cônjuges não quiser assinar o divórcio?',
        answer: 'Ninguém é obrigado a permanecer casado. O divórcio é um direito potestativo incondicionado. Caso não haja acordo, ingressamos com o pedido judicial e o juiz decreta o divórcio, prosseguindo a partilha.'
      },
      {
        question: 'Como fica a partilha de empresas ou contas conjuntas?',
        answer: 'Realizamos levantamento pericial contábil e societário para garantir apuração de haveres justa e evitar fraudes ou desvio patrimonial.'
      }
    ],
    targetAudience: 'Homens e mulheres que buscam encerrar o vínculo matrimonial com firmeza técnica, discrição e proteção do patrimônio familiar.'
  },
  {
    id: 'inventario-e-sucessoes',
    slug: 'inventario-e-sucessoes',
    title: 'Inventário & Sucessões',
    shortDescription: 'Regularização e partilha de herança em cartório ou judicial com foco em economia tributária e harmonia familiar.',
    badge: 'Direito Sucessório',
    iconName: 'FileText',
    heroHeadline: 'Transmissão de patrimônio sem desgastes familiares e com máxima economia tributária.',
    longDescription:
      'Perder um ente querido já é um momento doloroso. O processo de inventário não precisa ser um fardo arrastado por anos. Auxiliamos as famílias de Caxias do Sul e de toda a Serra Gaúcha a regularizar imóveis, empresas e recursos com agilidade em cartório (inventário extrajudicial) ou judicialmente, reduzindo o impacto do imposto ITCD e prevenindo disputas entre herdeiros.',
    benefits: [
      'Inventário extrajudicial em cartório concluído com celeridade e sem burocracia desnecessária',
      'Planejamento tributário inteligente para pagamento do ITCD com aplicação de isenções legais',
      'Mediação de impasses entre herdeiros para viabilizar soluções amigáveis e evitar leilões judiciais',
      'Regularização de imóveis sem escritura ou com pendências documentais históricas',
      'Planejamento sucessório preventivo com holdings familiares e doações com reserva de usufruto'
    ],
    stages: [
      {
        step: '01',
        title: 'Inventário de Ativos & Passivos',
        description: 'Mapeamento completo de todos os bens deixados pelo falecido, identificação de certidões negativas e verificação da existência de testamento.'
      },
      {
        step: '02',
        title: 'Cálculo de Quotas e ITCD',
        description: 'Definição da partilha entre meeiros e herdeiros, declaração junto à Receita Estadual (SEFAZ-RS) e emissão das guias com alíquota correta.'
      },
      {
        step: '03',
        title: 'Lavratura da Escritura ou Sentença',
        description: 'Formalização da transferência em cartório ou expedição do Formal de Partilha judicial para registro definitivo nos Cartórios de Registro de Imóveis.'
      }
    ],
    documentsRequired: [
      'Certidão de óbito do autor da herança',
      'Documentos pessoais (RG e CPF) do falecido e de todos os herdeiros',
      'Certidão de casamento ou união estável do falecido e dos herdeiros',
      'Certidões de matrícula atualizadas dos imóveis',
      'Certidões negativas fiscais (Federal, Estadual e Municipal de Caxias do Sul)',
      'Comprovantes de propriedade de veículos (CRLV) e saldos bancários'
    ],
    faqs: [
      {
        question: 'Qual o prazo legal para abrir o inventário e evitar multa?',
        answer: 'Pela legislação, o processo deve ser instaurado em até 60 dias a contar da data do falecimento. Ultrapassado esse prazo, pode incidir multa sobre o ITCD estadual.'
      },
      {
        question: 'Quanto tempo demora um inventário em cartório em Caxias do Sul?',
        answer: 'Estando a documentação completa e havendo consenso entre os herdeiros, o inventário extrajudicial pode ser concluído em poucas semanas.'
      },
      {
        question: 'É possível fazer inventário em cartório se houver testamento?',
        answer: 'No Rio Grande do Sul e na jurisprudência recente, havendo abertura e cumprimento judicial prévio do testamento (ou homologação), é plenamente viável lavrar a partilha em cartório com assistência de advogado.'
      }
    ],
    targetAudience: 'Famílias que receberam bens por herança e desejam regularizar a propriedade com agilidade, sem brigas e com custo fiscal otimizado.'
  },
  {
    id: 'pensao-alimenticia',
    slug: 'pensao-alimenticia',
    title: 'Pensão Alimentícia & Revisão',
    shortDescription: 'Fixação justa de alimentos provisórios, cobrança célere de parcelas em atraso (rito de prisão ou penhora) e revisão fundamentada no binômio necessidade x possibilidade.',
    badge: 'Direito de Família',
    iconName: 'Coins',
    heroHeadline: 'Garantia do sustento digno e proteção financeira justa para quem você mais ama.',
    longDescription:
      'A fixação e o pagamento pontual da pensão alimentícia são direitos fundamentais para assegurar a dignidade, a educação e a saúde dos filhos ou ex-cônjuges dependentes. Atuamos com extrema firmeza e sensibilidade tanto para quem precisa fixar ou executar parcelas em atraso (sob rito de prisão civil do art. 528 do CPC ou penhora de contas, veículos e bens) quanto para quem busca revisar o valor devido por alteração comprovada na capacidade financeira. Em Caxias do Sul e em toda a Serra Gaúcha, conduzimos cada caso com estratégia documental minuciosa, desmistificando o mito de percentuais fixos e garantindo a aplicação justa do trinômio necessidade, possibilidade e proporcionalidade.',
    benefits: [
      'Pedido de Alimentos Provisórios de Urgência logo no início da ação para não deixar o menor desamparado',
      'Investigação patrimonial e aplicação da Teoria da Aparência em casos de renda informal ou ocultação de patrimônio',
      'Ação de Execução de Alimentos sob o Rito de Prisão Civil (art. 528 CPC) ou Penhora de Contas, FGTS e Veículos',
      'Ação Revisional de Alimentos para adequação do valor quando houver desemprego, nova família ou aumento de despesas',
      'Ação de Exoneração de Alimentos quando o alimentado atinge a maioridade e adquire autonomia financeira',
      'Fixação de pensão alimentícia gravídica para custeio de exames e despesas médicas durante a gestação'
    ],
    stages: [
      {
        step: '01',
        title: 'Mapeamento de Despesas e Capacidade Financeira',
        description: 'Levantamento pormenorizado de todas as despesas reais do filho (moradia, educação, alimentação, saúde, lazer) e apuração fidedigna dos rendimentos e padrão de vida do alimentante.'
      },
      {
        step: '02',
        title: 'Fixação Liminar de Alimentos Provisórios',
        description: 'Ingresso imediato com a ação na Vara de Família de Caxias do Sul solicitando decisão liminar em 48 a 72 horas para que os pagamentos comecem de pronto, antes mesmo da audiência.'
      },
      {
        step: '03',
        title: 'Sentença Definitiva e Garantia de Cumprimento',
        description: 'Acompanhamento até a sentença definitiva ou acordo homologado, expedindo ofício para desconto direto em folha de pagamento ou fixando parâmetros seguros de correção monetária.'
      }
    ],
    documentsRequired: [
      'Certidão de nascimento do filho ou certidão de casamento',
      'Comprovantes de despesas regulares (escola, farmácia, plano de saúde, recibos de alimentação, moradia)',
      'Documento de identidade (RG ou CNH) e comprovante de residência do responsável',
      'Comprovantes de rendimento do alimentante ou indícios de padrão de vida (redes sociais, faturamento, veículos)',
      'Dados bancários (conta corrente ou chave PIX) para recebimento dos alimentos'
    ],
    faqs: [
      {
        question: 'A pensão alimentícia é sempre calculada em 30% do salário?',
        answer: 'Não! Esse é um dos maiores mitos do Direito de Família. A legislação brasileira não prevê percentual fixo. O juiz arbitra o montante baseado no trinômio: necessidade de quem recebe, possibilidade de quem paga e proporcionalidade entre pai e mãe.'
      },
      {
        question: 'E se o genitor trabalhar sem carteira assinada ou como autônomo?',
        answer: 'O dever de pagar alimentos não cessa. A pensão pode ser fixada em percentual do salário mínimo nacional ou calculada com base na Teoria da Aparência, avaliando viagens, veículos e sinais exteriores de riqueza nas redes sociais.'
      },
      {
        question: 'Com quantas parcelas em atraso já é possível pedir a prisão do devedor?',
        answer: 'A partir de apenas UMA parcela em atraso já é cabível o pedido de execução sob rito de prisão civil (artigo 528 do CPC). A lei autoriza a cobrança das 3 últimas parcelas vencidas mais todas as que vencerem ao longo do processo.'
      },
      {
        question: 'A pensão acaba automaticamente quando o filho faz 18 anos?',
        answer: 'Não. Pela Súmula 358 do STJ, o cancelamento da pensão exige decisão judicial em Ação de Exoneração de Alimentos, permitindo que o filho comprove se ainda necessita (por exemplo, cursando universidade ou curso técnico).'
      }
    ],
    targetAudience: 'Mães, pais e responsáveis em Caxias do Sul e região que buscam garantir o sustento digno e tempestivo de seus filhos ou adequar o valor da pensão com equilíbrio e segurança jurídica.'
  },
  {
    id: 'guarda-e-convivencia',
    slug: 'guarda-e-convivencia',
    title: 'Guarda & Convivência Familiar',
    shortDescription: 'Regimes de convivência e guarda que priorizam o bem-estar psicológico e o melhor interesse das crianças e adolescentes.',
    badge: 'Proteção à Infância',
    iconName: 'HeartHandshake',
    heroHeadline: 'O melhor interesse dos seus filhos com planos de convivência equilibrados e humanos.',
    longDescription:
      'Em situações de separação familiar, a prioridade absoluta deve ser a estabilidade emocional e o desenvolvimento integral dos filhos. Estruturamos planos parentais detalhados (férias, datas comemorativas, despesas extraordinárias, rotina escolar) que diminuem conflitos futuros e asseguram uma convivência saudável e afetiva.',
    benefits: [
      'Estruturação de Plano de Parentalidade personalizado evitando litígios semanais',
      'Equilíbrio entre a guarda compartilhada de decisões e o lar de referência da criança',
      'Revisão ou exoneração de pensão alimentícia de acordo com o binômio necessidade/possibilidade',
      'Combate imediato a atos de alienação parental e obstrução de visitas',
      'Regulamentação de convivência para avós e rede de apoio familiar afetivo'
    ],
    stages: [
      {
        step: '01',
        title: 'Escuta Ativa & Diagnóstico da Rotina',
        description: 'Compreensão aprofundada da rotina das crianças (escola, saúde, atividades extras) e da dinâmica profissional dos genitores.'
      },
      {
        step: '02',
        title: 'Mediação e Desenho do Plano Parental',
        description: 'Construção técnica de uma proposta equilibrada de divisão de responsabilidades financeiras e períodos de convivência.'
      },
      {
        step: '03',
        title: 'Formalização Judicial Protetiva',
        description: 'Homologação judicial da guarda e dos alimentos, garantindo título executivo com força de lei em caso de descumprimento.'
      }
    ],
    documentsRequired: [
      'Certidão de nascimento dos filhos menores',
      'Comprovantes de despesas regulares (escola, saúde, alimentação, transporte)',
      'Documentos de identificação e comprovante de renda dos genitores',
      'Relatórios escolares ou psicológicos (se houver questões específicas)',
      'Histórico de comunicações relevantes para fixação de convivência'
    ],
    faqs: [
      {
        question: 'Guarda compartilhada significa que o filho divide metade da semana em cada casa?',
        answer: 'Não necessariamente. A guarda compartilhada diz respeito à responsabilidade conjunta sobre as decisões da vida do filho (escola, saúde, religião). A residência principal costuma ser fixada na casa que melhor atende à rotina escolar.'
      },
      {
        question: 'O que fazer se a pensão estipulada não estiver sendo paga?',
        answer: 'Ingressamos com a Execução de Alimentos, que pode exigir a penhora de bens/contas ou até mesmo a prisão civil do devedor em caso de inadimplência injustificada.'
      }
    ],
    targetAudience: 'Mães e pais conscientes que desejam resguardar a paz emocional dos filhos e formalizar regras justas e transparentes de convivência.'
  },
  {
    id: 'direitos-tea-e-apoio-especializado',
    slug: 'direitos-tea-e-apoio-especializado',
    title: 'Direitos TEA & Apoio Especializado',
    shortDescription: 'Defesa incisiva do acesso a terapias multidisciplinares (ABA, Fono, TO), planos de saúde, LOAS/BPC e curatela com acolhimento.',
    badge: 'Proteção & Neurodiversidade',
    iconName: 'ShieldCheck',
    heroHeadline: 'Garantia jurídica de terapias, tratamentos e dignidade para pessoas no espectro autista e PCD.',
    longDescription:
      'Famílias atípicas enfrentam batalhas diárias que não deveriam incluir negativas arbitrárias de operadoras de saúde ou do poder público. Atuamos com extrema sensibilidade e fundamentação técnica atualizada (Lei Berenice Piana, Rol ANS exemplificativo, jurisprudência do STJ e TJ-RS) para que seu filho ou familiar tenha acesso imediato aos tratamentos prescritos por médicos.',
    benefits: [
      'Ações judiciais com pedido de Liminar de Urgência contra negativas de planos de saúde para método ABA, Denver, Fonoaudiologia e Terapia Ocupacional sem limite de sessões',
      'Exigência de custeio integral de clínicas especializadas em Caxias do Sul ou reembolso em rede não credenciada',
      'Acesso a medicamentos de alto custo pelo SUS / Farmácia do Estado do RS',
      'Assessoria para obtenção do BPC/LOAS junto ao INSS para famílias em situação de vulnerabilidade',
      'Ações de curatela e tomada de decisão apoiada com foco na autonomia e proteção patrimonial de jovens e adultos com deficiência'
    ],
    stages: [
      {
        step: '01',
        title: 'Análise do Laudo Médico & Negativa',
        description: 'Revisão minuciosa do laudo médico com CID, carga horária semanal e justificativa do método, além da formalização da negativa do plano de saúde ou SUS.'
      },
      {
        step: '02',
        title: 'Ação com Pedido de Liminar',
        description: 'Protocolo célere da petição inicial demonstrando a urgência do neurodesenvolvimento e solicitando ordem judicial imediata para início/continuidade do tratamento.'
      },
      {
        step: '03',
        title: 'Cumprimento e Multa por Descumprimento',
        description: 'Vigilância diária sobre o cumprimento da decisão liminar, aplicando astreintes (multa diária) em caso de demora da operadora de saúde.'
      }
    ],
    documentsRequired: [
      'Laudo médico circunstanciado com indicação detalhada de terapias e carga horária (ex: 20h/semana de ABA)',
      'Relatórios de terapeutas (psicólogo, fonoaudiólogo, terapeuta ocupacional) se já em atendimento',
      'Negativa formal do plano de saúde por escrito (ou protocolo de recusa)',
      'Cópia da carteirinha do convênio e contrato do plano de saúde',
      'Comprovantes de pagamento de sessões particulares caso pretenda reembolso retroativo',
      'Documentos de identidade dos pais e certidão de nascimento da criança'
    ],
    faqs: [
      {
        question: 'O plano de saúde pode limitar a quantidade de sessões de terapia por ano?',
        answer: 'Não! A Resolução Normativa 539/2022 da ANS e pacífica jurisprudência do STJ proibiram qualquer limitação quantitativa de sessões de psicologia, fonoaudiologia, fisioterapia e terapia ocupacional para pacientes com TEA.'
      },
      {
        question: 'Quanto tempo demora para sair a decisão da Liminar?',
        answer: 'Em ações de saúde com risco de regressão no desenvolvimento neurológico infantil, os pedidos liminares costumam ser apreciados pelo juiz de plantão ou titular em prazos muito curtos (frequentemente entre 24 a 72 horas).'
      },
      {
        question: 'Se o plano não tiver profissionais ABA na rede em Caxias do Sul, o que acontece?',
        answer: 'O plano é obrigado a custear o tratamento em clínica particular indicada ou reembolsar integralmente os valores desembolsados pela família.'
      }
    ],
    targetAudience: 'Famílias atípicas, pais de crianças no espectro autista e responsáveis que não aceitam que seus filhos fiquem sem as terapias prescritas por lei.'
  }
];
