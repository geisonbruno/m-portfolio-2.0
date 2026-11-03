import { portfolio, type Locale } from "@/content/portfolio";

export function About({ locale }: { locale: Locale }) {
  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">{portfolio.sections.about[locale]}</h2>
      <div className="content-inset space-y-4">
        {portfolio.about[locale].map((paragraph) => <p className="copy" key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
