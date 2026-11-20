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
      <section className="space-y-4 pb-8 border-b border-[#dfdeda]">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <Link to="/#projects" className="hover:text-zinc-950 hover:underline">
            Projects
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-800 font-semibold">{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-700 font-light leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Links & Quick Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
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
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-8">
          {project.architecture && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-3">
              <h2 className="text-lg font-bold font-sans text-zinc-950">
                System Architecture
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
                {project.architecture}
              </p>
            </section>
          )}

          {project.threatModel && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-3">
              <h2 className="text-lg font-bold font-sans text-zinc-950">
                Threat Model & Security Guarantees
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
                {project.threatModel}
              </p>
            </section>
          )}

          {project.tradeoffs && (
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-[#dfdeda] shadow-xs space-y-3">
              <h2 className="text-lg font-bold font-sans text-zinc-950">
                Engineering Trade-Offs
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
                {project.tradeoffs}
              </p>
            </section>
          )}
        </div>

        {/* Sidebar: Technology Stack */}
        <aside className="md:col-span-4 space-y-6">
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
