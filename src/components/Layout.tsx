import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/studio", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-sage-200/60 bg-stone-warm">
        <div className="mx-auto flex min-w-0 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-3 sm:gap-x-6 sm:px-8 sm:py-4">
          <Link
            to="/"
            aria-label="So Soul Place — home"
            className="rounded-lg outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage-400"
          >
            <Logo variant="header" />
          </Link>
          <nav
            className="flex min-w-0 flex-shrink-0 flex-wrap items-center justify-end gap-1 sm:gap-2"
            aria-label="Main"
          >
            {nav.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
                    active
                      ? "bg-sage-800 text-white"
                      : "text-sage-600 hover:bg-sage-100 hover:text-sage-800"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="min-w-0 flex-1">{children}</main>

      <footer className="border-t border-sage-200/80 bg-stone-warm">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-col items-center gap-4">
            <Logo variant="footer" />
            <p className="font-display text-center text-lg text-sage-800">
              So Soul Place — yoga with Konstantina
            </p>
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-sage-600">
              Find your flow
            </p>
          </div>
          <p className="mt-2 text-center text-sm text-sage-600">
            © {new Date().getFullYear()} So Soul Place
          </p>
        </div>
      </footer>
    </div>
  );
}
