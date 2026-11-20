import React from 'react'
import { technicalStack } from '../data'

function getSkillList(skills) {
  if (Array.isArray(skills)) return skills
  if (typeof skills === 'string') {
    return skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  }
  return []
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs overflow-hidden scroll-mt-24"
    >
      {/* Section Header */}
      <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex items-baseline justify-between border-b border-[#dfdeda]">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
            Technical Stack
          </h2>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
            Core Engineering & Cryptography Competencies
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline-block">
          Core Domains
        </span>
      </div>

      {/* Core Technical Capabilities (Row-based list matching the website's divide-y layout) */}
      <div className="divide-y divide-[#dfdeda]">
        {technicalStack.map((group) => {
          const title = group.domain || group.category || 'Domain'
          const skills = getSkillList(group.skills)

          return (
            <div
              key={title}
              className="px-6 py-4.5 sm:px-8 sm:py-5 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 group"
            >
              {/* Left Column: Domain Meta */}
              <div className="md:w-60 shrink-0 space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-sans tracking-tight">
                  {title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {skills.length} competencies
                </p>
              </div>

              {/* Right Column: Clean Monospace Skill Badges */}
              <div className="flex-1 flex flex-wrap gap-2 items-center">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-50 border border-[#dfdeda] text-zinc-700 hover:border-zinc-400 hover:bg-white hover:text-zinc-950 transition-colors shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { Skills as SkillsSection }
