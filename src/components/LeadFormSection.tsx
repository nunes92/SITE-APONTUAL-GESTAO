import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, Check, Lock } from 'lucide-react';
import { NECESSIDADE_OPTIONS } from '../data/landingData';
import {
  buildWhatsAppUrl,
  formatBrazilianPhone,
  isValidBrazilianPhone,
  trackWhatsAppClick,
} from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FormErrors {
  nome?: string;
  whatsapp?: string;
}

interface SubmittedLead {
  nome: string;
  whatsapp: string;
  necessidade: string;
  whatsappUrl: string;
}

interface LeadFormSectionProps {
  defaultNeed?: string;
  title?: string;
  subtitle?: string;
}

export function LeadFormSection({
  defaultNeed = NECESSIDADE_OPTIONS[0],
  title = 'Receba sua proposta ou diagnóstico agora',
  subtitle = 'Preencha os 3 campos ao lado para iniciar o atendimento já com as informações da sua empresa no WhatsApp.',
}: LeadFormSectionProps) {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [necessidade, setNecessidade] = useState<string>(defaultNeed);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedLead, setSubmittedLead] = useState<SubmittedLead | null>(null);

  useEffect(() => {
    setNecessidade(defaultNeed);
    setSubmittedLead(null);
  }, [defaultNeed]);

  const handlePhoneChange = (value: string) => {
    const formatted = formatBrazilianPhone(value);
    setWhatsapp(formatted);
    if (errors.whatsapp && isValidBrazilianPhone(formatted)) {
      setErrors((prev) => ({ ...prev, whatsapp: undefined }));
    }
  };

  const handleNomeChange = (value: string) => {
    setNome(value);
    if (errors.nome && value.trim().length >= 2) {
      setErrors((prev) => ({ ...prev, nome: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedNome = nome.trim();
    const trimmedPhone = whatsapp.trim();
    const nextErrors: FormErrors = {};

    if (trimmedNome.length < 2) {
      nextErrors.nome = 'Informe seu nome para iniciarmos o atendimento.';
    }
    if (!isValidBrazilianPhone(trimmedPhone)) {
      nextErrors.whatsapp = 'Informe um número de WhatsApp válido com DDD.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    trackWhatsAppClick('formulario_rapido');

    const mensagemFormatada = `Olá! Meu nome é *${trimmedNome}* (${trimmedPhone}). Vim pelo site e preciso de ajuda com: *${necessidade}*.`;
    const whatsappUrl = buildWhatsAppUrl(mensagemFormatada);

    setSubmittedLead({
      nome: trimmedNome,
      whatsapp: trimmedPhone,
      necessidade,
      whatsappUrl,
    });
  };

  return (
    <section
      id="diagnostico-rapido"
      className="scroll-mt-20 py-16 sm:py-20 bg-navy-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-800 border border-slate-700/80 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 min-w-0">
              <p className="text-emerald-400 font-bold text-xs tracking-wide mb-2">
                Atendimento Prioritário
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 [text-wrap:balance]">
                {title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {subtitle}
              </p>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Lock
                  className="w-4 h-4 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span>Seus dados estão protegidos pela LGPD. Sem spam.</span>
              </div>
            </div>

            <div className="md:col-span-6 min-w-0">
              {submittedLead ? (
                <div className="bg-navy-900 border border-emerald-500/40 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check
                        className="w-5 h-5"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        Resumo pronto para envio
                      </h3>
                      <p className="text-xs text-slate-300">
                        Clique abaixo para abrir a conversa no WhatsApp.
                      </p>
                    </div>
                  </div>

                  <dl className="text-xs sm:text-sm space-y-1.5 bg-navy-800/80 rounded-xl p-4 text-slate-300">
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">Nome:</dt>
                      <dd className="font-semibold text-white text-right">
                        {submittedLead.nome}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">WhatsApp:</dt>
                      <dd className="font-semibold text-white tabular-nums text-right">
                        {submittedLead.whatsapp}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">Necessidade:</dt>
                      <dd className="font-semibold text-emerald-400 text-right">
                        {submittedLead.necessidade}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex flex-col gap-2.5">
                    <a
                      href={submittedLead.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 sm:px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 flex items-center justify-center gap-2 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                    >
                      <WhatsAppIcon className="w-5 h-5 shrink-0" />
                      <span>Abrir Conversa no WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedLead(null)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-navy-800 active:scale-[0.98] transition duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                    >
                      Alterar informações
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-xs font-semibold text-slate-200 mb-1.5"
                    >
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={nome}
                      onChange={(e) => handleNomeChange(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      aria-invalid={Boolean(errors.nome)}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                    {errors.nome && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium">
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-xs font-semibold text-slate-200 mb-1.5"
                    >
                      Seu WhatsApp (com DDD) *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={whatsapp}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder="(62) 99999-9999"
                      aria-invalid={Boolean(errors.whatsapp)}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-white placeholder-slate-400 text-sm tabular-nums focus:outline-none focus-visible:border-emerald-400 focus:border-emerald-400 transition"
                    />
                    {errors.whatsapp && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="necessidade"
                      className="block text-xs font-semibold text-slate-200 mb-1.5"
                    >
                      O que você precisa hoje?
                    </label>
                    <select
                      id="necessidade"
                      name="necessidade"
                      value={necessidade}
                      onChange={(e) => setNecessidade(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    >
                      {NECESSIDADE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 sm:px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-navy-950 font-extrabold text-sm sm:text-base transition duration-150 cursor-pointer flex items-center justify-center gap-2 text-center sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    <span>Continuar no WhatsApp</span>
                    <ArrowRight
                      className="w-4 h-4 shrink-0"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
