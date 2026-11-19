import type { FaqItem, ProcessStep } from './landingData';

export interface SignalItem {
  number: string;
  title: string;
  description: string;
}

export interface RiskItem {
  title: string;
  description: string;
}

export const MEI_SIGNALS: SignalItem[] = [
  {
    number: '01',
    title: 'Faturamento crescendo além do teto',
    description:
      'Suas vendas e prestações de serviço estão se aproximando ou já ultrapassaram o limite de R$ 81 mil por ano (ou o limite proporcional de R$ 6.750/mês no ano de abertura).',
  },
  {
    number: '02',
    title: 'Operação mais profissional',
    description:
      'Você precisa contratar mais funcionários, incluir um sócio, atuar com novas atividades (CNAEs) não permitidas no MEI ou emitir notas fiscais de maior valor para empresas.',
  },
  {
    number: '03',
    title: 'Receio de ficar irregular no CNPJ',
    description:
      'Dúvidas sobre o volume de compras, movimentação bancária na pessoa jurídica ou cruzamentos fiscais da Receita Federal e SEFAZ-GO que podem gerar bloqueios inesperados.',
  },
];

export const MEI_DELAY_RISKS: RiskItem[] = [
  {
    title: 'Limites ultrapassados e cobrança retroativa',
    description:
      'Quando o excesso passa de 20% do teto anual, o desenquadramento pode retroagir a janeiro do mesmo ano, gerando cobrança acumulada de impostos com juros e multa.',
  },
  {
    title: 'Impostos inesperados no fluxo de caixa',
    description:
      'Sem análise prévia de anexo do Simples Nacional, segregação de produtos monofásicos e cálculo de Fator R, a transição pode sair mais cara do que o necessário.',
  },
  {
    title: 'Notas fiscais e emissão travadas',
    description:
      'Pendências cadastrais na Prefeitura ou Inscrição Estadual bloqueiam a emissão de NF-e e NFS-e, travando recebimentos de clientes corporativos e contratos.',
  },
];

export const MEI_TRANSITION_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico e Análise Tributária',
    description:
      'Analisamos seu faturamento atual, projeção dos próximos meses e CNAEs para definir o melhor momento do desenquadramento e o menor imposto legal no Simples Nacional.',
  },
  {
    step: '02',
    title: 'Desenquadramento e Atualização em Goiás',
    description:
      'Realizamos o pedido oficial no Portal do Simples Nacional e atualizamos os registros na JUCEG, Receita Federal, Prefeitura e SEFAZ-GO sem você enfrentar filas.',
  },
  {
    step: '03',
    title: 'Nova Rotina da Empresa Organizada',
    description:
      'Assumimos a apuração mensal de guias, pró-labore, folha de pagamento e obrigações acessórias, com suporte digital e atendimento direto pelo WhatsApp.',
  },
];

export const MEI_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'quando-transformar',
    question: 'Quando devo transformar meu MEI em ME?',
    answer:
      'O ideal é fazer a transição de forma planejada antes de ultrapassar o limite anual de R$ 81.000,00 (ou R$ 6.750,00 multiplicado pelos meses de atividade no ano de abertura), ou sempre que precisar contratar mais de 1 funcionário, incluir sócios ou exercer atividades não permitidas ao MEI.',
  },
  {
    id: 'ultrapassei-limite',
    question: 'O que acontece se eu já ultrapassei o limite do MEI?',
    answer:
      'Depende do percentual excedido. Se o excesso foi de até 20% (até R$ 97.200,00 no ano), você paga uma guia complementar e passa a ser ME a partir de janeiro do ano seguinte. Acima de 20%, o desenquadramento retroage a janeiro do ano corrente. Nossa equipe calcula o cenário exato para regularizar com o menor impacto possível.',
  },
  {
    id: 'obrigatoriedade-contador',
    question: 'Após transformar em ME, preciso obrigatoriamente de contador?',
    answer:
      'Sim. Diferente do MEI, a Microempresa (ME) no Simples Nacional ou Lucro Presumido exige acompanhamento contábil e fiscal mensal para apuração de impostos (DAS), entrega de declarações acessórias, distribuição de lucros isenta e gestão de pró-labore ou folha.',
  },
  {
    id: 'mesmo-cnpj',
    question: 'Eu perco o meu CNPJ atual ou preciso fechar a empresa?',
    answer:
      'Não. O número do seu CNPJ continua exatamente o mesmo. Fazemos a transformação cadastral do porte e da natureza jurídica (como Empresário Individual ou Sociedade Limitada Unipessoal - SLU) preservando seu histórico bancário, maquininhas e contratos.',
  },
  {
    id: 'suporte-goias',
    question: 'Como funciona o atendimento da Apontual para empresas de Goiás?',
    answer:
      'Todo o processo é conduzido de forma digital com assinatura eletrônica e acompanhamento direto pelo WhatsApp com contador registrado no CRC-GO. Caso prefira, também realizamos atendimento presencial para Aparecida de Goiânia, Goiânia e região.',
  },
];
