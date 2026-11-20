import React from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data'

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs p-5 sm:p-6 space-y-5 scroll-mt-24"
    >
      <div className="flex items-baseline justify-between border-b border-[#dfdeda] pb-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
            Featured Projects
          </h2>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
            Selected Engineering & Research Builds
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold">
          {featuredProjects.length} Active Builds
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.map((project) => (
          <div
            key={project.slug}
            className="p-4 sm:p-4.5 rounded-xl border border-[#dfdeda] bg-zinc-50/50 hover:bg-white hover:border-zinc-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                  <span>{project.numeral}</span>
                  <span className="mx-1.5">/</span>
                  <span className="text-zinc-700 font-semibold">{project.category}</span>
                </div>
                {project.logo && (
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-[#dfdeda] p-1 flex items-center justify-center shadow-2xs">
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              <h3 className="text-base font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors">
                <Link to={`/projects/${project.slug}`} className="hover:underline">
                  {project.title}
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#dfdeda]/70 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white border border-[#dfdeda] text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/projects/${project.slug}`}
                className="text-xs font-mono font-medium text-zinc-800 hover:text-zinc-950 flex items-center gap-1 group-hover:underline"
              >
                <span>Deep Dive</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Projects as FeaturedProjectsSection }
