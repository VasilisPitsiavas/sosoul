import { type ReactNode, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoImg } from "@/components/PhotoCard";
import { eventPhotos, studioPhotos, type Photo } from "@/data/photos";
import { useLang } from "@/i18n/lang";

/** Photo banner with the page title on top. */
export function PageHero({
  photo,
  eyebrow,
  title,
  children,
  tall = false,
}: {
  photo: Photo;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <PhotoImg src={photo.src} fallback={photo.fallback} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-900/85 via-deep-900/55 to-deep-900/15" />
      <div
        className={`mx-auto flex max-w-6xl flex-col justify-end px-4 pb-14 pt-20 sm:px-8 lg:justify-center lg:pb-20 ${
          tall ? "min-h-[72svh]" : "min-h-[46svh]"
        }`}
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.08] text-mist sm:text-6xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

const formatImages = () => [eventPhotos[1], studioPhotos[0], eventPhotos[2]];

/** Small line icons for the back of each card: group, one person, laptop. */
const formatIcons = [
  <path key="g" d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2.5 2.5 0 1 0 0-5M3 19c0-3 2.7-5 6-5s6 2 6 5m2-5c2.4.3 4 2 4 4.5" />,
  <path key="p" d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6.5 9c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />,
  <path key="l" d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V15H4V6.5ZM2 18h20M10 10.5l2 1.5 2-1.5" />,
];

/**
 * Group / 1-on-1 / online cards.
 * `flip`: photo on the front, tap to turn it and read the details (Home).
 * Without it the description sits on the photo (Practice page).
 */
export function FormatCards({ flip = false }: { flip?: boolean }) {
  const { t } = useLang();
  const images = formatImages();
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {t.practice.formats.map((f, i) =>
        flip ? (
          <FlipCard key={f.title} format={f} photo={images[i]} icon={formatIcons[i]} />
        ) : (
          <li
            key={f.title}
            className="relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white sm:aspect-[3/4]"
          >
            <PhotoImg
              src={images[i].src}
              fallback={images[i].fallback}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-900/90 via-deep-900/45 to-transparent" />
            <h3 className="font-display text-2xl">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-baby-100">{f.text}</p>
          </li>
        ),
      )}
    </ul>
  );
}

function FlipCard({
  format,
  photo,
  icon,
}: {
  format: { title: string; text: string; points: string[] };
  photo: Photo;
  icon: ReactNode;
}) {
  const { t, path } = useLang();
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  // Keep keyboard focus on the side that is showing
  const turn = (toBack: boolean) => {
    setFlipped(toBack);
    requestAnimationFrame(() => (toBack ? backRef : frontRef).current?.focus({ preventScroll: true }));
  };
  const face = "rounded-3xl [grid-area:1/1] backface-hidden";

  return (
    <li className="group perspective-[1400px]">
      <div
        className={`grid min-h-[26rem] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] transform-3d motion-reduce:duration-0 sm:min-h-[28rem] ${
          flipped ? "rotate-y-180" : "group-hover:rotate-y-6"
        }`}
      >
        {/* Front: photo + title */}
        <button
          type="button"
          ref={frontRef}
          onClick={() => turn(true)}
          aria-expanded={flipped}
          inert={flipped}
          className={`${face} relative isolate flex flex-col items-start justify-end overflow-hidden p-6 text-left text-white outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent-500`}
        >
          <PhotoImg
            src={photo.src}
            fallback={photo.fallback}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-900/85 via-deep-900/25 to-transparent" />
          <h3 className="font-display text-3xl">{format.title}</h3>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm ring-1 ring-white/30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16m0 5v-5h5" />
            </svg>
            {t.practice.flipHint}
          </span>
        </button>

        {/* Back: details */}
        <div
          inert={!flipped}
          className={`${face} flex rotate-y-180 flex-col bg-baby-100 p-7 text-ink-900 ring-1 ring-baby-200`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent-600 ring-1 ring-baby-200">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {icon}
              </svg>
            </span>
            <button
              type="button"
              ref={backRef}
              onClick={() => turn(false)}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-deep-700 hover:bg-white/70"
            >
              ↺ {t.practice.flipBack}
            </button>
          </div>
          <h3 className="mt-5 font-display text-2xl">{format.title}</h3>
          <p className="mt-3 leading-relaxed text-deep-700">{format.text}</p>
          <ul className="mt-5 space-y-2.5">
            {format.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-sm font-medium text-ink-800">
                <svg className="mt-0.5 shrink-0 text-accent-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {pt}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Link
              to={path("/contact#contact")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink-900 px-6 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              {t.bookCta}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

/** Baby-blue band with a booking button. */
export function CtaBand({ title }: { title: string }) {
  const { t, path } = useLang();
  return (
    <section className="bg-baby-300 text-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl">{title}</h2>
        <Link
          to={path("/contact#contact")}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-ink-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-ink-800"
        >
          {t.bookCta}
        </Link>
      </div>
    </section>
  );
}
