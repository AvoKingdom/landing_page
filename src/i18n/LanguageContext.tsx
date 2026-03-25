import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Locale } from "./types";
import { siteMessages, type SiteMessages } from "./messages";

const STORAGE_KEY = "avk-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  messages: SiteMessages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());

  const setLocale = (l: Locale) => setLocaleState(l);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = locale === "en" ? "en" : "es-MX";
    const m = siteMessages[locale].meta;
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", m.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", m.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", m.description);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: siteMessages[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
