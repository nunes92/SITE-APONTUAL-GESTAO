import { useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronDown,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import type { PageRoute } from '../components/Header';
import { LeadFormSection } from '../components/LeadFormSection';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { NECESSIDADE_OPTIONS } from '../data/landingData';
import {
  PLANS,
  PLANS_DISCLAIMER,
  PLANS_FAQ_ITEMS,
} from '../data/planosData';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';

interface NossosPlanosPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export function NossosPlanosPage({ onNavigate }: NossosPlanosPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(PLANS_FAQ_ITEMS[0].id);

  const handleToggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. HERO DA PÁGINA NOSSOS PLANOS */}
      <section className="relative overflow-hidden bg-navy-900 text-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
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

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide mb-5">
              Nossos Planos · Sede em Goiás e Atendimento Nacional · CRC-GO 029941/O-8
            </p>

            <h1
              className="font-extrabold tracking-tight leading-[1.12] text-white mb-5 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Planos de contabilidade digital para{' '}
              <span className="text-emerald-400">cada fase</span> da sua empresa.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
              Explore os planos da{' '}
              <strong className="text-white font-semibold">
                Apontual Gestão Contábil
              </strong>{' '}
              estruturados por faixa de faturamento mensal, com rotina fiscal
              organizada, envio de impostos e suporte direto pelo WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Vi os planos no site da Apontual e gostaria de saber qual é o ideal para minha empresa.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('planos_page_hero_cta')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-base px-6 sm:px-8 py-4 rounded-xl transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href="#/nossos-planos#diagnostico-rapido"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('nossos-planos', '#diagnostico-rapido');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-[0.98] text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                Solicitar Proposta Personalizada
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/90 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <TrendingUp
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Faixas até 400K/mês</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <MessageSquare
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Suporte Direto no WhatsApp</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <ShieldCheck
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Simples Nacional e Lucro Presumido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLANOS PARA EMPRESAS */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Contabilidade Digital
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3 [text-wrap:balance]">
              Planos para empresas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Escolha a faixa compatível com o seu faturamento mensal ou fale
              conosco para montarmos um plano sob medida.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => {
              const isFeatured = Boolean(plan.featured);
              return (
                <article
                  key={plan.id}
                  className={`min-w-0 rounded-2xl p-6 sm:p-8 border flex flex-col justify-between ${
                    isFeatured
                      ? 'bg-navy-900 text-white border-slate-800'
                      : 'bg-white text-slate-800 border-slate-200'
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-bold tracking-wide mb-2 ${
                        isFeatured ? 'text-emerald-400' : 'text-emerald-700'
                      }`}
                    >
                      {plan.kicker}
                    </p>
                    <h3
                      className={`text-2xl font-extrabold tracking-tight ${
                        isFeatured ? 'text-white' : 'text-navy-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-2 pb-5 mb-6 border-b text-base font-bold tabular-nums ${
                        isFeatured
                          ? 'text-emerald-400 border-slate-800'
                          : 'text-navy-900 border-slate-200'
                      }`}
                    >
                      {plan.revenueCap}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured
                                ? 'text-emerald-400'
                                : 'text-emerald-700'
                            }`}
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                          <span
                            className={
                              isFeatured ? 'text-slate-200' : 'text-slate-600'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={buildWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(plan.trackingOrigin)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-extrabold text-sm active:scale-[0.98] transition duration-150 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isFeatured
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-navy-950 focus-visible:outline-emerald-400'
                        : 'bg-navy-900 hover:bg-navy-800 text-white focus-visible:outline-navy-900'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>{plan.ctaLabel}</span>
                  </a>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {PLANS_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* 3. DÚVIDAS FREQUENTES */}
      <section
        id="duvidas"
        className="scroll-mt-20 py-16 sm:py-20 bg-white border-t border-slate-200/80"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Esclarecimentos sobre os planos
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {PLANS_FAQ_ITEMS.map((item) => {
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
                    aria-controls={`planos-faq-panel-${item.id}`}
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
                      id={`planos-faq-panel-${item.id}`}
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

      {/* 4. FORMULÁRIO RÁPIDO */}
      <LeadFormSection
        defaultNeed={NECESSIDADE_OPTIONS[3]}
        title="Quer descobrir o plano ideal para sua empresa?"
        subtitle="Informe seus dados e sua necessidade para analisarmos o regime tributário, faturamento e enviarmos a proposta pelo WhatsApp."
      />
    </>
  );
}
