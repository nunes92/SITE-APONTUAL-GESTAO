import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ApontualLogo } from './ApontualLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';

export type PageRoute =
  | 'home'
  | 'transformar-mei-em-me'
  | 'trocar-de-contador'
  | 'abertura-de-cnpj'
  | 'nossos-planos'
  | 'contato'
  | 'politica-de-privacidade'
  | 'termos-de-uso';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sobreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        sobreDropdownRef.current &&
        !sobreDropdownRef.current.contains(event.target as Node)
      ) {
        setSobreOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setSobreOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (page: PageRoute, hash?: string) => {
    setServicesOpen(false);
    setSobreOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-full flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
        {/* Zona 1: Marca */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 rounded-lg active:scale-[0.98] transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          aria-label="Apontual Gestão Contábil - Início"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center p-1 shrink-0">
            <ApontualLogo />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-navy-900 text-base sm:text-lg tracking-tight leading-tight">
              Apontual
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 tracking-tight leading-tight">
              Gestão Contábil
            </span>
          </div>
        </a>

        {/* Zona 2: Links de Navegação (Desktop) com Menu Cascata */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          aria-label="Navegação principal"
        >
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={`inline-flex items-center gap-1.5 py-2 hover:text-navy-900 active:scale-[0.98] transition duration-150 whitespace-nowrap shrink-0 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                currentPage === 'transformar-mei-em-me' ||
                currentPage === 'trocar-de-contador' ||
                currentPage === 'abertura-de-cnpj' ||
                currentPage === 'nossos-planos'
                  ? 'text-navy-900 font-semibold'
                  : ''
              }`}
            >
              <span>Serviços</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Submenu de serviços"
                className="absolute left-0 top-full pt-1.5 w-64 z-50"
              >
                <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-1.5">
                  <a
                    role="menuitem"
                    href="#/abertura-de-cnpj"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('abertura-de-cnpj');
                    }}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPage === 'abertura-de-cnpj'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-navy-900 font-semibold hover:bg-slate-50 hover:text-emerald-700'
                    }`}
                  >
                    Abertura de CNPJ
                  </a>
                  <a
                    role="menuitem"
                    href="#/transformar-mei-em-me"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('transformar-mei-em-me');
                    }}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPage === 'transformar-mei-em-me'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-navy-900 font-semibold hover:bg-slate-50 hover:text-emerald-700'
                    }`}
                  >
                    Transformar MEI em ME
                  </a>
                  <a
                    role="menuitem"
                    href="#/trocar-de-contador"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('trocar-de-contador');
                    }}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPage === 'trocar-de-contador'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-navy-900 font-semibold hover:bg-slate-50 hover:text-emerald-700'
                    }`}
                  >
                    Troca de contador
                  </a>
                  <a
                    role="menuitem"
                    href="#/nossos-planos"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('nossos-planos');
                    }}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPage === 'nossos-planos'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-navy-900 font-semibold hover:bg-slate-50 hover:text-emerald-700'
                    }`}
                  >
                    Nossos Planos
                  </a>
                  <div className="my-1 border-t border-slate-100" />
                  <a
                    role="menuitem"
                    href="#solucoes"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('home', '#solucoes');
                    }}
                    className="block px-3.5 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-navy-900 transition-colors whitespace-nowrap"
                  >
                    Gestão Fiscal e Folha
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#diferenciais"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#diferenciais');
            }}
            className="hover:text-navy-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Diferenciais
          </a>
          <div
            ref={sobreDropdownRef}
            className="relative"
            onMouseEnter={() => setSobreOpen(true)}
            onMouseLeave={() => setSobreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSobreOpen((prev) => !prev)}
              aria-expanded={sobreOpen}
              aria-haspopup="menu"
              className={`inline-flex items-center gap-1.5 py-2 hover:text-navy-900 active:scale-[0.98] transition duration-150 whitespace-nowrap shrink-0 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                currentPage === 'contato' ? 'text-navy-900 font-semibold' : ''
              }`}
            >
              <span>Sobre</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  sobreOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {sobreOpen && (
              <div
                role="menu"
                aria-label="Submenu Sobre"
                className="absolute left-0 top-full pt-1.5 w-52 z-50"
              >
                <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-1.5">
                  <a
                    role="menuitem"
                    href="#/contato"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('contato');
                    }}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPage === 'contato'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-navy-900 font-semibold hover:bg-slate-50 hover:text-emerald-700'
                    }`}
                  >
                    Contato
                  </a>
                  <a
                    role="menuitem"
                    href="#diferenciais"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('home', '#diferenciais');
                    }}
                    className="block px-3.5 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-navy-900 transition-colors whitespace-nowrap"
                  >
                    Sobre a Apontual
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zona 3: Ação Principal + Botão Menu Mobile */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={buildWhatsAppUrl(
              currentPage === 'transformar-mei-em-me'
                ? 'Olá! Vim pelo site e quero transformar meu MEI em ME.'
                : currentPage === 'trocar-de-contador'
                  ? 'Olá! Vim pelo site e quero trocar de contador.'
                  : currentPage === 'abertura-de-cnpj'
                    ? 'Olá! Vim pelo site e quero abrir meu CNPJ.'
                    : currentPage === 'nossos-planos'
                      ? 'Olá! Vim pelo site e quero conhecer melhor os planos da Apontual.'
                      : currentPage === 'contato'
                        ? 'Olá! Vim pela página de Contato da Apontual e gostaria de atendimento.'
                        : 'Olá! Vim pelo Google e gostaria de falar com um contador.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('header_cta')}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl transition duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-navy-900 hover:bg-slate-100 active:scale-95 active:bg-slate-200/70 transition duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg px-4 py-4 space-y-2 overflow-x-hidden">
          <p className="px-3 text-xs font-semibold text-slate-500">Serviços</p>
          <a
            href="#/abertura-de-cnpj"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('abertura-de-cnpj');
            }}
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              currentPage === 'abertura-de-cnpj'
                ? 'bg-emerald-50 text-emerald-800'
                : 'text-navy-900 hover:bg-slate-50'
            }`}
          >
            Abertura de CNPJ
          </a>
          <a
            href="#/transformar-mei-em-me"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('transformar-mei-em-me');
            }}
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              currentPage === 'transformar-mei-em-me'
                ? 'bg-emerald-50 text-emerald-800'
                : 'text-navy-900 hover:bg-slate-50'
            }`}
          >
            Transformar MEI em ME
          </a>
          <a
            href="#/trocar-de-contador"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('trocar-de-contador');
            }}
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              currentPage === 'trocar-de-contador'
                ? 'bg-emerald-50 text-emerald-800'
                : 'text-navy-900 hover:bg-slate-50'
            }`}
          >
            Troca de contador
          </a>
          <a
            href="#/nossos-planos"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('nossos-planos');
            }}
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              currentPage === 'nossos-planos'
                ? 'bg-emerald-50 text-emerald-800'
                : 'text-navy-900 hover:bg-slate-50'
            }`}
          >
            Nossos Planos
          </a>
          <a
            href="#solucoes"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#solucoes');
            }}
            className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-navy-900"
          >
            Todas as Soluções
          </a>
          <div className="border-t border-slate-100 my-1" />
          <a
            href="#diferenciais"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#diferenciais');
            }}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Diferenciais
          </a>
          <div className="border-t border-slate-100 my-1" />
          <p className="px-3 pt-1 text-xs font-semibold text-slate-500">
            Sobre
          </p>
          <a
            href="#/contato"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contato');
            }}
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              currentPage === 'contato'
                ? 'bg-emerald-50 text-emerald-800'
                : 'text-navy-900 hover:bg-slate-50'
            }`}
          >
            Contato
          </a>
          <a
            href="#diferenciais"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#diferenciais');
            }}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Sobre a Apontual
          </a>
        </div>
      )}
    </header>
  );
}
