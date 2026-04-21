import { FormEvent, useState } from "react";

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <h1 className="font-display text-4xl font-medium text-sage-800 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-sage-600 leading-relaxed">
            Send a message to book a class, ask about workshops, or request a
            private session. We will get back to you as soon as we can.
          </p>
          {!FORMSPREE && (
            <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
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
              in a <code className="rounded bg-amber-100/80 px-1">.env</code>{" "}
              file (see <code className="rounded bg-amber-100/80 px-1">.env.example</code>
              ).
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-sage-200 bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
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
                className="mt-1.5 w-full rounded-xl border border-sage-200 bg-stone-warm px-4 py-2.5 text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200"
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
                className="mt-1.5 w-full rounded-xl border border-sage-200 bg-stone-warm px-4 py-2.5 text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200"
              />
            </div>
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-sage-800"
              >
                I am interested in
              </label>
              <select
                id="topic"
                name="topic"
                className="mt-1.5 w-full rounded-xl border border-sage-200 bg-stone-warm px-4 py-2.5 text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="group-class">Group class</option>
                <option value="private">Private session</option>
                <option value="workshop">Workshop / event</option>
                <option value="other">Other</option>
              </select>
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
                rows={5}
                className="mt-1.5 w-full resize-y rounded-xl border border-sage-200 bg-stone-warm px-4 py-2.5 text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200"
                placeholder="Preferred days, experience level, or any questions…"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || !FORMSPREE}
              className="w-full rounded-full bg-sage-800 py-3 text-sm font-medium text-white transition hover:bg-sage-900 disabled:cursor-not-allowed disabled:opacity-50"
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
