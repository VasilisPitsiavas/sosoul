type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-sage-200/60 bg-stone-warm/90 p-5 shadow-sm transition duration-300 ease-out sm:p-8 sm:hover:border-sage-300/70 sm:hover:shadow-md">
      <p className="text-pretty font-display text-base font-normal italic leading-snug text-sage-800 sm:text-lg md:text-xl">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-sage-200/70 pt-4">
        <cite className="not-italic text-sm font-semibold text-sage-800">
          {name}
        </cite>
        <p className="mt-0.5 text-xs text-sage-600">{role}</p>
      </footer>
    </blockquote>
  );
}
