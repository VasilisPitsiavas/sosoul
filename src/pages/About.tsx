import { PhotoImg } from "@/components/PhotoCard";
import { CtaBand, PageHero } from "@/components/Sections";
import { h2 } from "@/components/styles";
import { aboutPhoto, eventPhotos } from "@/data/photos";
import { useLang } from "@/i18n/lang";

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <PageHero photo={eventPhotos[3]} eyebrow={t.nav.about} title={a.title}>
        <p className="mt-5 max-w-xl font-display text-2xl italic text-baby-100 sm:text-3xl">{a.lead}</p>
      </PageHero>

      {/* Foundation */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl space-y-6 px-4 py-20 text-lg leading-relaxed text-deep-700 sm:px-8">
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-ink-900 text-mist">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">{a.journeyTitle}</h2>
          <p className="mt-6 text-pretty font-display text-2xl leading-snug text-baby-100 sm:text-[1.7rem]">
            {a.journey}
          </p>
        </div>
      </section>

      {/* About me */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl items-center px-4 py-20 sm:px-8 lg:grid-cols-12">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-baby-100 sm:aspect-[4/3] lg:col-span-6 lg:aspect-[4/5]">
            <PhotoImg
              src={aboutPhoto.src}
              fallback={aboutPhoto.fallback}
              alt={a.photoAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative -mt-12 mx-4 rounded-3xl bg-white p-7 shadow-xl ring-1 ring-baby-200 sm:p-10 lg:col-span-6 lg:col-start-7 lg:mx-0 lg:mt-0 lg:-ml-10">
            <h2 className={h2}>{a.meTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-700">{a.me}</p>
          </div>
        </div>
      </section>

      <CtaBand title={t.home.ctaTitle} />
    </>
  );
}
