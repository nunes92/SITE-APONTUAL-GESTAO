import { useCallback, useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { Header, type PageRoute } from './components/Header';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { AberturaDeCnpjPage } from './pages/AberturaDeCnpjPage';
import { ContatoPage } from './pages/ContatoPage';
import { HomePage } from './pages/HomePage';
import { NossosPlanosPage } from './pages/NossosPlanosPage';
import { PoliticaPrivacidadePage } from './pages/PoliticaPrivacidadePage';
import { TermosDeUsoPage } from './pages/TermosDeUsoPage';
import { TransformarMeiEmMePage } from './pages/TransformarMeiEmMePage';
import { TrocarDeContadorPage } from './pages/TrocarDeContadorPage';
import { buildWhatsAppUrl, trackWhatsAppClick } from './utils/whatsapp';

function getInitialRoute(): PageRoute {
  const hash = window.location.hash;
  const path = window.location.pathname;
  if (
    hash.includes('transformar-mei-em-me') ||
    path.includes('transformar-mei-em-me')
  ) {
    return 'transformar-mei-em-me';
  }
  if (
    hash.includes('trocar-de-contador') ||
    path.includes('trocar-de-contador')
  ) {
    return 'trocar-de-contador';
  }
  if (
    hash.includes('abertura-de-cnpj') ||
    path.includes('abertura-de-cnpj') ||
    path.includes('abrir-empresa')
  ) {
    return 'abertura-de-cnpj';
  }
  if (
    hash.includes('nossos-planos') ||
    path.includes('nossos-planos') ||
    path.includes('planos')
  ) {
    return 'nossos-planos';
  }
  if (hash.includes('contato') || path.includes('contato')) {
    return 'contato';
  }
  if (
    hash.includes('politica-de-privacidade') ||
    path.includes('politica-de-privacidade')
  ) {
    return 'politica-de-privacidade';
  }
  if (hash.includes('termos-de-uso') || path.includes('termos-de-uso')) {
    return 'termos-de-uso';
  }
  return 'home';
}

function getPreferredScrollBehavior(): ScrollBehavior {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return 'auto';
  }
  return 'smooth';
}

