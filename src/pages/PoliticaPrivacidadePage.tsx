import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import type { PageRoute } from '../components/Header';

interface PoliticaPrivacidadePageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

interface PrivacySection {
  number: string;
  title: string;
  introParagraphs?: string[];
  bullets?: string[];
  outroParagraphs?: string[];
  companyDetails?: Array<{ label: string; value: string; href?: string }>;
  contactEmail?: string;
}

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    number: '01',
    title: 'Introdução',
    introParagraphs: [
      'A Apontual Gestão Contábil valoriza a privacidade e a proteção dos dados pessoais das pessoas que acessam seu site, preenchem formulários ou entram em contato pelos canais de atendimento.',
      'Esta Política de Privacidade explica quais dados podem ser tratados, para quais finalidades, com quem podem ser compartilhados, por quanto tempo podem ser mantidos e como o titular pode exercer seus direitos.',
      'Ao utilizar o site, o visitante declara estar ciente das práticas descritas nesta Política. Quando uma atividade depender de consentimento, a escolha será solicitada de forma separada e específica.',
    ],
  },
  {
    number: '02',
    title: 'Quem é responsável pelos dados',
    introParagraphs: [
      'A Apontual Gestão Contábil é a responsável pelo tratamento dos dados pessoais realizado por meio deste site e de seus canais oficiais de atendimento.',
    ],
    companyDetails: [
      {
        label: 'Site',
        value: 'https://www.apontualgestaocontabil.com.br',
        href: 'https://www.apontualgestaocontabil.com.br',
      },
      {
        label: 'E-mail para privacidade',
        value: 'contato@apontualgestaocontabil.com.br',
        href: 'mailto:contato@apontualgestaocontabil.com.br',
      },
      {
        label: 'Sede',
        value: 'Goiás',
      },
      {
        label: 'Endereço',
        value:
          'Rua Alípio Junqueira - St. Serra Dourada - 3ª Etapa, Aparecida de Goiânia - GO, 74973-080',
      },
    ],
  },
  {
    number: '03',
    title: 'Quais dados podem ser coletados',
    introParagraphs: [
      'A Apontual pode tratar dados fornecidos diretamente pelo visitante, incluindo:',
    ],
    bullets: [
      'nome;',
      'número de telefone ou WhatsApp;',
      'e-mail, quando informado;',
      'cidade e estado;',
      'serviço de interesse;',
      'informações ou mensagens enviadas pelo WhatsApp, e-mail ou outros canais oficiais;',
      'informações necessárias para compreender e atender à solicitação apresentada.',
    ],
    outroParagraphs: [
      'Também podem ser tratados dados técnicos relacionados ao uso e à segurança do site, como página acessada, origem ou página de referência, data e horário das interações, identificadores técnicos necessários para reconhecer o mesmo navegador, evitar duplicidades e proteger o formulário, além de parâmetros de campanha, como UTM, GCLID, GBRAID e WBRAID, quando a mensuração de campanhas estiver habilitada. Os identificadores usados internamente para reconhecer o visitante e controlar tentativas de envio são protegidos tecnicamente. O identificador original utilizado pelo navegador não é armazenado diretamente no banco de leads.',
    ],
  },
  {
    number: '04',
    title: 'Formulários e leads parciais',
    introParagraphs: [
      'Quando o visitante informa um e-mail ou número de WhatsApp válido, o site pode criar ou atualizar um registro parcial antes do clique no botão final do formulário.',
      'Esse registro parcial pode ser utilizado para:',
    ],
    bullets: [
      'preservar o andamento do preenchimento;',
      'evitar perda das informações já fornecidas;',
      'restaurar os campos quando o visitante retornar utilizando o mesmo navegador;',
      'permitir um contato limitado e relacionado à solicitação iniciada, quando aplicável;',
      'prevenir duplicidades e falhas no envio.',
    ],
    outroParagraphs: [
      'O contato relacionado a um formulário não concluído deverá ser proporcional, limitado ao serviço demonstrado pelo visitante e interrompido quando houver oposição ou solicitação para não receber novas mensagens. A Apontual recomenda que o visitante não envie documentos, dados financeiros, senhas ou dados pessoais sensíveis sem solicitação prévia da equipe.',
    ],
  },
  {
    number: '05',
    title: 'Para quais finalidades os dados são utilizados',
    introParagraphs: ['Os dados pessoais podem ser utilizados para:'],
    bullets: [
      'responder solicitações;',
      'iniciar ou dar continuidade ao atendimento;',
      'compreender o serviço procurado;',
      'elaborar propostas;',
      'realizar procedimentos preliminares relacionados a uma possível contratação;',
      'prestar serviços contratados;',
      'preencher novamente dados anteriormente informados no mesmo navegador;',
      'identificar e evitar registros duplicados;',
      'prevenir fraudes, abusos e uso automatizado indevido;',
      'proteger o site, o formulário e o banco de dados;',
      'medir o desempenho de páginas, formulários e campanhas, quando essa mensuração estiver habilitada;',
      'cumprir obrigações legais, regulatórias, fiscais, contábeis ou contratuais;',
      'exercer ou defender direitos da Apontual, de seus clientes ou de terceiros.',
    ],
    outroParagraphs: [
      'Os dados fornecidos para uma solicitação de atendimento não serão utilizados para finalidades incompatíveis ou para comunicações comerciais sem relação com o contexto informado, salvo quando houver uma base legal adequada e a transparência necessária.',
    ],
  },
  {
    number: '06',
    title: 'Bases legais do tratamento',
    introParagraphs: [
      'Conforme a atividade realizada, a Apontual poderá tratar dados pessoais com base em:',
    ],
    bullets: [
      'execução de contrato ou de procedimentos preliminares relacionados a contrato, realizados a pedido do titular;',
      'legítimo interesse da Apontual ou de terceiros, respeitados os direitos, as liberdades e as expectativas legítimas do titular;',
      'cumprimento de obrigação legal ou regulatória;',
      'exercício regular de direitos em processo judicial, administrativo ou arbitral;',
      'consentimento, quando essa base legal for necessária para uma finalidade determinada.',
    ],
    outroParagraphs: [
      'O legítimo interesse poderá ser utilizado, conforme aplicável, para segurança, prevenção de fraude, continuidade do formulário, preservação da solicitação iniciada e contato limitado relacionado ao serviço procurado. Quando o tratamento depender de consentimento, ele será solicitado de forma específica, informada e separada. O envio do formulário não será tratado automaticamente como consentimento para publicidade personalizada, remarketing ou uso indiscriminado dos dados.',
    ],
  },
  {
    number: '07',
    title: 'Cookies, armazenamento local e identificadores necessários',
    introParagraphs: [
      'O site pode utilizar cookies, armazenamento local e tecnologias semelhantes necessários para:',
    ],
    bullets: [
      'manter o funcionamento do formulário;',
      'reconhecer o navegador durante uma solicitação;',
      'recuperar informações anteriormente preenchidas;',
      'evitar registros duplicados;',
      'aplicar mecanismos de segurança e controle de abuso;',
      'preservar preferências de privacidade.',
    ],
    outroParagraphs: [
      'Esses recursos necessários podem funcionar independentemente da autorização para cookies analíticos ou publicitários, pois são usados para segurança e funcionamento do serviço solicitado. Cookies e identificadores não necessários, destinados a análise, publicidade ou personalização, deverão respeitar as preferências apresentadas pelo visitante na solução de gestão de cookies, quando essas ferramentas forem implementadas.',
    ],
  },
  {
    number: '08',
    title: 'Ferramentas do ecossistema Google',
    introParagraphs: [
      'A Apontual poderá utilizar ferramentas do ecossistema Google para administrar, medir e melhorar sua presença digital, incluindo:',
    ],
    bullets: [
      'Google Tag Manager, para organização e gerenciamento de tags;',
      'Google Analytics 4, para análise de uso e desempenho do site;',
      'Google Ads, para mensuração de campanhas e conversões;',
      'Google Search Console, para acompanhamento da presença do site nos resultados de busca;',
      'Google Consent Mode, para comunicar às ferramentas do Google as escolhas de privacidade do visitante.',
    ],
    outroParagraphs: [
      'Quando essas ferramentas forem habilitadas, o funcionamento das tags poderá variar de acordo com as preferências de cookies e os indicadores de consentimento aplicáveis a armazenamento para análise, armazenamento relacionado à publicidade, envio de dados do usuário relacionados à publicidade e personalização de anúncios. A Apontual também poderá utilizar recursos de conversões aprimoradas. Quando ativados, determinados dados fornecidos pelo usuário, como e-mail ou telefone, poderão ser normalizados, protegidos por hash e utilizados para melhorar a atribuição de conversões. O uso de conversões aprimoradas, remarketing ou publicidade personalizada deverá respeitar as configurações de privacidade aplicáveis, as escolhas do visitante e a legislação vigente. A simples exibição da frase informativa abaixo do formulário não representa autorização para publicidade personalizada, remarketing ou compartilhamento de dados de contato com o Google.',
    ],
  },
  {
    number: '09',
    title: 'Compartilhamento de dados',
    introParagraphs: [
      'A Apontual pode compartilhar dados com prestadores necessários para a operação do site e do atendimento, como:',
    ],
    bullets: [
      'serviços de hospedagem e infraestrutura;',
      'fornecedores de banco de dados;',
      'ferramentas de automação;',
      'serviços de segurança e monitoramento;',
      'plataformas de comunicação, incluindo o WhatsApp;',
      'ferramentas de análise, mensuração e publicidade, quando habilitadas;',
      'consultores, contadores, advogados ou outros profissionais envolvidos na prestação do serviço;',
      'autoridades públicas, quando houver obrigação legal ou determinação válida.',
    ],
    outroParagraphs: [
      'O compartilhamento será limitado aos dados necessários para cada finalidade. A Apontual não vende dados pessoais.',
    ],
  },
  {
    number: '10',
    title: 'Transferência internacional de dados',
    introParagraphs: [
      'Alguns fornecedores de tecnologia utilizados pela Apontual podem armazenar ou processar informações em outros países.',
      'Quando houver transferência internacional, a Apontual buscará utilizar fornecedores que adotem medidas de segurança e mecanismos compatíveis com a legislação aplicável à proteção de dados.',
    ],
  },
  {
    number: '11',
    title: 'Por quanto tempo os dados são mantidos',
    introParagraphs: [
      'Os dados serão mantidos pelo período necessário para cumprir as finalidades informadas e as obrigações aplicáveis.',
    ],
    bullets: [
      'leads parciais podem ser mantidos por até 90 dias após a última atividade;',
      'leads concluídos que não resultarem em contratação podem ser mantidos por até 24 meses após a última atividade;',
      'dados de clientes, contratos e serviços efetivamente prestados podem ser mantidos por períodos superiores quando necessários para obrigações legais, fiscais, contábeis, contratuais ou para o exercício regular de direitos.',
    ],
    outroParagraphs: [
      'Após o encerramento do prazo aplicável, os dados poderão ser eliminados, anonimizados ou mantidos de forma restrita quando houver outra base legal para conservação.',
    ],
  },
  {
    number: '12',
    title: 'Segurança dos dados',
    introParagraphs: [
      'A Apontual adota medidas técnicas e administrativas destinadas a reduzir riscos de acesso não autorizado, perda, destruição, alteração, divulgação ou uso indevido dos dados pessoais.',
      'Entre essas medidas podem estar:',
    ],
    bullets: [
      'controle de acesso;',
      'restrição de permissões;',
      'validação das informações enviadas;',
      'proteção dos identificadores do visitante;',
      'mecanismos contra duplicidade e automação indevida;',
      'monitoramento de dependências e vulnerabilidades;',
      'políticas de segurança no banco de dados;',
      'conexões protegidas por HTTPS;',
      'retenção e exclusão automática de registros expirados.',
    ],
    outroParagraphs: [
      'Nenhum ambiente digital é completamente livre de riscos. Caso seja identificado um incidente relevante, serão adotadas as providências cabíveis conforme a legislação aplicável.',
    ],
  },
  {
    number: '13',
    title: 'Direitos do titular',
    introParagraphs: ['O titular pode solicitar, conforme aplicável:'],
    bullets: [
      'confirmação da existência de tratamento;',
      'acesso aos seus dados;',
      'correção de dados incompletos, inexatos ou desatualizados;',
      'informação sobre o compartilhamento de dados;',
      'anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;',
      'eliminação de dados tratados com consentimento, quando aplicável;',
      'revogação do consentimento;',
      'informação sobre a possibilidade de não fornecer consentimento e sobre as consequências;',
      'oposição a determinado tratamento, quando cabível;',
      'portabilidade, conforme regulamentação aplicável;',
      'revisão de decisões tomadas exclusivamente com base em tratamento automatizado, quando aplicável.',
    ],
    outroParagraphs: [
      'Algumas solicitações poderão não resultar em exclusão imediata quando a conservação for necessária para cumprimento de obrigação legal, exercício de direitos ou outra hipótese permitida pela legislação.',
    ],
  },
  {
    number: '14',
    title: 'Como exercer seus direitos',
    introParagraphs: [
      'Para solicitar acesso, correção, exclusão, oposição ou informações sobre o tratamento de dados, o titular pode entrar em contato pelo e-mail:',
    ],
    contactEmail: 'contato@apontualgestaocontabil.com.br',
    outroParagraphs: [
      'A Apontual poderá solicitar informações adicionais para confirmar a identidade do solicitante e impedir acesso indevido aos dados de terceiros.',
    ],
  },
  {
    number: '15',
    title: 'Dados sensíveis e dados de crianças e adolescentes',
    introParagraphs: [
      'Os formulários do site não foram criados para coletar dados pessoais sensíveis, documentos ou informações de crianças e adolescentes.',
      'O visitante não deve inserir espontaneamente informações sobre saúde, biometria, origem racial ou étnica, religião, opinião política, filiação sindical, vida sexual ou outros dados sensíveis.',
      'Caso esse tipo de informação seja recebido sem necessidade, a Apontual poderá eliminá-lo ou restringir seu tratamento.',
    ],
  },
  {
    number: '16',
    title: 'WhatsApp e links externos',
    introParagraphs: [
      'Ao clicar em um botão do WhatsApp ou em outro link externo, o visitante será direcionado para um ambiente administrado por terceiro.',
      'As informações enviadas nesses ambientes também estarão sujeitas aos termos, políticas de privacidade e práticas de segurança do respectivo fornecedor.',
      'A Apontual utilizará as informações enviadas pelo WhatsApp para atendimento, análise da solicitação, continuidade do contato e eventual prestação do serviço solicitado.',
    ],
  },
  {
    number: '17',
    title: 'Alterações nesta Política',
    introParagraphs: [
      'Esta Política poderá ser atualizada para refletir mudanças no site, nos formulários, nos serviços, nas ferramentas utilizadas ou nas exigências legais.',
      'A versão atualizada será publicada nesta página com a nova data de atualização.',
      'Mudanças relevantes nas finalidades, no compartilhamento ou nas ferramentas de tratamento poderão ser comunicadas com destaque apropriado.',
    ],
  },
];

