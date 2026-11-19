import type { FaqItem, ProcessStep } from './landingData';

export interface PainPointItem {
  number: string;
  title: string;
  description: string;
}

export const SWITCH_PAIN_POINTS: PainPointItem[] = [
  {
    number: '01',
    title: 'Falta de resposta no dia a dia',
    description:
      'Você manda mensagem com uma dúvida urgente sobre nota fiscal ou funcionário e passa dias esperando retorno ou falando apenas com robôs.',
  },
  {
    number: '02',
    title: 'Guias enviadas em cima da hora',
    description:
      'Receber boletos de impostos e folha no dia do vencimento bagunça o fluxo de caixa e gera risco constante de juros e multas.',
  },
  {
    number: '03',
    title: 'Impostos sem explicação clara',
    description:
      'Valores sobem sem justificativa, não há revisão de produtos monofásicos ou Fator R, e ninguém explica de forma simples o que está sendo pago.',
  },
  {
    number: '04',
    title: 'Rotina desorganizada e pendências escondidas',
    description:
      'Falta de acompanhamento preventivo pode acumular declarações em atraso e restrições no CNPJ que só aparecem quando você precisa de crédito ou certidão.',
  },
];

export const INCLUDED_IN_SWITCH: string[] = [
  'Análise inicial de situação cadastral, certidões e regime tributário',
  'Comunicação direta e organizada com o escritório anterior após o distrato',
  'Transferência de balancetes, livros fiscais, folhas e acessos digitais',
  'Revisão preventiva de enquadramento (Simples Nacional ou Lucro Presumido)',
  'Calendário claro de guias e atendimento direto pelo WhatsApp',
];

export const WHO_IS_IT_FOR: string[] = [
  'Comércios varejistas e atacadistas que precisam de controle de ICMS em Goiás',
  'Prestadores de serviço, clínicas e profissionais que buscam pagar o menor imposto legal',
  'Empresas cansadas de plataformas automáticas sem contato humano com o contador',
];

export const SWITCH_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Análise inicial pelo WhatsApp',
    description:
      'Conversamos sobre sua atividade, regime atual e principais dores. Avaliamos seu CNPJ e apresentamos uma proposta mensal clara e sem taxas surpresa.',
  },
  {
    step: '02',
    title: 'Migração acompanhada e sem ruído',
    description:
      'Orientamos a comunicação com seu contador atual e assumimos toda a coleta de documentos fiscais, contábeis e trabalhistas de forma organizada.',
  },
  {
    step: '03',
    title: 'Nova rotina clara e previsível',
    description:
      'Você passa a receber guias com antecedência, orientações objetivas para tomada de decisão e suporte contínuo direto com nossa equipe no WhatsApp.',
  },
];

export const SWITCH_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'paralisar-empresa',
    question: 'Preciso parar de emitir notas fiscais durante a troca de contador?',
    answer:
      'Não. Sua empresa continua operando, vendendo e emitindo notas fiscais normalmente enquanto fazemos a transição documental e de acessos entre os escritórios.',
  },
  {
    id: 'qualquer-epoca',
    question: 'Posso trocar de contador em qualquer mês do ano?',
    answer:
      'Sim. A troca de contabilidade pode ser feita em qualquer época do ano. Só a mudança de regime tributário (como do Lucro Presumido para o Simples Nacional) possui janelas anuais específicas, mas a troca de escritório é livre a qualquer momento.',
  },
  {
    id: 'documentos-atual',
    question: 'Eu mesmo preciso buscar todos os papéis no contador antigo?',
    answer:
      'Não precisa se preocupar com burocracia técnica. Após formalizar o distrato com o escritório anterior, nossa equipe entra em contato diretamente com eles para solicitar arquivos XML, declarações, folha e livros contábeis.',
  },
  {
    id: 'pendencias-cnpj',
    question: 'E se meu CNPJ estiver com pendências ou impostos atrasados?',
    answer:
      'Logo no início da migração realizamos um diagnóstico fiscal completo na Receita Federal, Prefeitura e SEFAZ-GO. Se houver pendências, mapeamos tudo e traçamos um plano de regularização e parcelamento.',
  },
  {
    id: 'cidades-goias',
    question: 'A Apontual atende apenas Aparecida de Goiânia e Goiânia?',
    answer:
      'Nossa sede atende presencialmente Aparecida de Goiânia, Goiânia e região metropolitana, e nossa contabilidade digital atende com agilidade empresas de todo o estado de Goiás pelo WhatsApp.',
  },
];