function extractSectionHash(fullHash: string): string | null {
  const parts = fullHash.split('#').filter(Boolean);
  if (parts.length === 0) return null;
  const last = parts[parts.length - 1];
  if (!last || last.startsWith('/')) return null;
  return last;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);
  const pendingHashRef = useRef<string | null>(null);
  const isFirstMountRef = useRef(true);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentPage(getInitialRoute());
    };
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  useEffect(() => {
    if (currentPage === 'transformar-mei-em-me') {
      document.title =
        'Transformar MEI em ME com Sede em Goiás | Apontual Gestão Contábil';
    } else if (currentPage === 'trocar-de-contador') {
      document.title =
        'Trocar de Contador com Sede em Goiás | Apontual Gestão Contábil';
    } else if (currentPage === 'abertura-de-cnpj') {
      document.title =
        'Abertura de CNPJ e Empresa em Goiás | Apontual Gestão Contábil';
    } else if (currentPage === 'nossos-planos') {
      document.title =
        'Nossos Planos de Contabilidade Digital | Apontual Gestão Contábil';
    } else if (currentPage === 'contato') {
      document.title = 'Fale com a Apontual | Contato — Apontual Gestão Contábil';
    } else if (currentPage === 'politica-de-privacidade') {
      document.title = 'Política de Privacidade | Apontual Gestão Contábil';
    } else if (currentPage === 'termos-de-uso') {
      document.title = 'Termos de Uso | Apontual Gestão Contábil';
    } else {
      document.title =
        'Apontual Gestão Contábil | Abertura de Empresa e Contabilidade Consultiva';
    }
  }, [currentPage]);

  // Rolagem automática para o topo (ou seção âncora) ao trocar de rota
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      const initialSection = extractSectionHash(window.location.hash);
      if (initialSection) {
        requestAnimationFrame(() => {
          document.getElementById(initialSection)?.scrollIntoView({
            behavior: getPreferredScrollBehavior(),
            block: 'start',
          });
        });
      }
      return;
    }

    const targetId =
      pendingHashRef.current?.replace('#', '') ||
      extractSectionHash(window.location.hash);
    pendingHashRef.current = null;
    const behavior = getPreferredScrollBehavior();

    if (targetId) {
      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior, block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [currentPage]);

  const handleNavigate = useCallback(
    (page: PageRoute, hash?: string) => {
      pendingHashRef.current = hash ?? null;

      if (page === 'transformar-mei-em-me') {
        window.location.hash = hash
          ? `#/transformar-mei-em-me${hash}`
          : '#/transformar-mei-em-me';
      } else if (page === 'trocar-de-contador') {
        window.location.hash = hash
          ? `#/trocar-de-contador${hash}`
          : '#/trocar-de-contador';
      } else if (page === 'abertura-de-cnpj') {
        window.location.hash = hash
          ? `#/abertura-de-cnpj${hash}`
          : '#/abertura-de-cnpj';
      } else if (page === 'nossos-planos') {
        window.location.hash = hash
          ? `#/nossos-planos${hash}`
          : '#/nossos-planos';
      } else if (page === 'contato') {
        window.location.hash = hash ? `#/contato${hash}` : '#/contato';
      } else if (page === 'politica-de-privacidade') {
        window.location.hash = hash
          ? `#/politica-de-privacidade${hash}`
          : '#/politica-de-privacidade';
      } else if (page === 'termos-de-uso') {
        window.location.hash = hash
          ? `#/termos-de-uso${hash}`
          : '#/termos-de-uso';
      } else {
        window.location.hash = hash || '#/';
      }

      if (page === currentPage) {
        const behavior = getPreferredScrollBehavior();
        if (hash) {
          const targetId = hash.replace('#', '');
          pendingHashRef.current = null;
          requestAnimationFrame(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior, block: 'start' });
            } else {
              window.scrollTo({ top: 0, left: 0, behavior });
            }
          });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior });
        }
      } else {
        setCurrentPage(page);
      }
    },
    [currentPage]
  );

  const floatingWhatsAppMessage =
    currentPage === 'transformar-mei-em-me'
      ? 'Olá! Vim pelo site e quero transformar meu MEI em ME.'
      : currentPage === 'trocar-de-contador'
        ? 'Olá! Vim pelo site e quero trocar de contador.'
        : currentPage === 'abertura-de-cnpj'
          ? 'Olá! Vim pelo site e quero abrir meu CNPJ.'
          : currentPage === 'nossos-planos'
            ? 'Olá! Vim pelo site e quero conhecer os planos da Apontual.'
            : currentPage === 'contato'
              ? 'Olá! Vim pela página de Contato da Apontual e gostaria de atendimento.'
              : 'Olá! Vim pelo site e gostaria de falar com um contador.';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 overflow-x-clip">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 min-w-0">
        <div key={currentPage} className="page-enter">
          {currentPage === 'transformar-mei-em-me' ? (
            <TransformarMeiEmMePage onNavigate={handleNavigate} />
          ) : currentPage === 'trocar-de-contador' ? (
            <TrocarDeContadorPage onNavigate={handleNavigate} />
          ) : currentPage === 'abertura-de-cnpj' ? (
            <AberturaDeCnpjPage onNavigate={handleNavigate} />
          ) : currentPage === 'nossos-planos' ? (
            <NossosPlanosPage onNavigate={handleNavigate} />
          ) : currentPage === 'contato' ? (
            <ContatoPage onNavigate={handleNavigate} />
          ) : currentPage === 'politica-de-privacidade' ? (
            <PoliticaPrivacidadePage onNavigate={handleNavigate} />
          ) : currentPage === 'termos-de-uso' ? (
            <TermosDeUsoPage onNavigate={handleNavigate} />
          ) : (
            <HomePage onNavigate={handleNavigate} />
          )}
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={buildWhatsAppUrl(floatingWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating_whatsapp')}
        aria-label="Falar com contador no WhatsApp"
        className="fixed bottom-4 right-4 z-50 w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-navy-950 flex items-center justify-center shadow-lg transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
