import React from 'react'
import { experienceList } from '../data'

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs overflow-hidden scroll-mt-24"
    >
      {/* Section Header */}
      <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex items-baseline justify-between border-b border-[#dfdeda]">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
          Experience
        </h2>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Industry Roles
        </span>
      </div>

      {/* Unified Experience Items List with Horizontal Dividers */}
      <div className="divide-y divide-[#dfdeda]">
        {experienceList.map((item, index) => (
          <div key={index} className="px-6 py-5 sm:px-8 sm:py-6 flex gap-4 sm:gap-5 items-start group">
            {/* Square Logo Tile (Exact LinkedIn Style) */}
            {item.logo && (
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden bg-white border border-[#dfdeda] p-1.5 flex items-center justify-center shadow-2xs">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Right Content Column */}
            <div className="space-y-2 flex-1 min-w-0">
              {/* Header Row: Role & Company on Left, Date & Location on Right */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-sans leading-snug">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-zinc-800">
                    {item.company}
                    {item.employmentType && (
                      <span className="text-zinc-500 font-normal"> · {item.employmentType}</span>
                    )}
                  </p>
                </div>

                <div className="text-left sm:text-right text-xs sm:text-[13px] font-mono text-zinc-500 shrink-0">
                  <div className="font-medium text-zinc-700">{item.period}</div>
                  <div className="text-zinc-400">{item.location}</div>
                </div>
              </div>

              {/* Description / Summary Narrative */}
              {item.description && (
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pt-0.5">
                  {item.description}
                </p>
              )}

              {/* Bulleted Accomplishments (Points) */}
              {(item.points || item.bullets) && (item.points || item.bullets).length > 0 && (
                <ul className="pt-1.5 space-y-1.5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed list-disc list-outside ml-4">
                  {(item.points || item.bullets).map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Skills Tag Strip */}
              {item.skills && item.skills.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-zinc-400 font-mono mr-1">Skills:</span>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono bg-zinc-50 border border-[#dfdeda] text-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Experience as ExperienceSection }
