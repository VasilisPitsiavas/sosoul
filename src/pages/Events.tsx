import { PhotoCard } from "@/components/PhotoCard";
import { eventPhotos } from "@/data/photos";
import { useLang } from "@/i18n/lang";

export function Events() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
      <header className="max-w-3xl">
        <h1 className="text-balance font-display text-3xl font-medium text-ink-800 sm:text-5xl">
          {t.events.title}
        </h1>
        <p className="mt-4 text-deep-600 leading-relaxed">{t.events.intro}</p>
      </header>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
        {eventPhotos.map((photo) => (
          <li key={photo.src} className="min-w-0">
            <PhotoCard
              src={photo.src}
              fallback={photo.fallback}
              alt={photo.alt[lang]}
              caption={photo.caption[lang]}
              aspect="landscape"
              zoom
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
