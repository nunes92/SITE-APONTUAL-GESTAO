export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlight?: string;
  ctaLabel: string;
  whatsappMessage: string;
  trackingOrigin: string;
  featured?: boolean;
}

export interface DifferentialItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'abertura',
    number: '01',
    title: 'Abertura de CNPJ Ágil e Segura',
    description:
      'Definimos os CNAEs corretos e o melhor regime tributário desde o primeiro dia para você não pagar impostos a mais, emitir notas fiscais rápido e abrir conta PJ sem travas.',
    ctaLabel: 'Quero abrir minha empresa',
    whatsappMessage: 'Olá! Gostaria de saber prazos e valores para abrir meu CNPJ.',
    trackingOrigin: 'card_abertura',
    featured: true,
  },
  {
    id: 'mei-me',
    number: '02',
    title: 'Migração de MEI para ME',
    description:
      'Sua empresa cresceu e ultrapassou (ou vai ultrapassar) o limite de R$ 81 mil/ano do MEI? Fazemos o desenquadramento planejado para o Simples Nacional evitando multas retroativas.',
    ctaLabel: 'Analisar migração do meu MEI',
    whatsappMessage: 'Olá! Preciso de orientação para migrar meu MEI para ME.',
    trackingOrigin: 'card_mei',
  },
  {
    id: 'troca',
    number: '03',
    title: 'Troca de Contador sem Burocracia',
    description:
      'Seu contador atual demora para responder ou manda guias em cima da hora? Cuidamos de toda a transferência documental com seu escritório anterior sem parar sua operação.',
    ctaLabel: 'Quero trocar de contabilidade',
    whatsappMessage: 'Olá! Estou pensando em trocar de contador e gostaria de entender como funciona.',
    trackingOrigin: 'card_troca',
  },
  {
    id: 'gestao',
    number: '04',
    title: 'Gestão Fiscal, Folha e Pró-Labore',
    description:
      'Apuração rigorosa de impostos, envio antecipado das guias, registro de funcionários (eSocial), cálculo de Fator R para redução de alíquota e regularização de pendências no CNPJ.',
    ctaLabel: 'Solicitar proposta mensal',
    whatsappMessage: 'Olá! Gostaria de uma proposta de assessoria contábil mensal para minha empresa.',
    trackingOrigin: 'card_gestao',
    featured: true,
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: 'Atendimento Direto pelo WhatsApp',
    description:
      'Sem filas de robôs ou tickets que demoram dias. Dúvida rápida tem resposta rápida com quem acompanha a sua empresa.',
  },
  {
    title: 'Especialistas em Simples Nacional e Comércio Local',
    description:
      'Conhecemos as regras estaduais de ICMS de Goiás e as particularidades fiscais de lojas, clínicas, oficinas e prestadores de serviço.',
  },
  {
    title: 'Revisão Tributária Preventiva',
    description:
      'Monitoramos o faturamento acumulado dos últimos 12 meses e a segregação de receitas (produtos monofásicos) para evitar bitributação.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Conversa rápida no WhatsApp',
    description:
      'Você nos conta em 5 minutos qual é a sua atividade atual ou ideia de negócio. Sem formulários intermináveis.',
  },
  {
    step: '02',
    title: 'Diagnóstico e Proposta Clara',
    description:
      'Indicamos o melhor enquadramento tributário (MEI, Simples ou Lucro Presumido) e passamos o valor exato da mensalidade, sem taxas ocultas.',
  },
  {
    step: '03',
    title: 'Execução 100% Digital',
    description:
      'Você envia os documentos pelo celular (ou agendamos uma visita) e nós cuidamos de toda a parte burocrática junto aos órgãos públicos.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'mensalidade',
    question: 'Quanto custa a mensalidade da contabilidade?',
    answer:
      'O valor da mensalidade é justo e proporcional ao porte da sua empresa — considerando regime tributário (Simples Nacional ou Lucro Presumido), faixa de faturamento e quantidade de funcionários. Passamos o orçamento fechado na hora pelo WhatsApp, sem compromisso.',
  },
  {
    id: 'prazo-cnpj',
    question: 'Quanto tempo demora para abrir meu CNPJ?',
    answer:
      'Para prestadores de serviço e comércios sem exigências sanitárias complexas, o CNPJ e a Inscrição Estadual/Municipal costumam sair entre 2 a 5 dias úteis após a assinatura digital dos documentos.',
  },
  {
    id: 'trocar-contador',
    question: 'Já tenho contador, mas quero trocar. Dá muito trabalho?',
    answer:
      'Nenhum trabalho para você. Após formalizar o distrato com seu escritório atual, nossa equipe solicita diretamente a eles os arquivos fiscais, livros e acessos. A transição acontece de forma organizada e sem interromper suas emissões de notas.',
  },
  {
    id: 'segmentos',
    question: 'Vocês atendem empresas de quais segmentos?',
    answer:
      'Atendemos comércios varejistas e atacadistas (lojas de roupas, mercados, autopeças, distribuidoras), prestadores de serviço (clínicas, profissionais de saúde, engenharia, TI, marketing, oficinas) e empresas em transição de MEI para ME.',
  },
];

export const NECESSIDADE_OPTIONS = [
  'Abrir uma empresa (CNPJ)',
  'Migrar de MEI para ME',
  'Trocar de contador',
  'Contabilidade mensal / Redução de impostos',
  'Regularizar pendências no CNPJ',
] as const;
