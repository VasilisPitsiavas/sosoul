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
      ? "h-14 w-14 sm:h-16 sm:w-16"
      : "h-28 w-28";

  return (
    <img
      src={LOGO_SRC}
      alt=""
      width={384}
      height={384}
      decoding="async"
      className={`object-contain ${sizeClass} ${className ?? ""}`}
    />
  );
}
