import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage-900 text-stone-warm">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sage-800 via-sage-900 to-sage-800"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-sage-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-96 bg-gradient-to-t from-sage-900/80 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-200">
            Find your flow
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Find balance
            <br />
            <span className="italic text-sage-100">with Konstantina</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-sage-100/90 font-light leading-relaxed">
            Gentle flows, grounded teaching, and space to breathe. Join a class
            or reach out to book a private session.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-warm px-8 py-3 text-sm font-medium text-sage-900 transition hover:bg-white"
            >
              Book a class
            </Link>
            <Link
              to="/studio"
              className="inline-flex items-center justify-center rounded-full border border-stone-warm/50 px-8 py-3 text-sm font-medium text-stone-warm transition hover:bg-stone-warm/10"
            >
              See the studio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-medium text-sage-800 sm:text-4xl">
              About Konstantina
            </h2>
            <div className="mt-2 h-px w-16 bg-sage-400" />
            <p className="mt-8 text-sage-700 leading-relaxed">
              Konstantina is a yoga instructor focused on accessible movement,
              breath, and presence. Her sessions blend steady alignment with
              room to explore—whether you are new to the mat or deepening an
              existing practice.
            </p>
            <p className="mt-4 text-sage-700 leading-relaxed">
              <strong className="font-medium text-sage-800">
                Edit this section
              </strong>{" "}
              in <code className="rounded bg-sage-100 px-1.5 py-0.5 text-sm">src/pages/Home.tsx</code>{" "}
              with your real bio, certifications, and teaching style.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sage-100 shadow-xl shadow-sage-900/10">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop&q=80"
              alt="Placeholder portrait — replace with Konstantina"
              className="h-full w-full object-cover"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-sage-200 bg-sage-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="text-center font-display text-3xl font-medium text-sage-800">
            What we offer
          </h2>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
            {[
              {
                title: "Group classes",
                text: "Regular sessions for all levels in a supportive space.",
              },
              {
                title: "Workshops & events",
                text: "Seasonal gatherings and deeper dives into practice.",
              },
              {
                title: "Private sessions",
                text: "One-to-one guidance tailored to your body and goals.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="text-center sm:text-left"
              >
                <h3 className="font-display text-xl text-sage-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-sage-600 leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-14 text-center">
            <Link
              to="/contact"
              className="text-sm font-medium text-sage-600 underline decoration-sage-300 underline-offset-4 hover:text-sage-800"
            >
              Get in touch to book
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
