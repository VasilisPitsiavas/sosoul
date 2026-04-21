/** Brand image in /public — prefixed with Vite base for GitHub Pages. */
export const LOGO_SRC = `${import.meta.env.BASE_URL}logo-so-soul-place.jpg`;

type LogoProps = {
  className?: string;
  /** Header: compact. Footer: larger. */
  variant?: "header" | "footer";
};

export function Logo({ className, variant = "header" }: LogoProps) {
  const sizeClass =
    variant === "header"
      ? "h-[4.5rem] w-[4.5rem] shrink-0 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
      : "h-36 w-36 sm:h-40 sm:w-40";

  return (
    <img
      src={LOGO_SRC}
      alt=""
      width={1024}
      height={1024}
      decoding="async"
      className={`object-contain ${sizeClass} ${className ?? ""}`}
    />
  );
}
