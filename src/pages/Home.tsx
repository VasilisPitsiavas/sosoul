import { Link } from "react-router-dom";
import { PhotoImg } from "@/components/PhotoCard";
import { aboutPhoto, eventPhotos, studioPhotos } from "@/data/photos";
import { schedule } from "@/data/site";
import { useLang } from "@/i18n/lang";
import { btnPrimary, eyebrow, h2 } from "@/components/styles";

/** Homepage — full-width photo hero, coloured bands, photo cards. */
export function Home() {
  const { lang, t, path } = useLang();
  const h = t.home;
  const hero = eventPhotos[0];
  const serviceImages = [studioPhotos[0], eventPhotos[2], eventPhotos[1]];

  return (
    <>
      {/* Hero: photo fills the width, text over a warm-dark gradient */}
      <section className="relative isolate overflow-hidden">
        <PhotoImg src={hero.src} fallback={hero.fallback} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-900/85 via-deep-900/55 to-deep-900/10" />
        <div className="mx-auto flex min-h-[72svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-20 sm:px-8 lg:justify-center lg:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">{h.eyebrow}</p>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.08] text-mist sm:text-6xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-baby-100">{h.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to={path("/contact")} className={btnPrimary}>{h.book}</Link>
            <Link to={path("/#schedule")} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {h.explore}
            </Link>
          </div>
        </div>
      </section>

      {/* About: photo with overlapping text card */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl items-center px-4 py-20 sm:px-8 lg:grid-cols-12">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-baby-100 lg:col-span-7 lg:aspect-[5/4]">
            <PhotoImg src={aboutPhoto.src} fallback={aboutPhoto.fallback} alt={aboutPhoto.alt[lang]} className="h-full w-full object-cover" />
          </div>
          <div className="relative -mt-12 mx-4 rounded-3xl bg-white p-7 shadow-xl ring-1 ring-baby-200 sm:p-10 lg:col-span-6 lg:col-start-7 lg:mx-0 lg:mt-0 lg:-ml-8">
            <h2 className={h2}>{h.aboutTitle}</h2>
            <p className="mt-6 leading-relaxed text-deep-700">{h.about1}</p>
            <p className="mt-4 leading-relaxed text-deep-700">{h.about2}</p>
            <p className="mt-6 font-display text-xl italic text-accent-600">{h.aboutQuote}</p>
          </div>
        </div>
      </section>

      {/* Services: photo cards with text on the image */}
      <section className="bg-baby-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className={`${h2} text-center`}>{h.servicesTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-deep-700">{h.servicesIntro}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {h.services.map((s, i) => (
              <Link
                key={s.title}
                to={path(s.to)}
                className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white"
              >
                <PhotoImg
                  src={serviceImages[i].src}
                  fallback={serviceImages[i].fallback}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-900/90 via-deep-900/40 to-transparent" />
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-baby-100">{s.description}</p>
                <span className="mt-4 text-sm font-semibold text-accent-400">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule: deep blue band */}
      <section id="schedule" className="scroll-mt-20 bg-ink-900 text-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">{h.thisWeek}</p>
          <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">{h.scheduleTitle}</h2>
          <p className="mt-3 text-baby-200">{h.scheduleIntro}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {schedule.map((c) => (
              <li key={c.day + c.time} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/15">
                <p className="text-sm text-baby-200">{t.days[c.day]}</p>
                <p className="mt-1 font-display text-3xl tabular-nums">{c.time}</p>
                <p className="mt-3 font-medium">{c.name[lang]}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-accent-400">{t.levels[c.level]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials: swipe sideways on phones */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <h2 className={h2}>{h.testimonialsTitle}</h2>
          <ul className="-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {h.testimonials.map((q) => (
              <li key={q.name} className="w-[80%] shrink-0 snap-start rounded-3xl bg-baby-100 p-7 md:w-auto">
                <p className="font-display text-xl italic leading-snug text-ink-800">“{q.quote}”</p>
                <p className="mt-5 text-sm font-semibold text-deep-700">{q.name}</p>
                <p className="text-xs text-deep-600">{q.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-baby-50">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-8">
          <h2 className={`${h2} text-center`}>{h.faqTitle}</h2>
          <div className="mt-10 space-y-3">
            {h.faq.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white px-6 py-4 ring-1 ring-baby-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
                  {f.q}
                  <span className="text-accent-500 transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-deep-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: baby-blue band */}
      <section className="bg-baby-300 text-ink-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className={`${eyebrow} !text-ink-800`}>{t.tagline}</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-medium sm:text-4xl">{h.ctaTitle}</h2>
          </div>
          <Link
            to={path("/contact")}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-ink-800"
          >
            {h.book}
          </Link>
        </div>
      </section>
    </>
  );
}
