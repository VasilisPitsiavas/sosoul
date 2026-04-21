import { FormEvent, useState } from "react";

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const CALENDLY = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORMSPREE) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-section sm:px-8">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="min-w-0">
          <h1 className="text-balance font-display text-3xl font-medium text-sage-800 sm:text-5xl">
            Book &amp; contact
          </h1>
          <p className="mt-4 text-base text-pretty text-sage-700 leading-relaxed sm:text-lg">
            Send a short message with what you are looking for—we will get back
            to you with availability and next steps.
          </p>

          <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href="#contact-form"
              className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-sage-800 px-8 py-3.5 text-base font-semibold text-white shadow-md transition duration-300 active:scale-[0.98] sm:w-auto sm:min-h-11 sm:py-3 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-sage-900"
            >
              Write a message
            </a>
            {CALENDLY ? (
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-sage-300 bg-white/90 px-8 py-3.5 text-base font-semibold text-sage-800 transition duration-300 active:scale-[0.98] sm:w-auto sm:min-h-11 sm:py-3 sm:text-sm sm:hover:border-sage-400 sm:hover:bg-white"
              >
                Pick a time (Calendly)
              </a>
            ) : null}
          </div>
          {!CALENDLY && (
            <p className="mt-4 text-xs text-sage-600">
              Optional: set{" "}
              <code className="rounded bg-sage-100 px-1 py-0.5">
                VITE_CALENDLY_URL
              </code>{" "}
              in <code className="rounded bg-sage-100 px-1 py-0.5">.env</code> to
              show a scheduling link.
            </p>
          )}

          {!FORMSPREE && (
            <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              To enable the form, create a form at{" "}
              <a
                href="https://formspree.io"
                className="font-medium underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                Formspree
              </a>{" "}
              and set{" "}
              <code className="rounded bg-amber-100/80 px-1">
                VITE_FORMSPREE_ENDPOINT
              </code>{" "}
              in <code className="rounded bg-amber-100/80 px-1">.env</code> (see{" "}
              <code className="rounded bg-amber-100/80 px-1">.env.example</code>
              ).
            </p>
          )}
        </div>

        <div
          id="contact-form"
          className="scroll-mt-24 rounded-2xl border border-sage-200/90 bg-stone-warm p-5 shadow-sm ring-1 ring-sage-100 sm:scroll-mt-28 sm:p-8"
        >
          <h2 className="font-display text-xl font-medium text-sage-800">
            Send a message
          </h2>
          <p className="mt-2 text-sm text-sage-600">
            Name, email, and a few lines are enough—we will follow up by email.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-sage-800"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-2 min-h-12 w-full rounded-xl border border-sage-200 bg-white px-4 py-3 text-base text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200 sm:min-h-11 sm:py-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-sage-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 min-h-12 w-full rounded-xl border border-sage-200 bg-white px-4 py-3 text-base text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200 sm:min-h-11 sm:py-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-sage-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 min-h-[10rem] w-full resize-y rounded-xl border border-sage-200 bg-white px-4 py-3 text-base text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200"
                placeholder="Tell us what you are looking for (e.g. private session, group class, preferred days)…"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || !FORMSPREE}
              className="min-h-12 w-full touch-manipulation rounded-full bg-sage-800 py-3.5 text-base font-semibold text-white transition duration-300 active:scale-[0.98] hover:bg-sage-900 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-11 sm:py-3 sm:text-sm"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>

          {status === "ok" && (
            <p className="mt-4 text-center text-sm font-medium text-sage-600">
              Thank you — your message was sent.
            </p>
          )}
          {status === "error" && FORMSPREE && (
            <p className="mt-4 text-center text-sm text-red-700">
              Something went wrong. Please try again or email directly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
