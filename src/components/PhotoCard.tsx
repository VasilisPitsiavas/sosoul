import { type ImgHTMLAttributes, useState } from "react";

/** Image that shows `fallback` (stock photo) until your own file exists. */
export function PhotoImg({
  src,
  fallback,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { src: string; fallback: string }) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      {...rest}
      src={current}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}

type PhotoCardProps = {
  src: string;
  fallback: string;
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
  fallback,
  alt,
  caption,
  aspect = "standard",
  zoom = false,
}: PhotoCardProps) {
  return (
    <figure className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-baby-100 shadow-md ring-1 ring-baby-200/50 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`relative w-full overflow-hidden ${aspectClass[aspect]}`}>
        <PhotoImg
          src={src}
          fallback={fallback}
          alt={alt}
          width={900}
          height={aspect === "landscape" ? 600 : 675}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${zoom ? "transition duration-500 group-hover:scale-[1.02]" : ""}`}
        />
      </div>
      <figcaption className="border-t border-baby-200/80 bg-mist/90 px-4 py-3 text-sm text-deep-700">
        {caption}
      </figcaption>
    </figure>
  );
}
