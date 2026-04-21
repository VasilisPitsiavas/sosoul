import { Link } from "react-router-dom";
import { Section } from "@/components/home/Section";
import { ServiceCard } from "@/components/home/ServiceCard";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { services, testimonials } from "@/data/homeContent";

const CALENDLY = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export function Home() {
  return (
    <>
      {/* Hero — light, conversion-focused */}
      <section className="relative overflow-hidden bg-stone-warm text-sage-900">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[22rem] w-[22rem] rounded-full bg-sage-200/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage-100/80 blur-2xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-section-lg sm:px-8">
          <p className="text-center text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.18em] text-sage-600 sm:text-left sm:text-xs sm:tracking-[0.22em]">
            So Soul Place · Find your flow
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-center font-display text-[1.65rem] font-medium leading-[1.15] tracking-tight text-sage-900 min-[400px]:text-3xl sm:mt-5 sm:text-left sm:text-5xl lg:text-6xl">
            A quiet space to come home to yourself.
          </h1>
          <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-sage-700 sm:mt-6 sm:text-left sm:text-lg">
            Yoga with Konstantina—gentle strength, breath you can feel, and
            teaching that meets you where you are. Step in, soften your shoulders,
            and leave clearer than you arrived.
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-sage-800 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-sage-900/10 transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-8 sm:py-3 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-sage-900 sm:hover:shadow-lg"
            >
              Book a session
            </Link>
            <Link
              to="/events"
              className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-sage-300/90 bg-white/70 px-6 py-3.5 text-base font-semibold text-sage-800 backdrop-blur-sm transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-8 sm:py-3 sm:text-sm sm:hover:border-sage-400 sm:hover:bg-white"
            >
              Explore classes
            </Link>
          </div>
        </div>
      </section>

      {/* About — storytelling, image alternates (image left on large screens) */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 min-w-0 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sage-100 shadow-xl ring-1 ring-sage-200/60">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop&q=80"
                  alt="Konstantina teaching yoga — replace with your photo"
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                />
              </div>
            </div>
            <div className="order-1 min-w-0 lg:order-2">
              <h2 className="text-balance font-display text-[1.625rem] font-medium leading-tight text-sage-800 sm:text-4xl lg:text-[2.35rem]">
                The story behind the mat
              </h2>
              <div className="mt-3 h-px w-14 bg-sage-400" />
              <p className="mt-8 text-base leading-relaxed text-sage-700 sm:text-lg">
                So Soul Place began as a simple wish: to offer a room where
                movement feels honest—never performative, never rushed. Konstantina
                teaches from the belief that your body already knows how to heal
                if you give it breath, patience, and kind attention.
              </p>
              <p className="mt-5 text-base leading-relaxed text-sage-700 sm:text-lg">
                Whether you are unwinding after long days at a desk, returning
                after time away, or curious for the very first time, you are
                welcome here. No mirrors required—just you, the floor, and a
                little more space than you had yesterday.
              </p>
              <p className="mt-8 border-l-2 border-sage-400 pl-5 font-display text-lg italic text-sage-800 sm:text-xl">
                Showing up is already enough. The practice simply helps you
                remember.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" variant="muted">
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium text-sage-800 sm:text-4xl">
              How we practice together
            </h2>
            <p className="mt-4 text-sage-600 leading-relaxed">
              Three ways to work with Konstantina—each designed to feel personal,
              grounded, and sustainable in real life.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {services.map((s, i) => (
              <li key={s.title} className="min-w-0">
                <ServiceCard {...s} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium text-sage-800 sm:text-4xl">
              Voices from the room
            </h2>
            <p className="mt-4 text-sage-600 leading-relaxed">
              Short words from people who share this practice—replace with real
              testimonials when you have them.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((t) => (
              <li key={t.name} className="min-w-0">
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Final CTA + booking options */}
      <Section variant="muted" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-sage-300/25 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-section sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-display text-[1.625rem] font-medium leading-tight text-sage-800 sm:text-4xl lg:text-[2.5rem]">
              Ready for a practice that fits your real life?
            </h2>
            <p className="mt-4 text-base text-pretty text-sage-700 sm:mt-5 sm:text-lg">
              Book a session or send a note—we will reply with times and next
              steps. Prefer to pick a slot yourself? Use the calendar when it is
              connected.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-sage-800 px-8 py-3.5 text-base font-semibold text-white shadow-md transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-10 sm:py-3 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-sage-900 sm:hover:shadow-lg"
              >
                Book a session
              </Link>
              {CALENDLY ? (
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-sage-400/90 bg-white/85 px-8 py-3.5 text-base font-semibold text-sage-800 backdrop-blur-sm transition duration-300 ease-out active:scale-[0.98] sm:w-auto sm:min-h-11 sm:px-10 sm:py-3 sm:text-sm sm:hover:border-sage-500 sm:hover:bg-white"
                >
                  Open calendar
                </a>
              ) : null}
              <Link
                to="/contact"
                className="py-2 text-center text-sm font-semibold text-sage-600 underline decoration-sage-300 underline-offset-4 transition hover:text-sage-900 sm:py-0"
              >
                Or write a message
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
