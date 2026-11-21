import { createContext, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { type Content, content } from "./content";

/** Greek is the main language at "/", English lives under "/en". */
export type Lang = "el" | "en";

type LangValue = {
  lang: Lang;
  t: Content;
  /** Turn a site path like "/about" or "/contact#faq" into this language's URL. */
  path: (p: string) => string;
};

export function localPath(lang: Lang, p: string) {
  if (lang === "el") return p;
  const [page, hash] = p.split("#");
  const base = page === "/" ? "/en" : `/en${page}`;
  return hash ? `${base}#${hash}` : base;
}

const LangContext = createContext<LangValue>({
  lang: "el",
  t: content.el,
  path: (p) => p,
});

export const useLang = () => useContext(LangContext);

/** Route wrapper: sets the language for every page inside it. */
export function LangRoot({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider
      value={{ lang, t: content[lang], path: (p) => localPath(lang, p) }}
    >
      <Layout>
        <Outlet />
      </Layout>
    </LangContext.Provider>
  );
}
