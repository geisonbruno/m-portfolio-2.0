import { portfolio, type Locale } from "@/content/portfolio";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <p className="mb-5 text-base text-muted">{portfolio.hero.intro[locale]}</p>
      <h1 id="hero-title" className="hero-title">{portfolio.hero.title[locale]}</h1>
      <p className="mt-7 font-mono text-xs text-muted sm:text-sm">{portfolio.hero.location[locale]}</p>
    </section>
  );
}
