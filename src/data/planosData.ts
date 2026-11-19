import type { FaqItem } from './landingData';

export interface PlanItem {
  id: 'basic' | 'plus' | 'pro';
  name: string;
  kicker: string;
  revenueCap: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  trackingOrigin: string;
}

export const PLANS: PlanItem[] = [
  {
    id: 'basic',
    name: 'Basic',
    kicker: 'Essencial para começar organizado',
    revenueCap: 'Faturamento até 50K/mês',
    features: [
      'Contabilidade digital mensal',
      'Envio de impostos',
      'Orientação para emissão de nota',
      'Suporte pelo WhatsApp',
      'Rotina contábil organizada',
      'Acompanhamento de obrigações',
    ],
    ctaLabel: 'Chamar no WhatsApp — Basic',
    whatsappMessage:
      'Olá! Tenho interesse no Plano Basic (faturamento até 50K/mês) e gostaria de receber uma proposta.',
    trackingOrigin: 'plano_basic',
  },
  {
    id: 'plus',
    name: 'Plus',
    kicker: 'Mais procurado para empresas em expansão',
    revenueCap: 'Faturamento até 150K/mês',
    featured: true,
    features: [
      'Contabilidade digital mensal',
      'Envio de impostos',
      'Orientação sobre notas fiscais',
      'Suporte pelo WhatsApp',
      'Acompanhamento de obrigações',
      'Organização de documentos',
      'Balanço e relatórios contábeis',
    ],
    ctaLabel: 'Chamar no WhatsApp — Plus',
    whatsappMessage:
      'Olá! Tenho interesse no Plano Plus (faturamento até 150K/mês) e gostaria de receber uma proposta.',
    trackingOrigin: 'plano_plus',
  },
  {
    id: 'pro',
    name: 'Pro',
    kicker: 'Gestão consultiva completa',
    revenueCap: 'Faturamento até 400K/mês',
    features: [
      'Contabilidade digital mensal',
      'Envio de impostos',
      'Suporte pelo WhatsApp',
      'Acompanhamento de obrigações',
      'Organização fiscal e contábil',
      'Relatórios contábeis',
      'Orientação tributária',
      'Análise de enquadramento',
    ],
    ctaLabel: 'Chamar no WhatsApp — Pro',
    whatsappMessage:
      'Olá! Tenho interesse no Plano Pro (faturamento até 400K/mês) e gostaria de receber uma proposta.',
    trackingOrigin: 'plano_pro',
  },
];

export const PLANS_DISCLAIMER =
  'As faixas indicam faturamento mensal. Valores e serviços podem variar conforme atividade, regime tributário e rotina da empresa. Fale com a Apontual para entender o plano mais adequado para o seu negócio.';

export const PLANS_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'escolher-plano',
    question: 'Como escolher o melhor plano de contabilidade?',
    answer:
      'A Apontual analisa sua atividade, faturamento mensal, cidade e rotina fiscal para indicar o plano mais adequado ao momento da sua empresa.',
  },
  {
    id: 'fora-de-goias',
    question: 'A Apontual atende empresas fora de Goiás?',
    answer:
      'Sim. A Apontual tem sede em Goiás e atende empresas de todo o Brasil com processo digital ágil e suporte direto pelo WhatsApp.',
  },
  {
    id: 'atende-mei',
    question: 'Vocês atendem MEI?',
    answer:
      'Sim. A Apontual atende MEI e também orienta quem está crescendo e precisa transformar o MEI em ME com planejamento tributário.',
  },
  {
    id: 'simples-nacional',
    question: 'Vocês atendem empresas do Simples Nacional?',
    answer:
      'Sim. A Apontual atende empresas do Simples Nacional e acompanha mudanças tributárias que afetam impostos, alíquotas e obrigações acessórias.',
  },
  {
    id: 'trocar-para-apontual',
    question: 'Posso trocar de contador para a Apontual?',
    answer:
      'Sim. A Apontual conduz a migração contábil de forma organizada para você trocar de escritório com segurança e sem parar sua operação.',
  },
  {
    id: 'atendimento-whatsapp',
    question: 'O atendimento é pelo WhatsApp?',
    answer:
      'Sim. O atendimento é digital, com suporte direto pelo WhatsApp para tirar dúvidas rápidas e acompanhar toda a rotina contábil.',
  },
  {
    id: 'inclui-abertura',
    question: 'O plano inclui abertura de empresa?',
    answer:
      'A abertura de empresa pode ser orientada e executada pela Apontual conforme o serviço contratado, integrando o início da contabilidade mensal.',
  },
  {
    id: 'pagar-todo-mes',
    question: 'Tenho que pagar contador todo mês?',
    answer:
      'Empresas enquadradas como ME ou EPP precisam cumprir obrigações fiscais, contábeis e trabalhistas mensais mesmo sem movimento. A Apontual ajuda a manter toda essa rotina em dia.',
  },
];
