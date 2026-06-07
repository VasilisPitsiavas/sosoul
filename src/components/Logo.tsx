/** Brand image in /public — prefixed with Vite base for GitHub Pages. */
export const LOGO_SRC = `${import.meta.env.BASE_URL}logo-so-soul-place.png`;

type LogoProps = {
  className?: string;
  /** Header: compact. Footer: larger. */
  variant?: "header" | "footer";
};

export function Logo({ className, variant = "header" }: LogoProps) {
  const sizeClass =
    variant === "header"
    ? "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"   // Header variant (bigger)
    : "h-40 w-40 sm:h-48 sm:w-48"  // Footer variant (larger)

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
