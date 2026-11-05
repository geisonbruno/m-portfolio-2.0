import { portfolio, type Locale } from "@/content/portfolio";

export function Experience({ locale }: { locale: Locale }) {
  const { experience } = portfolio;
  return (
    <section className="section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">{portfolio.sections.experience[locale]}</h2>
      <div className="content-inset">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div>
            <h3 className="text-xl font-medium tracking-tight">{experience.company}</h3>
            <p className="mt-1 text-sm text-muted">{experience.role}</p>
          </div>
          <p className="font-mono text-xs text-muted">{experience.period}</p>
        </div>
        <p className="copy mt-5">{experience.description[locale]}</p>
      </div>
    </section>
  );
}
