import { eventPhotos } from "@/data/placeholders";

export function Events() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-medium text-sage-800 sm:text-5xl">
          Events
        </h1>
        <p className="mt-4 text-sage-600 leading-relaxed">
          Moments from workshops, retreats, and community classes. Replace
          captions and images in{" "}
          <code className="rounded bg-sage-100 px-1.5 py-0.5 text-sm">
            src/data/placeholders.ts
          </code>
          .
        </p>
      </header>

      <ul className="mt-16 grid gap-8 sm:grid-cols-2">
        {eventPhotos.map((photo) => (
          <li key={photo.src} className="group">
            <figure className="overflow-hidden rounded-2xl bg-sage-100 shadow-md transition group-hover:shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                width={900}
                height={600}
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-sm text-sage-700">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
