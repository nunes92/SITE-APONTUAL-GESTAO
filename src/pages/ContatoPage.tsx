import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  Check,
  Clock,
  Lock,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { ApontualLogo } from '../components/ApontualLogo';
import type { PageRoute } from '../components/Header';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  buildWhatsAppUrl,
  formatBrazilianPhone,
  isValidBrazilianPhone,
  trackWhatsAppClick,
} from '../utils/whatsapp';

interface ContatoPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

const CONTACT_WHATSAPP_NUMBER = '5562984227130';
const CONTACT_WHATSAPP_DISPLAY = '62 98422-7130';
const CONTACT_EMAIL = 'contato@apontualgestaocontabil.com.br';
const CONTACT_CRC = 'GO-029941/O-8';
const CONTACT_ADDRESS =
  'R. Alípio Junqueira - St. Serra Dourada - 3ª Etapa, Aparecida de Goiânia - GO, 74973-080';

const CONTACT_TOPICS = [
  'Abertura de empresa (CNPJ)',
  'Transformar MEI em ME',
  'Troca de contador',
  'Nossos Planos e contabilidade mensal',
  'Serviços diversos / Atendimento geral',
] as const;

interface ContactErrors {
  nome?: string;
  email?: string;
  whatsapp?: string;
}

interface SubmittedContact {
  nome: string;
  email: string;
  whatsapp: string;
  assunto: string;
  mensagem: string;
  whatsappUrl: string;
  mailtoUrl: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContatoPage({ onNavigate }: ContatoPageProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [assunto, setAssunto] = useState<string>(CONTACT_TOPICS[0]);
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState<SubmittedContact | null>(null);

  const handleNomeChange = (value: string) => {
    setNome(value);
    if (errors.nome && value.trim().length >= 2) {
      setErrors((prev) => ({ ...prev, nome: undefined }));
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (errors.email && isValidEmail(value.trim())) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatBrazilianPhone(value);
    setWhatsapp(formatted);
    if (errors.whatsapp && isValidBrazilianPhone(formatted)) {
      setErrors((prev) => ({ ...prev, whatsapp: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedNome = nome.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = whatsapp.trim();
    const trimmedMensagem = mensagem.trim();
    const nextErrors: ContactErrors = {};

    if (trimmedNome.length < 2) {
      nextErrors.nome = 'Informe seu nome para continuarmos.';
    }
    if (!isValidEmail(trimmedEmail)) {
      nextErrors.email = 'Informe um e-mail válido.';
    }
    if (!isValidBrazilianPhone(trimmedPhone)) {
      nextErrors.whatsapp = 'Informe um WhatsApp válido com DDD.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    trackWhatsAppClick('contato_page_form');

    const detalhesExtra = trimmedMensagem
      ? `\nDetalhes: ${trimmedMensagem}`
      : '';
    const textoWhatsApp = `Olá! Meu nome é *${trimmedNome}* (${trimmedPhone} · ${trimmedEmail}). Entrei pela página de Contato da Apontual sobre: *${assunto}*.${detalhesExtra}`;
    const whatsappUrl = buildWhatsAppUrl(
      textoWhatsApp,
      CONTACT_WHATSAPP_NUMBER
    );

    const emailSubject = `Contato pelo site — ${assunto} (${trimmedNome})`;
    const emailBody = `Nome: ${trimmedNome}\nE-mail: ${trimmedEmail}\nWhatsApp: ${trimmedPhone}\nAssunto: ${assunto}${
      trimmedMensagem ? `\n\nMensagem:\n${trimmedMensagem}` : ''
    }`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    setSubmitted({
      nome: trimmedNome,
      email: trimmedEmail,
      whatsapp: trimmedPhone,
      assunto,
      mensagem: trimmedMensagem,
      whatsappUrl,
      mailtoUrl,
    });
  };

  return (
    <>
      {/* 1. HERO DA PÁGINA CONTATO */}
      <section className="relative overflow-hidden bg-navy-900 text-white pt-10 pb-14 sm:pt-14 sm:pb-16">
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

          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide mb-4 tabular-nums">
              Contato · Sede em Goiás · CRC {CONTACT_CRC}
            </p>
            <h1
              className="font-extrabold tracking-tight leading-[1.12] text-white mb-4 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Fale com a Apontual
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Entre em contato com a{' '}
              <strong className="text-white font-semibold">
                Apontual Gestão Contábil
              </strong>{' '}
              para serviços diversos, abertura de CNPJ, migração de MEI para ME,
              troca de contador ou propostas de planos mensais.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CANAIS DIRETOS E FORMULÁRIO DE CONTATO */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Coluna Esquerda: Informações Oficiais APONTUAL GESTÃO CONTÁBIL */}
            <div className="lg:col-span-5 min-w-0 flex">
              <div className="w-full bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shrink-0">
                      <ApontualLogo />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-400 tracking-wide">
                        Sede: Goiás
                      </p>
                      <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                        APONTUAL GESTÃO CONTÁBIL
                      </h2>
                    </div>
                  </div>

                  <dl className="space-y-5 text-sm">
                    <div className="flex items-start gap-3.5">
                      <Mail
                        className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <dt className="text-xs font-semibold text-slate-400">
                          E-mail
                        </dt>
                        <dd className="mt-0.5 break-all">
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-white font-medium hover:text-emerald-400 transition-colors"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <WhatsAppIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          WhatsApp (horário comercial)
                        </dt>
                        <dd className="mt-0.5 tabular-nums">
                          <a
                            href={buildWhatsAppUrl(
                              'Olá! Vim pela página de Contato da Apontual e gostaria de atendimento.',
                              CONTACT_WHATSAPP_NUMBER
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackWhatsAppClick('contato_page_sidebar_whatsapp')
                            }
                            className="text-white font-semibold hover:text-emerald-400 transition-colors"
                          >
                            {CONTACT_WHATSAPP_DISPLAY}
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <ShieldCheck
                        className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          CRC responsável
                        </dt>
                        <dd className="mt-0.5 text-white font-semibold tabular-nums">
                          {CONTACT_CRC}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <MapPin
                        className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          Endereço — Sede em Goiás
                        </dt>
                        <dd className="mt-0.5 text-slate-200 leading-relaxed">
                          {CONTACT_ADDRESS}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock
                        className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          Horário de atendimento
                        </dt>
                        <dd className="mt-0.5 text-slate-200 space-y-1 tabular-nums">
                          <span className="block">
                            Segunda a Quarta: 08h00 às 18h00
                          </span>
                          <span className="block">Quinta: 09h00 às 18h00</span>
                          <span className="block">Sexta: 09h00 às 16h00</span>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Vim pela página de Contato da Apontual e gostaria de falar com a equipe.',
                      CONTACT_WHATSAPP_NUMBER
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('contato_page_card_cta')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>Chamar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Atendimento */}
            <div className="lg:col-span-7 min-w-0 flex">
              <div className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-center">
                {submitted ? (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check
                          className="w-6 h-6"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-navy-900">
                          Atendimento pronto para envio
                        </h2>
                        <p className="text-sm text-slate-600">
                          Escolha abaixo como prefere enviar sua solicitação à
                          Apontual.
                        </p>
                      </div>
                    </div>

                    <dl className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2.5 text-sm">
                      <div className="flex flex-wrap justify-between gap-2">
                        <dt className="text-slate-500">Nome:</dt>
                        <dd className="font-semibold text-navy-900">
                          {submitted.nome}
                        </dd>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2">
                        <dt className="text-slate-500">E-mail:</dt>
                        <dd className="font-medium text-navy-900">
                          {submitted.email}
                        </dd>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2">
                        <dt className="text-slate-500">WhatsApp:</dt>
                        <dd className="font-semibold text-navy-900 tabular-nums">
                          {submitted.whatsapp}
                        </dd>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2">
                        <dt className="text-slate-500">Assunto:</dt>
                        <dd className="font-semibold text-emerald-700">
                          {submitted.assunto}
                        </dd>
                      </div>
                      {submitted.mensagem && (
                        <div className="pt-2 border-t border-slate-200">
                          <dt className="text-slate-500 mb-1">Mensagem:</dt>
                          <dd className="text-slate-700 leading-relaxed">
                            {submitted.mensagem}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={submitted.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm transition duration-150 flex items-center justify-center gap-2 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" />
                        <span>Enviar pelo WhatsApp</span>
                      </a>
                      <a
                        href={submitted.mailtoUrl}
                        className="flex-1 py-3.5 px-5 rounded-xl border border-slate-300 hover:border-navy-900 hover:bg-slate-50 active:scale-[0.98] text-navy-900 font-bold text-sm transition duration-150 flex items-center justify-center gap-2 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
                      >
                        <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Enviar por E-mail</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitted(null)}
                      className="text-xs font-semibold text-slate-500 hover:text-navy-900 active:scale-[0.98] underline underline-offset-4 transition duration-150 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      Editar ou enviar outra solicitação
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight mb-2">
                        Envie seus dados para atendimento
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Ao informar seus dados, a Apontual poderá entrar em
                        contato para dar continuidade ao atendimento.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div>
                        <label
                          htmlFor="contato-nome"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Seu Nome *
                        </label>
                        <input
                          type="text"
                          id="contato-nome"
                          name="nome"
                          required
                          value={nome}
                          onChange={(e) => handleNomeChange(e.target.value)}
                          placeholder="Ex: Maria Fernanda"
                          aria-invalid={Boolean(errors.nome)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                        />
                        {errors.nome && (
                          <p className="mt-1.5 text-xs text-rose-600 font-medium">
                            {errors.nome}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="contato-email"
                            className="block text-xs font-semibold text-slate-700 mb-1.5"
                          >
                            Seu E-mail *
                          </label>
                          <input
                            type="email"
                            id="contato-email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                            placeholder="voce@empresa.com.br"
                            aria-invalid={Boolean(errors.email)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-rose-600 font-medium">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contato-whatsapp"
                            className="block text-xs font-semibold text-slate-700 mb-1.5"
                          >
                            Seu WhatsApp (com DDD) *
                          </label>
                          <input
                            type="tel"
                            id="contato-whatsapp"
                            name="whatsapp"
                            required
                            value={whatsapp}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="(62) 99999-9999"
                            aria-invalid={Boolean(errors.whatsapp)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder-slate-400 text-sm tabular-nums focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                          />
                          {errors.whatsapp && (
                            <p className="mt-1.5 text-xs text-rose-600 font-medium">
                              {errors.whatsapp}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contato-assunto"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Assunto do atendimento
                        </label>
                        <select
                          id="contato-assunto"
                          name="assunto"
                          value={assunto}
                          onChange={(e) => setAssunto(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                        >
                          {CONTACT_TOPICS.map((topic) => (
                            <option key={topic} value={topic}>
                              {topic}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contato-mensagem"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Mensagem (opcional)
                        </label>
                        <textarea
                          id="contato-mensagem"
                          name="mensagem"
                          rows={3}
                          value={mensagem}
                          onChange={(e) => setMensagem(e.target.value)}
                          placeholder="Conte brevemente sobre sua empresa ou dúvida..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition resize-y"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Lock
                            className="w-4 h-4 text-emerald-700 shrink-0"
                            aria-hidden="true"
                          />
                          <span>Dados protegidos pela LGPD.</span>
                        </div>

                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base transition duration-150 cursor-pointer text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                        >
                          <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>Solicitar Atendimento</span>
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