export function PoliticaPrivacidadePage({
  onNavigate,
}: PoliticaPrivacidadePageProps) {
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
            Documento Legal · LGPD · Última atualização: 23/07/2026
          </p>
          <h1
            className="font-extrabold tracking-tight leading-[1.12] text-white mb-4 [text-wrap:balance]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Política de Privacidade
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            A{' '}
            <strong className="text-white font-semibold">
              Apontual Gestão Contábil
            </strong>{' '}
            valoriza a privacidade e a proteção dos dados pessoais das pessoas
            que acessam seu site, preenchem formulários ou entram em contato
            pelos canais de atendimento.
          </p>
        </div>
      </section>

      {/* Conteúdo Completo das 17 Seções */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {PRIVACY_SECTIONS.map((section) => (
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

              {section.introParagraphs && (
                <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  {section.introParagraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              )}

              {section.companyDetails && (
                <div className="mt-5">
                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    Dados da empresa
                  </p>
                  <dl className="bg-slate-50 border border-slate-200 rounded-xl divide-y divide-slate-200 text-sm max-w-3xl">
                    {section.companyDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4"
                      >
                        <dt className="font-semibold text-navy-900 shrink-0">
                          {detail.label}
                        </dt>
                        <dd className="text-slate-600 sm:text-right break-all sm:break-words min-w-0">
                          {detail.href ? (
                            <a
                              href={detail.href}
                              target={
                                detail.href.startsWith('http')
                                  ? '_blank'
                                  : undefined
                              }
                              rel={
                                detail.href.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                              className="text-emerald-700 font-medium hover:underline underline-offset-4"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            detail.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {section.bullets && (
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-600 leading-relaxed list-disc pl-5 max-w-3xl">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.contactEmail && (
                <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                  <span className="font-semibold text-navy-900">E-mail</span>
                  <a
                    href={`mailto:${section.contactEmail}`}
                    className="text-emerald-700 font-semibold hover:underline underline-offset-4 break-all"
                  >
                    {section.contactEmail}
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

          {/* Card de Contato para Solicitações de Privacidade */}
          <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">
                  Apontual Gestão Contábil · CRC GO-029941/O-8
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Dúvidas ou solicitações sobre seus dados pessoais?
              </h2>
              <p className="text-sm text-slate-300">
                Envie sua solicitação diretamente para{' '}
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
                Página de Contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
