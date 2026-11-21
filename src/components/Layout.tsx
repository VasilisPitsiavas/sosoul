import { type ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";
import { useLang } from "@/i18n/lang";
import { Logo } from "./Logo";

const pages = ["home", "about", "practice", "workshops", "contact"] as const;
const pagePath = { home: "/", about: "/about", practice: "/practice", workshops: "/workshops", contact: "/contact" };

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  const { lang, t, path } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const current = pages.find((p) => path(pagePath[p]) === pathname) ?? "home";

  // Same page in the other language
  const otherLangPath =
    lang === "en"
      ? pathname.replace(/^\/en/, "") || "/"
      : pathname === "/"
        ? "/en"
        : `/en${pathname}`;

  // Per-page browser title, scroll to top (or to #section) on navigation
  useEffect(() => {
    document.title = t.titles[current];
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
    setMenuOpen(false);
  }, [pathname, hash, current, t]);

  const linkClass = (active: boolean) =>
    `inline-flex min-h-11 touch-manipulation items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? "bg-accent-600 text-white"
        : "text-deep-700 hover:bg-baby-100 hover:text-ink-900"
    }`;

  const langSwitch = (
    <Link
      to={otherLangPath}
      hrefLang={lang === "el" ? "en" : "el"}
      aria-label={t.switchTo}
      title={t.switchTo}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-baby-200 px-3 text-xs font-semibold tracking-wider text-deep-700 hover:border-accent-400 hover:text-ink-900"
    >
      {t.switchShort}
    </Link>
  );

  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-baby-200/60 bg-mist/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-8">
          <Link
            to={path("/")}
            aria-label={`${site.name} — ${t.nav.home}`}
            className="flex shrink-0 items-center gap-3 rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
          >
            <Logo variant="header" />
            <span className="font-display text-xl font-medium text-ink-800 sm:text-2xl">
              {site.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex items-center gap-1" aria-label="Main">
              {pages.map((p) => (
                <Link key={p} to={path(pagePath[p])} className={linkClass(current === p)}>
                  {t.nav[p]}
                </Link>
              ))}
            </nav>
            {langSwitch}
          </div>

          {/* Mobile: language + menu button */}
          <div className="flex items-center gap-1 lg:hidden">
            {langSwitch}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-800 hover:bg-baby-100"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="flex flex-col gap-1 border-t border-baby-200/60 px-4 pb-4 pt-2 lg:hidden"
          >
            {pages.map((p) => (
              <Link key={p} to={path(pagePath[p])} className={linkClass(current === p)}>
                {t.nav[p]}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main id="main" className="min-w-0 flex-1">
        {children}
      </main>

      <footer className="border-t border-baby-200/80 bg-baby-50/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Logo variant="footer" />
            <p className="font-display text-xl text-ink-800">{t.footer.line}</p>
            <p className="text-sm text-deep-700">{t.footer.sub}</p>
          </div>
          <div className="text-center text-sm text-deep-700 md:text-right">
            <h2 className="font-semibold text-ink-800">{t.footer.contactHeading}</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <a className="underline-offset-4 hover:underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                  </a>
                </li>
              )}
              <li>
                <a className="underline-offset-4 hover:underline" href={site.instagram} target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="pb-8 text-center text-sm text-deep-600">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </div>
  );
}
