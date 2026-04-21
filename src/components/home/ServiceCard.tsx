import { Link } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  to: string;
  cta: string;
  index: number;
};

export function ServiceCard({
  title,
  description,
  to,
  cta,
  index,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-sage-200/80 bg-stone-warm p-5 shadow-sm ring-1 ring-sage-100/80 transition duration-300 ease-out sm:p-8 sm:hover:-translate-y-0.5 sm:hover:border-sage-300/80 sm:hover:shadow-md">
      <span
        className="font-display text-3xl font-medium tabular-nums text-sage-300 transition-colors group-hover:text-sage-400"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-display text-xl font-medium text-sage-800 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-sage-600 sm:text-base">
        {description}
      </p>
      <Link
        to={to}
        className="mt-6 inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-xl border border-sage-200/90 bg-white/80 py-3 text-base font-semibold text-sage-800 transition active:scale-[0.99] sm:min-h-11 sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:py-2 sm:text-sm sm:text-sage-700 sm:underline sm:decoration-sage-300 sm:underline-offset-4 sm:hover:text-sage-900"
      >
        {cta}
      </Link>
    </article>
  );
}
