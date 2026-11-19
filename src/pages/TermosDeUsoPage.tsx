import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import type { PageRoute } from '../components/Header';

interface TermosDeUsoPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

interface TermsSection {
  number: string;
  title: string;
  paragraphs: string[];
  hasPrivacyLink?: boolean;
  hasContactLink?: boolean;
  outroParagraphs?: string[];
}

const TERMS_SECTIONS: TermsSection[] = [
  {
    number: '01',
    title: 'Aceitação dos Termos',
    paragraphs: [
      'Ao acessar ou utilizar este site, o usuário declara estar ciente destes Termos de Uso.',
      'Caso não concorde com alguma das condições apresentadas, o usuário deverá interromper a utilização do site ou entrar em contato com a Apontual para esclarecer suas dúvidas.',
      'Estes Termos se aplicam ao acesso e ao uso das páginas, conteúdos, formulários, botões, links e canais de contato disponibilizados pela Apontual Contabilidade.',
    ],
  },
  {
    number: '02',
    title: 'Sobre a Apontual Contabilidade',
    paragraphs: [
      'A Apontual Gestão Contábil é uma empresa de contabilidade digital com sede em Goiás, que atende empresas de diferentes regiões do Brasil.',
      'Nosso objetivo é oferecer uma experiência contábil mais clara, próxima e organizada para empreendedores, MEIs, prestadores de serviço, comércios, negócios digitais, profissionais liberais e empresas do Simples Nacional.',
      'Por meio do site, apresentamos informações sobre nossos serviços, formas de atendimento, áreas de atuação, conteúdos institucionais e canais para contato.',
    ],
  },
  {
    number: '03',
    title: 'Uso do site',
    paragraphs: [
      'O site da Apontual Gestão Contábil deve ser utilizado de forma adequada, ética e em conformidade com a legislação aplicável.',
      'Ao utilizar o site, o usuário se compromete a não realizar ações que possam prejudicar o funcionamento da página, comprometer a segurança do ambiente digital, tentar acessar áreas restritas ou utilizar as informações disponíveis para finalidades indevidas.',
      'O usuário também se compromete a fornecer informações verdadeiras quando entrar em contato com a Apontual por meio de formulários, botões, WhatsApp ou outros canais indicados no site.',
    ],
  },
  {
    number: '04',
    title: 'Informações e conteúdos do site',
    paragraphs: [
      'Os conteúdos publicados no site da Apontual Gestão Contábil possuem finalidade informativa, institucional e comercial.',
      'A Apontual busca manter as informações claras, úteis e atualizadas, mas não garante que todos os conteúdos permaneçam aplicáveis a todas as empresas, atividades ou situações.',
      'As informações disponibilizadas no site não constituem orientação contábil, fiscal, tributária, jurídica ou empresarial específica e não substituem a análise individual da situação de cada empresa.',
      'Antes de tomar decisões relevantes com base nos conteúdos do site, o usuário deverá buscar uma avaliação adequada ao seu caso.',
    ],
  },
  {
    number: '05',
    title: 'Serviços contábeis e contratação',
    paragraphs: [
      'A apresentação de serviços, planos, condições ou benefícios no site não representa contratação automática, proposta definitiva ou garantia de atendimento.',
      'A contratação de qualquer serviço da Apontual Gestão Contábil dependerá da análise da solicitação, do alinhamento entre as partes, do fornecimento das informações necessárias e da aceitação das condições comerciais e contratuais aplicáveis.',
      'Os serviços podem incluir, conforme o caso, abertura de empresa, troca de contador, atendimento a MEIs e empresas do Simples Nacional, transformação empresarial, planejamento tributário e outras soluções contábeis.',
      'Escopo, valores, prazos, responsabilidades, obrigações e condições de atendimento serão definidos conforme o serviço efetivamente contratado.',
    ],
  },
  {
    number: '06',
    title: 'Atendimento digital e WhatsApp',
    paragraphs: [
      'A Apontual Gestão Contábil utiliza canais digitais para facilitar o contato com clientes e interessados, incluindo formulários, e-mail e WhatsApp.',
      'Ao clicar em um botão de contato ou iniciar uma conversa, o usuário poderá ser direcionado para um ambiente externo administrado por outro fornecedor, como o WhatsApp.',
      'O envio de informações ou o início de um atendimento não garante contratação, prazo de resposta, disponibilidade imediata ou prestação automática de serviço.',
      'A continuidade do atendimento poderá depender do envio de informações adicionais, documentos, análise interna e disponibilidade da equipe.',
    ],
  },
  {
    number: '07',
    title: 'Responsabilidades do usuário',
    paragraphs: [
      'O usuário é responsável pelas informações que fornece à Apontual por meio do site ou dos canais de atendimento.',
      'É importante que os dados enviados sejam verdadeiros, completos e atualizados, especialmente quando forem utilizados para análise de abertura de empresa, regularização, migração contábil, enquadramento, emissão de notas, impostos ou outros serviços.',
      'O usuário também é responsável por utilizar o site de forma correta, sem tentar comprometer sua segurança, funcionamento ou integridade.',
    ],
  },
  {
    number: '08',
    title: 'Propriedade intelectual',
    paragraphs: [
      'Todos os textos, imagens, elementos visuais, identidade de marca, estrutura das páginas, conteúdos e materiais publicados no site pertencem à Apontual Gestão Contábil ou são utilizados mediante autorização, licença ou adequação ao projeto.',
      'Não é permitido copiar, reproduzir, modificar, distribuir ou utilizar os conteúdos do site para fins comerciais sem autorização prévia da Apontual.',
      'O uso indevido da marca, dos conteúdos ou dos materiais da Apontual poderá gerar medidas cabíveis para proteção dos direitos da empresa.',
    ],
  },
  {
    number: '09',
    title: 'Links externos',
    paragraphs: [
      'O site da Apontual Gestão Contábil pode conter links para páginas externas, como WhatsApp, redes sociais, ferramentas de contato, plataformas de atendimento ou outros ambientes digitais.',
      'A Apontual não se responsabiliza pelo conteúdo, funcionamento, políticas ou práticas de sites e plataformas de terceiros.',
      'Ao acessar links externos, o usuário deve verificar os termos, políticas e condições aplicáveis a cada ambiente.',
    ],
  },
  {
    number: '10',
    title: 'Limitação de responsabilidade',
    paragraphs: [
      'A Apontual Gestão Contábil adota medidas para manter o site seguro, disponível e atualizado, mas não garante funcionamento ininterrupto, ausência de erros ou imunidade contra falhas técnicas e eventos externos.',
      'A Apontual não será responsável por prejuízos decorrentes do uso inadequado do site, do fornecimento de informações incorretas pelo usuário ou de decisões tomadas exclusivamente com base em conteúdos gerais, sem análise individual.',
      'A indisponibilidade temporária do site, de formulários, do WhatsApp ou de serviços de terceiros não gera obrigação automática de indenização ou garantia de atendimento.',
      'Nenhuma disposição destes Termos exclui responsabilidades que não possam ser legalmente afastadas.',
    ],
  },
  {
    number: '11',
    title: 'Privacidade e dados pessoais',
    paragraphs: [
      'O tratamento de dados pessoais realizado por meio do site, dos formulários e dos canais oficiais da Apontual é descrito na Política de Privacidade.',
      'A Política de Privacidade informa quais dados podem ser tratados, suas finalidades, bases legais, prazos de conservação, formas de compartilhamento e direitos dos titulares.',
    ],
    hasPrivacyLink: true,
  },
  {
    number: '12',
    title: 'Alterações nestes Termos de Uso',
    paragraphs: [
      'A Apontual Gestão Contábil poderá atualizar estes Termos de Uso sempre que necessário, para refletir mudanças no site, nos serviços, nas práticas de atendimento ou em requisitos legais e operacionais.',
      'A versão atualizada será publicada nesta página, com indicação da data de última atualização.',
      'Recomendamos que o usuário consulte esta página periodicamente para acompanhar eventuais alterações.',
    ],
  },
  {
    number: '13',
    title: 'Fale com a Apontual',
    paragraphs: [
      'Em caso de dúvidas sobre estes Termos de Uso, sobre o site ou sobre os serviços da Apontual Contabilidade, entre em contato pelos canais oficiais disponibilizados no site.',
    ],
    hasContactLink: true,
    outroParagraphs: [
      'A Apontual presta atendimento de forma digital e possui sede em Goiás. A disponibilidade, o escopo e as condições de cada serviço serão confirmados durante o atendimento.',
    ],
  },
];

