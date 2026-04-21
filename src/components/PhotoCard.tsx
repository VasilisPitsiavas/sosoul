type PhotoCardProps = {
  src: string;
  alt: string;
  caption: string;
  /** Gallery tile shape */
  aspect?: "landscape" | "standard";
  /** Optional hover zoom on image */
  zoom?: boolean;
};

const aspectClass = {
  landscape: "aspect-[3/2]",
  standard: "aspect-[4/3]",
} as const;

export function PhotoCard({
  src,
  alt,
  caption,
  aspect = "standard",
  zoom = false,
}: PhotoCardProps) {
  return (
    <figure className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-sage-100 shadow-md ring-1 ring-sage-200/50 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`relative w-full overflow-hidden ${aspectClass[aspect]}`}>
        <img
          src={src}
          alt={alt}
          width={900}
          height={aspect === "landscape" ? 600 : 675}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${zoom ? "transition duration-500 group-hover:scale-[1.02]" : ""}`}
        />
      </div>
      <figcaption className="border-t border-sage-200/80 bg-stone-warm/90 px-4 py-3 text-sm text-sage-700">
        {caption}
      </figcaption>
    </figure>
  );
}
