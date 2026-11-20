import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { featuredProjects } from './data'

export default function ProjectDetail() {
  const { slug } = useParams()

  const projectIndex = featuredProjects.findIndex((p) => p.slug === slug)
  const project = featuredProjects[projectIndex]

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    if (project) {
      document.title = `${project.title} | Mudit Choudhary`
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', project.description || project.summary)
      }
    } else {
      document.title = 'Project Not Located | Mudit Choudhary'
    }

    return () => {
      document.title = 'Mudit Choudhary | Machine Learning & Applied Cryptography Engineer'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Portfolio of Mudit Choudhary — Machine Learning & Applied Cryptography Engineer. MSc Cybersecurity candidate at NTU Singapore specializing in post-quantum cryptography, zero-knowledge architectures, and geospatial AI.'
        )
      }
    }
  }, [slug, project])

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          404 — Not Found
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-sans">
          Project Not Located
        </h1>
        <p className="text-sm text-zinc-600 font-light">
          The requested project deep-dive cannot be located in the current index.
        </p>
        <div className="pt-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors shadow-xs"
          >
            ← View All Projects
          </Link>
        </div>
      </div>
    )
  }

  const prevProject = projectIndex > 0 ? featuredProjects[projectIndex - 1] : null
  const nextProject =
    projectIndex < featuredProjects.length - 1 ? featuredProjects[projectIndex + 1] : null

  return (
    <article className="max-w-5xl mx-auto px-6 pt-24 sm:pt-28 pb-16 space-y-12 animate-fade-in">
      {/* 1. Header Block */}
      <section className="space-y-5 pb-8 border-b border-[#dfdeda]">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <Link to="/#projects" className="hover:text-zinc-950 hover:underline">
            Projects
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-800 font-semibold">{project.category}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-1">
          {project.logo && (
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-[#dfdeda] p-2 flex items-center justify-center shadow-xs">
              <img
                src={project.logo}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">
            {project.title}
          </h1>
        </div>

        <div className="space-y-3.5 w-full">
          {Array.isArray(project.summary) ? (
            project.summary.map((para, pIdx) => (
              <p
                key={pIdx}
                className="text-base sm:text-lg text-zinc-700 font-light leading-relaxed w-full"
              >
                {para}
              </p>
            ))
          ) : (
            <p className="text-base sm:text-lg text-zinc-700 font-light leading-relaxed w-full">
              {project.summary}
            </p>
          )}
        </div>

        {/* Links & Quick Actions */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3">
          {project.links && project.links.length > 0 ? (
            project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-[#dfdeda] text-zinc-900 text-xs font-mono uppercase tracking-wider rounded-md hover:bg-zinc-50 hover:border-zinc-400 hover:shadow-xs transition-all shadow-2xs font-medium"
              >
                <span>{link.label}</span>
                <span>↗</span>
              </a>
            ))
          ) : (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider rounded-md hover:bg-zinc-800 transition-colors shadow-xs"
                >
                  <span>Source Repository</span>
                  <span>↗</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#dfdeda] text-zinc-900 text-xs font-mono uppercase tracking-wider rounded-md hover:border-zinc-400 transition-colors shadow-xs"
                >
                  <span>Live Demonstration</span>
                  <span>↗</span>
                </a>
              )}
            </>
          )}
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      {project.metrics && project.metrics.length > 0 && (
        <section
          className={`grid gap-4 ${
            project.metrics.length >= 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-3'
          }`}
        >
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-1"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                {m.label}
              </span>
              <div className="text-2xl font-bold font-mono text-zinc-950">
                {m.value}
              </div>
              <p className="text-xs text-zinc-500 font-mono">{m.sub}</p>
            </div>
          ))}
        </section>
      )}

      {/* 3. Deep Dive Architecture & Threat Model */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-8">
          {project.milestones && project.milestones.length > 0 && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-5">
              <div className="flex items-baseline justify-between border-b border-[#dfdeda] pb-3">
                <h2 className="text-lg font-bold font-sans text-zinc-950">
                  Key Achievements & Milestones
                </h2>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Verified Records
                </span>
              </div>

              <div className="space-y-4 pt-1">
                {project.milestones.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm font-bold text-zinc-900">
                        {idx + 1}.
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-sans">
                        {item.title}
                      </h3>
                    </div>
                    {Array.isArray(item.bullets) ? (
                      <ul className="list-disc pl-6 sm:pl-7 space-y-1 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="pl-6 sm:pl-7 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                        {item.detail || item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.architecture && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-5">
              <div className="flex items-baseline justify-between border-b border-[#dfdeda] pb-3">
                <h2 className="text-lg font-bold font-sans text-zinc-950">
                  System Architecture
                </h2>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Platform Architecture
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
                {project.architecture}
              </p>

              {project.architecturePoints && project.architecturePoints.length > 0 && (
                <div className="space-y-5 pt-2">
                  {project.architecturePoints.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-sm font-bold text-zinc-900">
                          {idx + 1}.
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-sans">
                          {item.title}
                          {item.layer && (
                            <span className="text-xs font-mono font-normal text-zinc-400 ml-2">
                              · {item.layer}
                            </span>
                          )}
                        </h3>
                      </div>
                      {Array.isArray(item.bullets) ? (
                        <ul className="list-disc pl-6 sm:pl-7 space-y-1 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                          {item.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="pl-6 sm:pl-7 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {project.threatModel && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#dfdeda] pb-3">
                <h2 className="text-lg font-bold font-sans text-zinc-950">
                  Threat Model & Security Guarantees
                </h2>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Audit & Integrity
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
                {project.threatModel}
              </p>

              {project.threatModelPoints && project.threatModelPoints.length > 0 && (
                <ul className="list-disc pl-6 sm:pl-7 space-y-1.5 pt-1 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {project.threatModelPoints.map((item, idx) => (
                    <li key={idx}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          <strong className="font-semibold text-zinc-900">
                            {item.title}:
                          </strong>{' '}
                          {item.description}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {project.tradeoffs && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#dfdeda] pb-3">
                <h2 className="text-lg font-bold font-sans text-zinc-950">
                  Engineering Trade-Offs
                </h2>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Scale & Performance
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
                {project.tradeoffs}
              </p>

              {project.tradeoffPoints && project.tradeoffPoints.length > 0 && (
                <ul className="list-disc pl-6 sm:pl-7 space-y-1.5 pt-1 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {project.tradeoffPoints.map((item, idx) => (
                    <li key={idx}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          <strong className="font-semibold text-zinc-900">
                            {item.title}:
                          </strong>{' '}
                          {item.description}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
        </div>

        {/* Sidebar: Technology Stack & Metadata (Sticky on Desktop) */}
        <aside className="md:col-span-4 space-y-6 md:sticky md:top-24 self-start md:max-h-[calc(100vh-7rem)] md:overflow-y-auto overscroll-contain pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-track]:bg-transparent">
          <div className="p-6 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Technologies & Standards
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-50 border border-[#dfdeda] text-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.departments && project.departments.length > 0 && (
            <div className="p-6 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Top Contributing Departments
              </h3>
              <div className="space-y-2 pt-1">
                {project.departments.map((dept) => (
                  <div
                    key={dept.name}
                    className="flex items-center justify-between text-xs gap-2"
                  >
                    <span className="text-zinc-700 font-light truncate">
                      {dept.name}
                    </span>
                    <span className="font-mono font-semibold text-zinc-950 shrink-0">
                      {dept.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.topSpecies && project.topSpecies.length > 0 && (
            <div className="p-6 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Top Planted Native Species
              </h3>
              <div className="space-y-2 pt-1">
                {project.topSpecies.map((sp) => (
                  <div
                    key={sp.name}
                    className="flex items-center justify-between text-xs gap-2"
                  >
                    <span className="text-zinc-700 font-light truncate">
                      {sp.name}
                    </span>
                    <span className="font-mono font-semibold text-zinc-950 shrink-0">
                      {sp.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Category
            </h3>
            <p className="text-sm font-semibold text-zinc-900 font-sans">
              {project.category}
            </p>
          </div>
        </aside>
      </div>

      {/* 4. Bottom Project Navigation (Prev / Next) */}
      <footer className="pt-8 border-t border-[#dfdeda] flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors font-medium"
          >
            <span>←</span>
            <span>{prevProject.title}</span>
          </Link>
        ) : (
          <span className="text-zinc-300">Start of Index</span>
        )}

        <Link
          to="/#projects"
          className="text-zinc-400 hover:text-zinc-950 transition-colors"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors font-medium ml-auto"
          >
            <span>{nextProject.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <span className="text-zinc-300 ml-auto">End of Index</span>
        )}
      </footer>
    </article>
  )
}
