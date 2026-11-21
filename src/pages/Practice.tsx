import { Link } from "react-router-dom";
import { FormatCards, PageHero } from "@/components/Sections";
import { btnPrimary, h2 } from "@/components/styles";
import { studioPhotos } from "@/data/photos";
import { useLang } from "@/i18n/lang";

export function Practice() {
  const { t, path } = useLang();
  const p = t.practice;

  return (
    <>
      <PageHero photo={studioPhotos[2]} eyebrow={t.nav.practice} title={p.title} />

      {/* Intro */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-8">
          <div className="space-y-1 font-display text-2xl leading-snug text-ink-800 sm:text-3xl">
            {p.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-deep-700">{p.body}</p>
        </div>
      </section>

      {/* Styles */}
      <section className="bg-baby-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className={h2}>{p.stylesTitle}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.styles.map((s) => (
              <li key={s.title} className="rounded-3xl bg-white p-7 ring-1 ring-baby-200">
                <h3 className="font-display text-2xl text-ink-800">{s.title}</h3>
                {s.subtitle && <p className="mt-1 text-sm font-medium text-accent-500">{s.subtitle}</p>}
                <p className="mt-4 leading-relaxed text-deep-700">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className={`${h2} max-w-2xl`}>{p.formatsTitle}</h2>
          <div className="mt-10">
            <FormatCards />
          </div>
          <div className="mt-12 flex justify-center">
            <Link to={path("/contact#contact")} className={btnPrimary}>
              {t.bookCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
