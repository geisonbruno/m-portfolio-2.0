import { externalLinks, portfolio, ui, type Locale } from "@/content/portfolio";
import { emailHref, httpsUrl } from "@/lib/links";

type FooterProps = {
  locale: Locale;
  year: number;
  links?: Record<keyof typeof portfolio.socialLabels, string | null>;
};

export function Footer({ locale, year, links = externalLinks }: FooterProps) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-border py-7 font-mono text-xs text-muted">
      <ul className="flex flex-wrap gap-6">
        {(["github", "linkedin", "email"] as const).map((key) => {
          const label = portfolio.socialLabels[key];
          const href = key === "email" ? emailHref(links[key]) : httpsUrl(links[key]);
          return <li key={key}>
            {href ? <a href={href} className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
              target={key === "email" ? undefined : "_blank"} rel={key === "email" ? undefined : "noopener noreferrer"}>
              {label}
              {key !== "email" && <><span aria-hidden="true">↗</span><span className="sr-only"> ({ui.newTab[locale]})</span></>}
            </a> : <span className="inline-flex min-h-11 items-center" title={ui.unavailable[locale]}>
              {label}<span className="sr-only"> ({ui.unavailable[locale]})</span>
            </span>}
          </li>;
        })}
      </ul>
      <p>© {year} {portfolio.name}</p>
    </footer>
  );
}
