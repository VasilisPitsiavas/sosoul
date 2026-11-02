import { PhotoCard } from "@/components/PhotoCard";
import { studioPhotos } from "@/data/photos";
import { useLang } from "@/i18n/lang";

export function Studio() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
      <header className="max-w-3xl">
        <h1 className="text-balance font-display text-3xl font-medium text-ink-800 sm:text-5xl">
          {t.studio.title}
        </h1>
        <p className="mt-4 text-deep-600 leading-relaxed">{t.studio.intro}</p>
      </header>

      <p className="mt-10 max-w-3xl text-deep-700 leading-relaxed">{t.studio.body}</p>

      <section className="mt-14" aria-labelledby="studio-gallery-heading">
        <h2
          id="studio-gallery-heading"
          className="font-display text-2xl font-medium text-ink-800 sm:text-3xl"
        >
          {t.studio.gallery}
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {studioPhotos.map((photo) => (
            <li key={photo.src} className="min-w-0">
              <PhotoCard
                src={photo.src}
                fallback={photo.fallback}
                alt={photo.alt[lang]}
                caption={photo.caption[lang]}
                aspect="standard"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
