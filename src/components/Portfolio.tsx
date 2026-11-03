"use client";

import { useEffect } from "react";
import { ui, type Locale } from "@/content/portfolio";
import { localeKey, themeKey, type Theme } from "@/lib/preferences";
import { usePreference } from "@/lib/usePreference";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export function Portfolio() {
  const [locale, setLocale] = usePreference<Locale>(localeKey, "en", ["en", "pt-BR"]);
  const [theme, setTheme] = usePreference<Theme>(themeKey, "dark", ["dark", "light"]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function changeTheme(next: Theme) {
    // Initial theme is applied by the pre-paint script; never overwrite it
    // with the server default during hydration.
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  return (
    <div className="page-shell">
      <a className="skip-link" href="#content">{ui.skip[locale]}</a>
      <Header locale={locale} theme={theme} setLocale={setLocale} setTheme={changeTheme} />
      <main id="content" tabIndex={-1}>
        <Hero locale={locale} />
        <Projects locale={locale} />
      </main>
    </div>
  );
}
