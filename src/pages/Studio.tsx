import { PhotoCard } from "@/components/PhotoCard";
import { studioPhotos } from "@/data/placeholders";

export function Studio() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-3xl">
        <h1 className="font-display text-4xl font-medium text-sage-800 sm:text-5xl">
          The studio
        </h1>
        <p className="mt-4 text-sage-600 leading-relaxed">
          A calm room for practice—natural light, simple lines, and everything
          you need for a grounded session. Add your address, hours, and how to
          find you when you are ready.
        </p>
      </header>

      <div className="mt-10 max-w-3xl space-y-4 text-sage-700 leading-relaxed">
        <p>
          We keep the space uncluttered so you can focus on breath and
          movement. Mats and props are available; you are welcome to bring your
          own mat if you prefer.
        </p>
        <p className="text-sm text-sage-600">
          You can mention parking, transit, accessibility, and studio etiquette
          in this block.
        </p>
      </div>

      <section className="mt-14" aria-labelledby="studio-gallery-heading">
        <h2
          id="studio-gallery-heading"
          className="font-display text-2xl font-medium text-sage-800 sm:text-3xl"
        >
          Gallery
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-sage-600">
          Replace images in{" "}
          <code className="rounded bg-sage-100 px-1.5 py-0.5 text-xs">
            src/data/placeholders.ts
          </code>
          .
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {studioPhotos.map((photo) => (
            <li key={photo.src} className="min-w-0">
              <PhotoCard
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                aspect="standard"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
