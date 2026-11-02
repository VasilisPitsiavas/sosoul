import { Link } from "react-router-dom";
import { Section } from "@/components/home/Section";
import { ServiceCard } from "@/components/home/ServiceCard";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { PhotoImg } from "@/components/PhotoCard";
import { aboutPhoto } from "@/data/photos";
import { schedule } from "@/data/site";
import { useLang } from "@/i18n/lang";

const CALENDLY = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export function Home() {
  const { lang, t, path } = useLang();
  const h = t.home;
  return (
    <>
      {/* Hero — light, conversion-focused */}
      <section className="relative overflow-hidden bg-stone-warm text-sage-900">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[22rem] w-[22rem] rounded-full bg-sage-200/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage-100/80 blur-2xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-section-lg sm:px-8">
          <p className="text-center text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.18em] text-sage-600 sm:text-left sm:text-xs sm:tracking-[0.22em]">
            {h.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-center font-display text-[1.65rem] font-medium leading-[1.15] tracking-tight text-sage-900 min-[400px]:text-3xl sm:mt-5 sm:text-left sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>
          <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-sage-700 sm:mt-6 sm:text-left sm:text-lg">
            {h.intro}
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to={path("/contact")}
              className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-sage-800 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-sage-900/10 transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-8 sm:py-3 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-sage-900 sm:hover:shadow-lg"
            >
              {h.book}
            </Link>
            <Link
              to={path("/#schedule")}
              className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-sage-300/90 bg-white/70 px-6 py-3.5 text-base font-semibold text-sage-800 backdrop-blur-sm transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-8 sm:py-3 sm:text-sm sm:hover:border-sage-400 sm:hover:bg-white"
            >
              {h.explore}
            </Link>
          </div>
        </div>

        {/* This week — first classes from the schedule, straight under the hero */}
        <div className="relative border-t border-sage-100 bg-sage-50/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-8 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
              {h.thisWeek}
            </p>
            <ul className="grid flex-1 gap-2 sm:grid-cols-3 sm:gap-6">
              {schedule.slice(0, 3).map((c) => (
                <li key={c.day + c.time} className="flex items-baseline justify-between gap-3 text-sm sm:justify-start">
                  <span className="font-semibold tabular-nums text-sage-800">
                    {t.daysShort[c.day]} {c.time}
                  </span>
                  <span className="text-sage-700">{c.name[lang]}</span>
                </li>
              ))}
            </ul>
            <Link
              to={path("/#schedule")}
              className="text-sm font-semibold text-sage-700 underline decoration-sage-300 underline-offset-4 hover:text-sage-900"
            >
              {h.fullSchedule}
            </Link>
          </div>
        </div>
      </section>

      {/* About — storytelling, image alternates (image left on large screens) */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 min-w-0 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sage-100 shadow-xl ring-1 ring-sage-200/60">
                <PhotoImg
                  src={aboutPhoto.src}
                  fallback={aboutPhoto.fallback}
                  alt={aboutPhoto.alt[lang]}
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                />
              </div>
            </div>
            <div className="order-1 min-w-0 lg:order-2">
              <h2 className="text-balance font-display text-[1.625rem] font-medium leading-tight text-sage-800 sm:text-4xl lg:text-[2.35rem]">
                {h.aboutTitle}
              </h2>
              <div className="mt-3 h-px w-14 bg-sage-400" />
              <p className="mt-8 text-base leading-relaxed text-sage-700 sm:text-lg">
                {h.about1}
              </p>
              <p className="mt-5 text-base leading-relaxed text-sage-700 sm:text-lg">
                {h.about2}
              </p>
              <p className="mt-8 border-l-2 border-sage-400 pl-5 font-display text-lg italic text-sage-800 sm:text-xl">
                {h.aboutQuote}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" variant="muted">
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium text-sage-800 sm:text-4xl">
              {h.servicesTitle}
            </h2>
            <p className="mt-4 text-sage-600 leading-relaxed">
              {h.servicesIntro}
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {h.services.map((s, i) => (
              <li key={s.title} className="min-w-0">
                <ServiceCard {...s} to={path(s.to)} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </Section>


      {/* Weekly schedule */}
      <Section id="schedule" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium text-sage-800 sm:text-4xl">
              {h.scheduleTitle}
            </h2>
            <p className="mt-4 text-sage-600 leading-relaxed">
              {h.scheduleIntro}
            </p>
          </div>
          <ul className="mx-auto mt-10 max-w-3xl divide-y divide-sage-200/80 rounded-2xl border border-sage-200/80 bg-white/70">
            {schedule.map((c) => (
              <li key={c.day + c.time} className="grid grid-cols-[5.5rem_1fr] items-center gap-x-4 px-5 py-4 sm:grid-cols-[8rem_4rem_1fr_auto] sm:px-6">
                <span className="font-semibold text-sage-800">{t.days[c.day]}</span>
                <span className="tabular-nums text-sage-600 sm:order-none">{c.time}</span>
                <span className="col-span-2 font-display text-lg text-sage-900 sm:col-span-1">{c.name[lang]}</span>
                <span className="col-span-2 text-xs uppercase tracking-wider text-sage-600 sm:col-span-1 sm:text-right">{t.levels[c.level]}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium text-sage-800 sm:text-4xl">
              {h.testimonialsTitle}
            </h2>
            <p className="mt-4 text-sage-600 leading-relaxed">
              {h.testimonialsIntro}
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {h.testimonials.map((q) => (
              <li key={q.name} className="min-w-0">
                <TestimonialCard {...q} />
              </li>
            ))}
          </ul>
        </div>
      </Section>


      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl px-4 py-section sm:px-8">
          <h2 className="text-center font-display text-[1.625rem] font-medium text-sage-800 sm:text-4xl">
            {h.faqTitle}
          </h2>
          <div className="mt-10 divide-y divide-sage-200/80 border-y border-sage-200/80">
            {h.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-sage-900">
                  {f.q}
                  <span className="text-sage-600 transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-sage-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA + booking options */}
      <Section variant="muted" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-sage-300/25 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium leading-tight text-sage-800 sm:text-4xl lg:text-[2.5rem]">
              {h.ctaTitle}
            </h2>
            <p className="mt-4 text-base text-pretty text-sage-700 sm:mt-5 sm:text-lg">
              {h.ctaText}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                to={path("/contact")}
                className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-sage-800 px-8 py-3.5 text-base font-semibold text-white shadow-md transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-10 sm:py-3 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-sage-900 sm:hover:shadow-lg"
              >
                {h.book}
              </Link>
              {CALENDLY ? (
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-sage-400/90 bg-white/85 px-8 py-3.5 text-base font-semibold text-sage-800 backdrop-blur-sm transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-10 sm:py-3 sm:text-sm sm:hover:border-sage-500 sm:hover:bg-white"
                >
                  {h.openCalendar}
                </a>
              ) : null}
              <Link
                to={path("/contact")}
                className="py-2 text-center text-sm font-semibold text-sage-600 underline decoration-sage-300 underline-offset-4 transition hover:text-sage-900 sm:py-0"
              >
                {h.orWrite}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
