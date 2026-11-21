import { Link } from "react-router-dom";
import { PhotoImg } from "@/components/PhotoCard";
import { PageHero } from "@/components/Sections";
import { btnSecondary, h2 } from "@/components/styles";
import { workshopPhotos } from "@/data/photos";
import { site, upcomingWorkshops } from "@/data/site";
import { useLang } from "@/i18n/lang";

export function Workshops() {
  const { lang, t, path } = useLang();
  const w = t.workshops;
  const instagramButton = (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-baby-300 px-7 py-3 text-sm font-semibold text-ink-900 transition hover:bg-baby-200"
    >
      {w.instagram} · {site.instagramHandle}
    </a>
  );

  return (
    <>
      <PageHero photo={workshopPhotos[0]} eyebrow={t.nav.workshops} title={w.title} />

      {/* Intro */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-8">
          <p className="text-pretty font-display text-2xl leading-snug text-ink-800 sm:text-[1.7rem]">{w.body[0]}</p>
          <p className="mt-6 text-lg leading-relaxed text-deep-700">{w.body[1]}</p>
        </div>
      </section>

      {/* Kinds of workshop */}
      <section className="bg-baby-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className={h2}>{w.kindsTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-deep-700">{w.kindsText}</p>
        </div>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="scroll-mt-20 bg-ink-900 text-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">{w.upcomingTitle}</h2>
          {upcomingWorkshops.length > 0 ? (
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {upcomingWorkshops.map((u) => (
                <li key={u.title.el + u.date.el} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/15">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">{u.date[lang]}</p>
                  <h3 className="mt-3 font-display text-2xl">{u.title[lang]}</h3>
                  <p className="mt-3 leading-relaxed text-baby-100">{u.text[lang]}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-baby-100">{w.noUpcoming}</p>
          )}
          <p className="mt-8 max-w-2xl text-lg text-baby-200">{w.askLine}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {instagramButton}
            <Link
              to={path("/contact#contact")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {w.message}
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className={h2}>{w.galleryTitle}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workshopPhotos.map((p) => (
              <li key={p.src} className="aspect-[3/2] overflow-hidden rounded-3xl bg-baby-100">
                <PhotoImg src={p.src} fallback={p.fallback} alt={p.alt[lang]} loading="lazy" className="h-full w-full object-cover" />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
              {w.instagram} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