export function TermosDeUsoPage({ onNavigate }: TermosDeUsoPageProps) {
  return (
    <>
      {/* Cabeçalho da Página Legal */}
      <section className="relative overflow-hidden bg-navy-900 text-white pt-10 pb-14 sm:pt-14 sm:pb-16">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white active:opacity-80 transition duration-150 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Voltar para a página inicial</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide mb-4 tabular-nums">
            Documento Legal · Condições de Uso · Última atualização: 18/11/2026
          </p>
          <h1
            className="font-extrabold tracking-tight leading-[1.12] text-white mb-4 [text-wrap:balance]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Termos de Uso
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Estes Termos regulam o uso do site da Apontual Contabilidade. O envio
            de informações, o preenchimento de formulários ou o início de uma
            conversa pelos canais disponíveis não representa contratação
            automática nem garante a prestação de qualquer serviço.
          </p>
        </div>
      </section>

      {/* Conteúdo Estruturado */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {TERMS_SECTIONS.map((section) => (
            <article
              key={section.number}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm font-bold text-emerald-700 tabular-nums">
                  {section.number}.
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                {section.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>

              {section.hasPrivacyLink && (
                <div className="mt-4">
                  <a
                    href="#/politica-de-privacidade"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('politica-de-privacidade');
                    }}
                    className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </div>
              )}

              {section.hasContactLink && (
                <div className="mt-4">
                  <a
                    href="#/contato"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contato');
                    }}
                    className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors"
                  >
                    Falar com a Apontual
                  </a>
                </div>
              )}

              {section.outroParagraphs && (
                <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  {section.outroParagraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              )}
            </article>
          ))}

          {/* Card de Atendimento Oficial */}
          <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">
                  Apontual Gestão Contábil · CRC GO-029941/O-8
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Dúvidas sobre estes Termos de Uso?
              </h2>
              <p className="text-sm text-slate-300">
                Fale com nossa equipe pelos canais oficiais ou pelo e-mail{' '}
                <a
                  href="mailto:contato@apontualgestaocontabil.com.br"
                  className="text-emerald-400 font-semibold hover:underline underline-offset-4 break-all"
                >
                  contato@apontualgestaocontabil.com.br
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="mailto:contato@apontualgestaocontabil.com.br"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm transition duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Enviar E-mail</span>
              </a>
              <a
                href="#/contato"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contato');
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center py-3 px-5 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-[0.98] text-slate-200 hover:text-white font-semibold text-sm transition duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                Falar com a Apontual
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
