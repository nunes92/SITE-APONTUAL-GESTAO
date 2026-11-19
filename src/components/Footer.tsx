import { ApontualLogo } from './ApontualLogo';
import {
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
  trackWhatsAppClick,
} from '../utils/whatsapp';
import type { PageRoute } from './Header';

interface FooterProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

const CONTACT_EMAIL = 'contato@apontualgestaocontabil.com.br';

export function Footer({ onNavigate }: FooterProps) {
  const linkClass =
    'text-slate-300 hover:text-white active:opacity-80 hover:underline underline-offset-4 transition duration-150 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500';

  return (
    <footer className="bg-navy-950 text-slate-300 pt-12 pb-8 border-t border-slate-800/80 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr_1fr] gap-10 lg:gap-12 pb-10">
          {/* Coluna 1: Perfil do escritório, contatos e horários */}
          <div className="space-y-5 min-w-0">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-800 flex items-center justify-center p-1.5 shrink-0">
                <ApontualLogo />
              </div>
              <div>
                <p className="font-bold text-white text-base tracking-tight">
                  Apontual Gestão Contábil
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  CRC do Responsável:
                </p>
                <p className="text-emerald-400 text-xs sm:text-sm font-semibold tabular-nums mt-0.5">
                  CRC-GO 029941/O-8
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <span className="text-slate-400">WhatsApp: </span>
                <a
                  href={buildWhatsAppUrl(
                    'Olá! Vim pelo rodapé do site e gostaria de falar com a Apontual.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer_whatsapp')}
                  className="text-white font-semibold tabular-nums hover:text-emerald-400 hover:underline underline-offset-4 transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p>
                <span className="text-slate-400">E-mail: </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-slate-200 hover:text-white hover:underline underline-offset-4 transition-colors break-all rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-slate-300">
                <span className="text-slate-400">Endereço: </span>
                R. Alípio Junqueira - St. Serra Dourada - 3ª Etapa, Aparecida de
                Goiânia - GO, 74973-080
              </p>
            </div>

            <div className="pt-1">
              <p className="text-xs font-semibold text-white mb-1.5">
                Horário de atendimento
              </p>
              <div className="text-xs text-slate-300 space-y-0.5 tabular-nums">
                <p>Segunda a Quarta: 08h00 às 18h00</p>
                <p>Quinta: 09h00 às 18h00</p>
                <p>Sexta: 09h00 às 16h00</p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-tight mb-4">
              Serviços
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#/abertura-de-cnpj"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('abertura-de-cnpj');
                  }}
                  className={linkClass}
                >
                  Abertura de CNPJ
                </a>
              </li>
              <li>
                <a
                  href="#/transformar-mei-em-me"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('transformar-mei-em-me');
                  }}
                  className={linkClass}
                >
                  Transformar MEI em ME
                </a>
              </li>
              <li>
                <a
                  href="#/trocar-de-contador"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('trocar-de-contador');
                  }}
                  className={linkClass}
                >
                  Troca de contador
                </a>
              </li>
              <li>
                <a
                  href="#/nossos-planos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('nossos-planos');
                  }}
                  className={linkClass}
                >
                  Nossos Planos
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home', '#solucoes');
                  }}
                  className={linkClass}
                >
                  Gestão Fiscal e Folha
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Informações */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-tight mb-4">
              Informações
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className={linkClass}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home', '#diferenciais');
                  }}
                  className={linkClass}
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home', '#como-funciona');
                  }}
                  className={linkClass}
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#/contato"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contato');
                  }}
                  className={linkClass}
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#/politica-de-privacidade"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('politica-de-privacidade');
                  }}
                  className={linkClass}
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#/termos-de-uso"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('termos-de-uso');
                  }}
                  className={linkClass}
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Última linha: Direitos autorais */}
        <div className="border-t border-slate-800/80 pt-6 text-center sm:text-left">
          <p className="text-xs text-slate-400">
            © 2026 Apontual Gestão Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

