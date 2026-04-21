import { PhotoCard } from "@/components/PhotoCard";
import { eventPhotos } from "@/data/placeholders";

export function Events() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
      <header className="max-w-3xl">
        <h1 className="text-balance font-display text-3xl font-medium text-sage-800 sm:text-5xl">
          Events
        </h1>
        <p className="mt-4 text-sage-600 leading-relaxed">
          Moments from workshops, retreats, and community classes. Swap captions
          and images in{" "}
          <code className="rounded bg-sage-100 px-1.5 py-0.5 text-sm">
            src/data/placeholders.ts
          </code>
          .
        </p>
      </header>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
        {eventPhotos.map((photo) => (
          <li key={photo.src} className="min-w-0">
            <PhotoCard
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              aspect="landscape"
              zoom
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
