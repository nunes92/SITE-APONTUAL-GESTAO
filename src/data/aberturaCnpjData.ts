import type { FaqItem, ProcessStep } from './landingData';

export interface OpeningBenefit {
  title: string;
  description: string;
}

export const ABERTURA_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Planejamento e Viabilidade',
    description:
      'Consulta de viabilidade do nome empresarial e do endereço junto aos órgãos competentes (Prefeitura e Junta Comercial), evitando indeferimentos e atrasos.',
  },
  {
    step: '02',
    title: 'Enquadramento Jurídico e Tributário',
    description:
      'Definição do tipo jurídico (MEI, EI, SLU ou Sociedade LTDA) e do regime tributário mais econômico (Simples Nacional ou Lucro Presumido) conforme sua atividade.',
  },
  {
    step: '03',
    title: 'Registro nos Órgãos Públicos',
    description:
      'Obtenção do CNPJ, registro na Junta Comercial (JUCEG), Inscrição Estadual/Municipal e emissão dos Alvarás de funcionamento para você faturar rápido.',
  },
];

export const ABERTURA_BENEFITS: OpeningBenefit[] = [
  {
    title: 'Escolha estratégica dos CNAEs',
    description:
      'Selecionamos os códigos de atividade corretos para você emitir notas fiscais sem impedimentos e pagar apenas a alíquota justa do seu segmento.',
  },
  {
    title: 'Natureza jurídica com proteção patrimonial',
    description:
      'Orientamos entre Sociedade Limitada Unipessoal (SLU), Sociedade LTDA ou Empresário Individual para proteger seu patrimônio pessoal desde o início.',
  },
  {
    title: 'Pronto para Conta PJ e Emissão de Notas',
    description:
      'Entregamos Contrato Social, Cartão CNPJ e inscrições liberadas para abertura imediata de conta bancária empresarial e credenciamento de NF-e ou NFS-e.',
  },
];

export const ABERTURA_DOCUMENTS: string[] = [
  'RG ou CNH (foto nítida) e CPF dos sócios',
  'Comprovante de endereço residencial atualizado',
  'Dados do endereço da empresa (ou orientação sobre endereço fiscal)',
  'Número do IPTU do imóvel sede e atividades que serão exercidas',
  'Certificado digital e-CPF (se já possuir) ou emissão orientada',
];

export const ABERTURA_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'prazo-abertura',
    question: 'Quanto tempo demora para abrir um CNPJ em Goiás?',
    answer:
      'Para prestadores de serviço e comércios sem exigências sanitárias ou ambientais complexas, o CNPJ e a inscrição municipal/estadual costumam ser liberados entre 2 e 5 dias úteis após a aprovação da viabilidade e assinatura digital dos documentos.',
  },
  {
    id: 'abrir-sozinho-slu',
    question: 'Posso abrir uma empresa LTDA mesmo sem ter sócios?',
    answer:
      'Sim. Por meio da Sociedade Limitada Unipessoal (SLU), você abre uma empresa sozinho com responsabilidade limitada, separando seu patrimônio pessoal das obrigações da empresa e sem exigência de capital social mínimo elevado.',
  },
  {
    id: 'endereco-residencial',
    question: 'Preciso alugar uma sala comercial para abrir meu CNPJ?',
    answer:
      'Depende da sua atividade e das regras da Prefeitura. Para diversos prestadores de serviço e negócios digitais, é possível utilizar endereço residencial como ponto de referência ou contratar um endereço fiscal/escritório virtual. Verificamos essa viabilidade antes de protocolar qualquer pedido.',
  },
  {
    id: 'mei-ou-me',
    question: 'Vale a pena abrir direto como ME no Simples Nacional ou começar como MEI?',
    answer:
      'Analisamos sua previsão de faturamento mensal, se sua atividade é permitida no MEI, se precisa contratar funcionários e se seus clientes exigem nota fiscal de empresa ME. Assim você já começa no formato certo e evita custos de migração logo nos primeiros meses.',
  },
  {
    id: 'custo-abertura',
    question: 'Quais são os custos envolvidos na abertura da empresa?',
    answer:
      'Além dos honorários de assessoria contábil, existem as taxas públicas da Junta Comercial (JUCEG), Prefeitura e eventual emissão de Certificado Digital. Passamos todos os valores discriminados antes do início, com transparência total.',
  },
];
