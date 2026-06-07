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
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-sage-200/60 bg-stone-warm">
        <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2 sm:px-8 sm:py-3">
          <Link
            to="/"
            aria-label="So Soul Place — home"
            className="mx-auto shrink-0 rounded-lg outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage-400 sm:mx-0"
          >
            <Logo variant="header" />
          </Link>
          <nav
            className="flex min-w-0 flex-wrap items-center justify-center gap-2 sm:flex-1 sm:justify-end sm:gap-2"
            aria-label="Main"
          >
            {nav.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`inline-flex min-h-11 min-w-[2.75rem] touch-manipulation items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 sm:min-w-0 sm:px-4 ${
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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
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
