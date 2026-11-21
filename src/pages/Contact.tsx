import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/lang";
import { btnPrimary, btnSecondary, eyebrow, h2 } from "@/components/styles";

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

  const input =
    "mt-2 min-h-12 w-full rounded-xl border border-baby-200 bg-white px-4 py-3 text-base text-ink-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-baby-200";

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-baby-50">
        <div className="mx-auto max-w-3xl px-4 py-section sm:px-8">
          <p className={eyebrow}>{t.faqEyebrow}</p>
          <h1 className="mt-3 text-balance font-display text-4xl font-medium text-ink-800 sm:text-5xl">
            {t.faqTitle}
          </h1>
          <div className="mt-10 space-y-3">
            {t.faq.map((f, i) => (
              <details key={f.q} open={i === 0} className="group rounded-2xl bg-white px-6 py-4 ring-1 ring-baby-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
                  {f.q}
                  <span className="text-xl text-accent-500 transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-deep-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="min-w-0">
            <h2 className={h2}>{t.title}</h2>
            <p className="mt-4 text-pretty text-base leading-relaxed sm:text-lg text-deep-700">{t.intro}</p>
            <ul className="mt-10 space-y-4 text-deep-700">
              <li>
                <p className="text-sm font-semibold text-ink-800">{t.email}</p>
                <a className="text-lg underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.phone && (
                <li>
                  <p className="text-sm font-semibold text-ink-800">{t.phone}</p>
                  <a className="text-lg underline-offset-4 hover:underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                </li>
              )}
              <li>
                <p className="text-sm font-semibold text-ink-800">{t.instagram}</p>
                <a className="text-lg underline-offset-4 hover:underline" href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
              </li>
            </ul>
            {CALENDLY ? (
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} mt-8`}>
                {t.calendly}
              </a>
            ) : null}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-baby-200 sm:p-8">
            <h3 className="font-display text-2xl font-medium text-ink-800">{t.formTitle}</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink-800">{t.name}</label>
                <input id="name" name="name" type="text" required autoComplete="name" className={input} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-800">{t.email}</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={input} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-800">{t.message}</label>
                <textarea id="message" name="message" required rows={6} placeholder={t.placeholder} className={`${input} min-h-[10rem] resize-y`} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${btnPrimary} w-full disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {status === "sending" ? t.sending : t.send}
              </button>
            </form>
            {status === "ok" && <p className="mt-4 text-center text-sm font-medium text-deep-600">{t.sent}</p>}
            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-700">{t.error} {site.email}.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
