import { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronDown,
  Clock,
  FileText,
} from 'lucide-react';
import type { PageRoute } from '../components/Header';
import { LeadFormSection } from '../components/LeadFormSection';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  ABERTURA_BENEFITS,
  ABERTURA_DOCUMENTS,
  ABERTURA_FAQ_ITEMS,
  ABERTURA_STEPS,
} from '../data/aberturaCnpjData';
import { NECESSIDADE_OPTIONS } from '../data/landingData';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';

interface AberturaDeCnpjPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export function AberturaDeCnpjPage({ onNavigate }: AberturaDeCnpjPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(ABERTURA_FAQ_ITEMS[0].id);

  const handleToggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. HERO DA PÁGINA ABERTURA DE CNPJ */}
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
              Abertura de Empresa e CNPJ · Sede em Goiás · CRC-GO 029941/O-8
            </p>

            <h1
              className="font-extrabold tracking-tight leading-[1.12] text-white mb-5 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Abra seu CNPJ sem burocracia e com o{' '}
              <span className="text-emerald-400">enquadramento certo</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
              Assessoria completa da{' '}
              <strong className="text-white font-semibold">
                Apontual Gestão Contábil
              </strong>{' '}
              para abertura de empresas, escolha de regime tributário e
              legalização em Goiás — do planejamento inicial até a emissão da sua
              primeira nota fiscal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Quero abrir minha empresa (CNPJ) e gostaria de saber prazos e valores.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('abertura_page_hero_cta')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-base px-6 sm:px-8 py-4 rounded-xl transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Quero Abrir Minha Empresa</span>
              </a>
              <a
                href="#/abertura-de-cnpj#diagnostico-rapido"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('abertura-de-cnpj', '#diagnostico-rapido');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-[0.98] text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                Solicitar Orçamento por Formulário
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/90 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <Clock
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium tabular-nums">
                  CNPJ em 2 a 5 dias úteis
                </span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <FileText
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">CNAEs e Regime Estratégicos</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-2 px-3">
                <Building2
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">JUCEG, SEFAZ-GO e Prefeituras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OS 3 PASSOS DA ABERTURA DE EMPRESA */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Legalização estruturada
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3 [text-wrap:balance]">
              Como funciona a abertura da sua empresa em 3 etapas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Você não precisa lidar com formulários complexos da Junta Comercial
              ou prefeitura. Nossa equipe conduz cada etapa com agilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABERTURA_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200"
              >
                <span
                  className={`w-10 h-10 rounded-full font-extrabold flex items-center justify-center text-sm mb-5 tabular-nums ${
                    index === ABERTURA_STEPS.length - 1
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

      {/* 3. ASSESSORIA TRIBUTÁRIA + CHECKLIST DE DOCUMENTOS */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 min-w-0 flex flex-col justify-center">
              <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
                Comece do jeito certo
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4 [text-wrap:balance]">
                Por que abrir seu CNPJ com assessoria contábil desde o primeiro
                dia?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Escolher um CNAE inadequado ou o regime tributário errado na
                abertura pode fazer sua empresa pagar imposto a mais ou ficar
                impedida de emitir notas para clientes importantes.
              </p>

              <ul className="space-y-5">
                {ABERTURA_BENEFITS.map((benefit) => (
                  <li key={benefit.title} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-4 h-4"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 min-w-0 flex">
              <div className="w-full bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-2">
                    Envio Digital pelo Celular
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
                    O que você precisa para iniciar a abertura
                  </h3>

                  <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                    {ABERTURA_DOCUMENTS.map((doc) => (
                      <li key={doc} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    'Olá! Já quero iniciar a abertura do meu CNPJ com a Apontual. Pode me orientar sobre os documentos?'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('abertura_page_checklist_cta')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Iniciar Abertura pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERGUNTAS FREQUENTES SOBRE ABERTURA DE CNPJ */}
      <section
        id="duvidas"
        className="scroll-mt-20 py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-bold text-xs sm:text-sm tracking-wide mb-2">
              Esclarecimentos antes de começar
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight [text-wrap:balance]">
              Dúvidas comuns sobre Abertura de CNPJ
            </h2>
          </div>

          <div className="space-y-3">
            {ABERTURA_FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-slate-200 rounded-2xl bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => handleToggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`abertura-faq-panel-${item.id}`}
                    className="w-full min-h-[52px] flex items-center justify-between p-5 text-left font-bold text-navy-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50 active:bg-slate-100 transition duration-150 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-emerald-600"
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
                      id={`abertura-faq-panel-${item.id}`}
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

      {/* 5. FORMULÁRIO DE ABERTURA */}
      <LeadFormSection
        defaultNeed={NECESSIDADE_OPTIONS[0]}
        title="Solicite a abertura do seu CNPJ agora"
        subtitle="Preencha os campos ao lado para analisarmos sua atividade, viabilidade e o melhor enquadramento tributário já pelo WhatsApp."
      />
    </>
  );
}
