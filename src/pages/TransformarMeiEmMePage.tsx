import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  ChevronDown,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import type { PageRoute } from '../components/Header';
import { LeadFormSection } from '../components/LeadFormSection';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { NECESSIDADE_OPTIONS } from '../data/landingData';
import {
  MEI_DELAY_RISKS,
  MEI_FAQ_ITEMS,
  MEI_SIGNALS,
  MEI_TRANSITION_STEPS,
} from '../data/meiToMeData';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';

interface TransformarMeiEmMePageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export function TransformarMeiEmMePage({
  onNavigate,
}: TransformarMeiEmMePageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(MEI_FAQ_ITEMS[0].id);

  const handleToggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. HERO DA PÁGINA TRANSFORMAR MEI EM ME */}
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
              Transformação de MEI em ME · Sede em Goiás · CRC-GO 029941/O-8
            </p>

            <h1
              className="font-extrabold tracking-tight leading-[1.12] text-white mb-5 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Seu MEI cresceu?{' '}
              <span className="text-emerald-400">Transforme em ME</span> com
              segurança.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
              A <strong className="text-white font-semibold">Apontual Gestão Contábil</strong>{' '}
              orienta todo o desenquadramento, a mudança para Microempresa (ME) no
              Simples Nacional e os próximos passos para o seu negócio continuar
              crescendo sem sustos fiscais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Meu MEI cresceu e quero transformar para ME com segurança. Gostaria de uma análise.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('mei_page_hero_cta')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-base px-6 sm:px-8 py-4 rounded-xl transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Analisar meu MEI no WhatsApp</span>
              </a>
              <a
                href="#/transformar-mei-em-me#diagnostico-rapido"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('transformar-mei-em-me', '#diagnostico-rapido');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-[0.98] text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                Solicitar Diagnóstico por Formulário
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/90 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <TrendingUp
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Desenquadramento Planejado</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <FileCheck2
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Enquadramento no Simples Nacional</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <ShieldCheck
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">Suporte Digital em Todo Goiás</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SINAIS DE QUE SEU MEI PRECISA VIRAR ME */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Diagnóstico de crescimento
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3 [text-wrap:balance]">
              Sinais de que seu MEI precisa virar ME
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Identificar o momento certo da mudança protege seu caixa e permite
              escalar vendas sem bloqueios na Receita Federal ou SEFAZ-GO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEI_SIGNALS.map((signal) => (
              <article
                key={signal.number}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-sm font-bold text-emerald-700 tabular-nums block mb-3">
                    {signal.number}.
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">
                    {signal.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RISCOS DE ESPERAR DEMAIS PARA SAIR DO MEI */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 min-w-0 flex flex-col justify-center">
              <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
                Prevenção tributária
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4 [text-wrap:balance]">
                Esperar demais para sair do MEI pode custar caro
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Muitos empreendedores só buscam a contabilidade quando o sistema já
                bloqueou a emissão de nota fiscal ou quando recebem notificações por
                excesso de faturamento. Planejar antes sai muito mais barato.
              </p>

              <ul className="space-y-5">
                {MEI_DELAY_RISKS.map((risk) => (
                  <li key={risk.title} className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                        {risk.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {risk.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 min-w-0 flex">
              <div className="w-full bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-2">
                    Transição Assistida · CRC-GO 029941/O-8
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    O que você ganha ao planejar a saída com a Apontual
                  </h3>

                  <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                    <li className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>
                        Cálculo exato do menor anexo no Simples Nacional e aplicação de
                        Fator R quando aplicável.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>
                        Manutenção do mesmo número de CNPJ, conta bancária e histórico
                        comercial.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>
                        Emissão de notas fiscais liberada para vender para outras
                        empresas sem teto restrito.
                      </span>
                    </li>
                  </ul>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    'Olá! Gostaria de fazer um diagnóstico preventivo do meu MEI para virar ME.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('mei_page_risk_cta')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Fazer Diagnóstico Preventivo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA PARA TRANSFORMAR MEI EM ME */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Passo a passo organizado
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight [text-wrap:balance]">
              Como funciona para transformar MEI em ME
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEI_TRANSITION_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200"
              >
                <span
                  className={`w-10 h-10 rounded-full font-extrabold flex items-center justify-center text-sm mb-5 tabular-nums ${
                    index === MEI_TRANSITION_STEPS.length - 1
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

      {/* 5. DÚVIDAS COMUNS SOBRE TRANSFORMAR MEI EM ME */}
      <section
        id="duvidas"
        className="scroll-mt-20 py-16 sm:py-20 bg-white border-t border-slate-200/80"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Esclarecimentos diretos
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight [text-wrap:balance]">
              Dúvidas comuns sobre transformar MEI em ME
            </h2>
          </div>

          <div className="space-y-3">
            {MEI_FAQ_ITEMS.map((item) => {
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
                    aria-controls={`mei-faq-panel-${item.id}`}
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
                      id={`mei-faq-panel-${item.id}`}
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

      {/* 6. FORMULÁRIO PRÉ-SELECIONADO PARA MIGRAÇÃO MEI -> ME */}
      <LeadFormSection
        defaultNeed={NECESSIDADE_OPTIONS[1]}
        title="Transforme seu MEI em ME com orientação contábil"
        subtitle="Informe seus dados para analisarmos o faturamento e prepararmos a transição segura para Microempresa no Simples Nacional."
      />
    </>
  );
}
