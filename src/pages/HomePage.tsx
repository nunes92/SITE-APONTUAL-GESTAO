import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageSquare,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { ApontualLogo } from '../components/ApontualLogo';
import type { PageRoute } from '../components/Header';
import { LeadFormSection } from '../components/LeadFormSection';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  DIFFERENTIALS,
  FAQ_ITEMS,
  NECESSIDADE_OPTIONS,
  PROCESS_STEPS,
  SOLUTIONS,
} from '../data/landingData';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const handleToggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-navy-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide mb-5">
              Aparecida de Goiânia · Goiânia e região · CRC-GO 029941/O-8
            </p>

            <h1
              className="font-extrabold tracking-tight leading-[1.12] text-white mb-5 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Abra sua empresa sem burocracia ou{' '}
              <span className="text-emerald-400">reduza seus impostos</span> com
              segurança.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
              Contabilidade consultiva especializada em{' '}
              <strong className="text-white font-semibold">
                comércios, prestadores de serviço e migração de MEI para ME
              </strong>
              . Atendimento direto pelo WhatsApp, sem robôs e sem surpresas no fim do
              mês.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Vim pelo Google e gostaria de fazer um diagnóstico gratuito / orçamento contábil.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_main_cta')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-base px-6 sm:px-8 py-4 rounded-xl transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Falar com um Contador Agora</span>
              </a>
              <a
                href="#diagnostico-rapido"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#diagnostico-rapido');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-[0.98] text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                Solicitar Orçamento por Formulário
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/90 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <ShieldCheck
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">
                  Registro Ativo no <strong className="text-white">CRC-GO</strong>
                </span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <MessageSquare
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Atendimento Direto e Humano</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <Smartphone
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">100% Digital ou Presencial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DORES E SOLUÇÕES */}
      <section id="solucoes" className="scroll-mt-20 py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Soluções sob medida
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3 [text-wrap:balance]">
              Como ajudamos sua empresa a crescer sem dor de cabeça fiscal
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Esqueça a contabilidade lenta e cheia de termos difíceis. Cuidamos da
              burocracia para você focar nas vendas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {SOLUTIONS.map((item) => (
              <article
                key={item.id}
                className={`${
                  item.featured ? 'md:col-span-7' : 'md:col-span-5'
                } bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between transition-colors hover:border-slate-300`}
              >
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-bold text-emerald-700 tabular-nums">
                      {item.number}.
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={buildWhatsAppUrl(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(item.trackingOrigin)}
                    className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm group whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 rounded"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>

                  {item.id === 'abertura' && (
                    <a
                      href="#/abertura-de-cnpj"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('abertura-de-cnpj');
                      }}
                      className="text-xs font-semibold text-navy-900 hover:text-emerald-700 underline underline-offset-4 transition-colors whitespace-nowrap"
                    >
                      Ver detalhes da abertura
                    </a>
                  )}
                  {item.id === 'mei-me' && (
                    <a
                      href="#/transformar-mei-em-me"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('transformar-mei-em-me');
                      }}
                      className="text-xs font-semibold text-navy-900 hover:text-emerald-700 underline underline-offset-4 transition-colors whitespace-nowrap"
                    >
                      Ver detalhes da transformação
                    </a>
                  )}
                  {item.id === 'troca' && (
                    <a
                      href="#/trocar-de-contador"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('trocar-de-contador');
                      }}
                      className="text-xs font-semibold text-navy-900 hover:text-emerald-700 underline underline-offset-4 transition-colors whitespace-nowrap"
                    >
                      Ver detalhes da troca
                    </a>
                  )}
                  {item.id === 'gestao' && (
                    <a
                      href="#/nossos-planos"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('nossos-planos');
                      }}
                      className="text-xs font-semibold text-navy-900 hover:text-emerald-700 underline underline-offset-4 transition-colors whitespace-nowrap"
                    >
                      Ver nossos planos
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTORIDADE E DIFERENCIAIS */}
      <section
        id="diferenciais"
        className="scroll-mt-20 py-16 sm:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 min-w-0 flex flex-col justify-center">
              <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
                Por que escolher a Apontual
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4 [text-wrap:balance]">
                A agilidade do digital com a segurança de falar direto com quem assina
                pela sua empresa.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Plataformas automáticas de baixo custo deixam você sozinho abrindo
                chamados quando surge um problema na Receita ou Prefeitura. Aqui, você
                tem acompanhamento próximo e preventivo.
              </p>

              <ul className="space-y-5">
                {DIFFERENTIALS.map((diff) => (
                  <li key={diff.title} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-4 h-4"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                        {diff.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {diff.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 min-w-0 flex">
              <div className="w-full bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center p-2 shrink-0">
                      <ApontualLogo />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-0.5">
                        Escritório Regularizado · CRC-GO
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Apontual Gestão Contábil
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                        Contador:{' '}
                        <strong className="text-white">Lucas Nunes Ferreira</strong>
                      </p>
                      <p className="text-emerald-400 font-semibold text-xs sm:text-sm tabular-nums">
                        CRC-GO 029941/O-8
                      </p>
                    </div>
                  </div>

                  <blockquote className="bg-navy-800/80 rounded-xl p-4 text-slate-200 text-sm leading-relaxed mb-6 italic">
                    “Nosso compromisso é traduzir os números da sua empresa em
                    tranquilidade e economia legal de impostos, com transparência total
                    desde o primeiro contato.”
                  </blockquote>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-3 mb-6 text-center">
                    <div className="bg-navy-800 rounded-xl p-3.5">
                      <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 tabular-nums">
                        &lt; 5 min
                      </span>
                      <span className="text-xs text-slate-300">
                        Tempo médio de resposta
                      </span>
                    </div>
                    <div className="bg-navy-800 rounded-xl p-3.5">
                      <span className="block text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                        100%
                      </span>
                      <span className="text-xs text-slate-300">
                        Conformidade Fiscal
                      </span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Gostaria de agendar uma conversa rápida sobre a contabilidade da minha empresa.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('card_autoridade')}
                    className="w-full inline-flex items-center justify-center py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    Falar Diretamente com o Contador
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-20 py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Simples e sem enrolação
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight [text-wrap:balance]">
              Como funciona na prática
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200"
              >
                <span
                  className={`w-10 h-10 rounded-full font-extrabold flex items-center justify-center text-sm mb-5 tabular-nums ${
                    index === PROCESS_STEPS.length - 1
                      ? 'bg-emerald-600 text-white'
                      : 'bg-navy-900 text-white'
                  }`}
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PERGUNTAS FREQUENTES */}
      <section
        id="duvidas"
        className="scroll-mt-20 py-16 sm:py-20 bg-white border-t border-slate-200/80"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Tire suas dúvidas
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-slate-200 rounded-2xl bg-slate-50/70 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => handleToggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full min-h-[52px] flex items-center justify-between p-5 text-left font-bold text-navy-900 text-sm sm:text-base cursor-pointer hover:bg-slate-100/70 active:bg-slate-200/60 transition duration-150 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-emerald-600"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-3.5"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FORMULÁRIO RÁPIDO */}
      <LeadFormSection defaultNeed={NECESSIDADE_OPTIONS[0]} />
    </>
  );
}
