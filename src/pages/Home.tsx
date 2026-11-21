import { Link } from "react-router-dom";
import { CtaBand, FormatCards, PageHero } from "@/components/Sections";
import { btnPrimary, btnSecondary, h2 } from "@/components/styles";
import { PhotoImg } from "@/components/PhotoCard";
import { eventPhotos, workshopPhotos } from "@/data/photos";
import { useLang } from "@/i18n/lang";

export function Home() {
  const { lang, t, path } = useLang();
  const h = t.home;

  return (
    <>
      <PageHero photo={eventPhotos[0]} eyebrow={h.eyebrow} title={h.title} tall>
        <p className="mt-4 font-display text-2xl italic text-baby-200 sm:text-3xl">{h.subtitle}</p>
        <div className="mt-6 max-w-xl space-y-1 text-base leading-relaxed sm:text-lg text-baby-100">
          {h.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <div className="mt-9">
          <Link to={path("/about")} className={btnPrimary}>
            {h.discover}
          </Link>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20 sm:px-8">
          {h.body.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-pretty font-display text-xl leading-snug text-ink-800 sm:text-[1.7rem]"
                  : "mt-6 text-base leading-relaxed sm:text-lg text-deep-700"
              }
            >
              {p}
            </p>
          ))}
          <Link to={path("/about")} className={`${btnSecondary} mt-9`}>
            {h.discover}
          </Link>
        </div>
      </section>

      {/* Ways to practise */}
      <section className="bg-baby-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className={`${h2} max-w-2xl`}>{h.formatsTitle}</h2>
            <Link to={path("/practice")} className="text-sm font-semibold text-accent-600 hover:underline">
              {h.seePractice} →
            </Link>
          </div>
          <div className="mt-10">
            <FormatCards flip />
          </div>
        </div>
      </section>

      {/* Workshops teaser */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-baby-100">
            <PhotoImg
              src={workshopPhotos[0].src}
              fallback={workshopPhotos[0].fallback}
              alt={workshopPhotos[0].alt[lang]}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className={h2}>{t.workshops.homeTitle}</h2>
            <p className="mt-3 font-display text-2xl italic text-accent-500">{t.workshops.title}</p>
            <p className="mt-5 text-base leading-relaxed sm:text-lg text-deep-700">{t.workshops.homeText}</p>
            <Link to={path("/workshops")} className={`${btnSecondary} mt-8`}>
              {t.workshops.homeCta}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={h.ctaTitle} />
    </>
  );
}
