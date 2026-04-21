import { studioPhotos } from "@/data/placeholders";

export function Studio() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-medium text-sage-800 sm:text-5xl">
          The studio
        </h1>
        <p className="mt-4 text-sage-600 leading-relaxed">
          A calm room for practice—natural light, simple lines, and everything
          you need for a grounded session. Update this copy with your real
          address, opening hours, and how to find you.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4 text-sage-700 leading-relaxed">
          <p>
            We keep the space uncluttered so you can focus on breath and
            movement. Mats and props are available; you are welcome to bring
            your own mat if you prefer.
          </p>
          <p className="text-sm text-sage-600">
            <strong className="font-medium text-sage-800">Placeholder:</strong>{" "}
            Add parking, public transport, accessibility notes, and studio
            etiquette here.
          </p>
        </div>
        <ul className="space-y-6">
          {studioPhotos.map((photo) => (
            <li key={photo.src}>
              <figure className="overflow-hidden rounded-2xl bg-sage-100 shadow-md">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full object-cover"
                  width={900}
                  height={675}
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
    </div>
  );
}
