import { portfolio, projects, ui, type Locale, type Project } from "@/content/portfolio";
import { repositoryUrl } from "@/lib/links";

export function ProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  const href = repositoryUrl(project.githubUrl);
  return (
    <article className="project-row" aria-labelledby={`project-${project.number}`}>
      <span className="project-number" aria-hidden="true">{project.number}</span>
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <h3 id={`project-${project.number}`} className="text-xl font-medium tracking-tight sm:text-2xl">{project.name}</h3>
          <div className="flex shrink-0 items-center gap-5">
            <time className="font-mono text-xs text-muted" dateTime={project.year}>{project.year}</time>
            {href ? <a className="project-action" href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`${project.name} — GitHub (${ui.newTab[locale]})`}>
              <span aria-hidden="true">↗</span>
            </a> : <span className="project-action text-muted">
              <span aria-hidden="true">—</span>
              <span className="sr-only">{project.name}: {ui.unavailable[locale]}</span>
            </span>}
          </div>
        </div>
        <p className="copy mt-3 whitespace-pre-line">{project.description[locale]}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={project.name}>
          {project.technologies.map((technology) => <li className="technology" key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function Projects({ locale }: { locale: Locale }) {
  return (
    <section className="section projects-section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">{portfolio.sections.projects[locale]}</h2>
      {projects.map((project) => <ProjectRow key={project.number} project={project} locale={locale} />)}
    </section>
  );
}
