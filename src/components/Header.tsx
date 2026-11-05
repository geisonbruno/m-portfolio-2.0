import { portfolio, ui, type Locale } from "@/content/portfolio";

type HeaderProps = {
  locale: Locale;
  theme: "dark" | "light";
  setLocale: (locale: Locale) => void;
  setTheme: (theme: "dark" | "light") => void;
};

export function Header({ locale, theme, setLocale, setTheme }: HeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-6 sm:py-8">
      <p className="font-mono text-sm tracking-[0.08em] uppercase">{portfolio.name}</p>
      <div className="flex items-center gap-3 font-mono text-xs">
        <div role="group" aria-label={ui.language[locale]} className="flex items-center">
          <button type="button" lang="en" aria-label="EN — English" aria-pressed={locale === "en"}
            className="language-button" onClick={() => setLocale("en")}>{portfolio.languageLabels.en}</button>
          <span aria-hidden="true" className="text-muted">/</span>
          <button type="button" lang="pt-BR" aria-label="PT — Português brasileiro" aria-pressed={locale === "pt-BR"}
            className="language-button" onClick={() => setLocale("pt-BR")}>{portfolio.languageLabels["pt-BR"]}</button>
        </div>
        <span aria-hidden="true" className="h-5 border-l border-border" />
        <button type="button" className="theme-button" aria-label={theme === "dark" ? ui.lightTheme[locale] : ui.darkTheme[locale]}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <span className="theme-track" aria-hidden="true">
            <span className="theme-knob">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {theme === "dark" ? <path d="M20.4 13.1A8.5 8.5 0 0 1 10.9 3.6a8.5 8.5 0 1 0 9.5 9.5Z" /> : <><circle cx="12" cy="12" r="4" /><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></>}
              </svg>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
