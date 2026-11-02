import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/lang";

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const CALENDLY = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export function Contact() {
  const { t: all } = useLang();
  const t = all.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORMSPREE) {
      // No form service yet: open the visitor's email app with the message filled in
      const d = new FormData(form);
      const subject = encodeURIComponent(`${t.mailSubject} ${d.get("name")}`);
      const body = encodeURIComponent(`${d.get("message")}\n\n${d.get("name")} · ${d.get("email")}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
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
            {t.title}
          </h1>
          <p className="mt-4 text-base text-pretty text-sage-700 leading-relaxed sm:text-lg">
            {t.intro}
          </p>

          <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href="#contact-form"
              className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-sage-800 px-8 py-3.5 text-base font-semibold text-white shadow-md transition duration-300 active:scale-[0.98] sm:w-auto sm:min-h-11 sm:py-3 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-sage-900"
            >
              {t.write}
            </a>
            {CALENDLY ? (
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-sage-300 bg-white/90 px-8 py-3.5 text-base font-semibold text-sage-800 transition duration-300 active:scale-[0.98] sm:w-auto sm:min-h-11 sm:py-3 sm:text-sm sm:hover:border-sage-400 sm:hover:bg-white"
              >
                {t.calendly}
              </a>
            ) : null}
          </div>
          <ul className="mt-10 space-y-3 text-sage-700">
            <li>
              <span className="font-semibold text-sage-800">{t.email}: </span>
              <a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone && (
              <li>
                <span className="font-semibold text-sage-800">{t.phone}: </span>
                <a className="underline-offset-4 hover:underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
            )}
            <li>
              <span className="font-semibold text-sage-800">{t.instagram}: </span>
              <a className="underline-offset-4 hover:underline" href={site.instagram} target="_blank" rel="noopener noreferrer">{t.instagramLink}</a>
            </li>
          </ul>
        </div>

        <div
          id="contact-form"
          className="scroll-mt-24 rounded-2xl border border-sage-200/90 bg-stone-warm p-5 shadow-sm ring-1 ring-sage-100 sm:scroll-mt-28 sm:p-8"
        >
          <h2 className="font-display text-xl font-medium text-sage-800">
            {t.formTitle}
          </h2>
          <p className="mt-2 text-sm text-sage-600">
            {t.formIntro}
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-sage-800"
              >
                {t.name}
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
                {t.email}
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
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 min-h-[10rem] w-full resize-y rounded-xl border border-sage-200 bg-white px-4 py-3 text-base text-sage-900 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-200"
                placeholder={t.placeholder}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="min-h-12 w-full touch-manipulation rounded-full bg-sage-800 py-3.5 text-base font-semibold text-white transition duration-300 active:scale-[0.98] hover:bg-sage-900 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-11 sm:py-3 sm:text-sm"
            >
              {status === "sending" ? t.sending : t.send}
            </button>
          </form>

          {status === "ok" && (
            <p className="mt-4 text-center text-sm font-medium text-sage-600">
              {t.sent}
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-700">
              {t.error} {site.email}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
