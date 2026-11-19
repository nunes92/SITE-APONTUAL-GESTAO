import { useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronDown,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import type { PageRoute } from '../components/Header';
import { LeadFormSection } from '../components/LeadFormSection';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { NECESSIDADE_OPTIONS } from '../data/landingData';
import {
  INCLUDED_IN_SWITCH,
  SWITCH_FAQ_ITEMS,
  SWITCH_PAIN_POINTS,
  SWITCH_STEPS,
  WHO_IS_IT_FOR,
} from '../data/trocarContadorData';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';

interface TrocarDeContadorPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export function TrocarDeContadorPage({
  onNavigate,
}: TrocarDeContadorPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(SWITCH_FAQ_ITEMS[0].id);

  const handleToggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. HERO SECTION */}
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
              Trocar de Contador · Sede em Goiás · CRC-GO 029941/O-8
            </p>

            <h1
              className="font-extrabold tracking-tight leading-[1.12] text-white mb-5 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Troque de contador com a{' '}
              <span className="text-emerald-400">Apontual</span> sem dor de
              cabeça.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
              Conduzimos sua migração contábil com clareza, suporte direto pelo
              WhatsApp e uma rotina organizada para sua empresa seguir sem ruído,
              sem retrabalho e sem parar sua operação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Quero trocar de contador e gostaria de entender como funciona a migração para a Apontual.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('troca_page_hero_cta')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-base px-6 sm:px-8 py-4 rounded-xl transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href="#/trocar-de-contador#diagnostico-rapido"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('trocar-de-contador', '#diagnostico-rapido');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-[0.98] text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                Fale com um especialista
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/90 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <ShieldCheck
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Migração Sem Parar Operação</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <MessageSquare
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Atendimento Direto no WhatsApp</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <MapPin
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Sede em Goiás · Atendimento Digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUAR COM O CONTADOR ERRADO PODE CUSTAR CARO */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Sinais de alerta
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3 [text-wrap:balance]">
              Continuar com o contador errado pode custar caro
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Atrasos na rotina fiscal, falta de transparência e ausência de
              orientação preventiva geram custos ocultos que pesam no caixa da sua
              empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SWITCH_PAIN_POINTS.map((pain) => (
              <article
                key={pain.number}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200"
              >
                <span className="text-sm font-bold text-emerald-700 tabular-nums block mb-2.5">
                  {pain.number}.
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                  {pain.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {pain.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POR QUE TROCAR PARA A APONTUAL + O QUE ESTÁ INCLUSO */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 min-w-0 flex flex-col justify-center">
              <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
                Sua rotina contábil fica mais clara
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4 [text-wrap:balance]">
                Por que trocar de contador para a Apontual?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Com a Apontual, você ganha clareza para organizar impostos,
                entender suas obrigações e acompanhar mudanças tributárias com um
                atendimento humano do primeiro contato até a rotina mensal.
              </p>

              <h3 className="text-base font-bold text-navy-900 mb-4">
                Para quem quer trocar de contador com segurança
              </h3>
              <ul className="space-y-3.5">
                {WHO_IS_IT_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-4 h-4"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 min-w-0 flex">
              <div className="w-full bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-2">
                    Transição Completa e Assistida
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
                    O que está incluso na troca de contador
                  </h3>

                  <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                    {INCLUDED_IN_SWITCH.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    'Olá! Quero ser cliente da Apontual e iniciar a troca de contador da minha empresa.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('troca_page_included_cta')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Seja Nosso Cliente!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA + CONTABILIDADE DIGITAL EM GOIÁS */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Processo sem ruído
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3 [text-wrap:balance]">
              Como funciona para trocar de contador
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Do primeiro atendimento até o fechamento mensal, cada etapa é
              conduzida com comunicação objetiva para você não perder tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SWITCH_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200"
              >
                <span
                  className={`w-10 h-10 rounded-full font-extrabold flex items-center justify-center text-sm mb-5 tabular-nums ${
                    index === SWITCH_STEPS.length - 1
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

          {/* Bloco Regional Goiás */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                Contabilidade digital para trocar de contador em Goiás
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Atendemos empresas em Aparecida de Goiânia, Goiânia e em diversas
                cidades de Goiás com envio ágil de documentos pelo celular,
                acompanhamento de obrigações estaduais na SEFAZ-GO e atendimento
                humano pelo WhatsApp.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(
                'Olá! Tenho empresa em Goiás e quero falar com um especialista sobre troca de contador.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('troca_page_goias_cta')}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 active:scale-[0.98] text-white font-bold text-sm px-5 py-3 rounded-xl transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Fale com um especialista</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. DÚVIDAS COMUNS SOBRE TROCAR DE CONTADOR */}
      <section
        id="duvidas"
        className="scroll-mt-20 py-16 sm:py-20 bg-white border-t border-slate-200/80"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Dúvidas antes de trocar de contador?
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight [text-wrap:balance]">
              Dúvidas comuns sobre trocar de contador
            </h2>
          </div>

          <div className="space-y-3">
            {SWITCH_FAQ_ITEMS.map((item) => {
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
                    aria-controls={`switch-faq-panel-${item.id}`}
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
                      id={`switch-faq-panel-${item.id}`}
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

      {/* 6. CTA FINAL COM FORMULÁRIO PRÉ-SELECIONADO */}
      <LeadFormSection
        defaultNeed={NECESSIDADE_OPTIONS[2]}
        title="Quer trocar de contador sem dor de cabeça?"
        subtitle="Preencha os campos ao lado para iniciar sua migração contábil com a Apontual já pelo WhatsApp, com clareza e acompanhamento desde o primeiro dia."
      />
    </>
  );
}
