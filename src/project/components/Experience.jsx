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
          <div key={index} className="px-6 py-4.5 sm:px-8 sm:py-5 flex gap-4 sm:gap-5 items-start group">
            {/* Square Logo Tile (Exact LinkedIn Style) */}
            {item.logo && (
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-md overflow-hidden bg-white border border-[#dfdeda]/70 p-1 flex items-center justify-center shadow-2xs">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Right Content Column */}
            <div className="space-y-1 flex-1 min-w-0">
              <h3 className="text-base sm:text-[17px] font-bold text-zinc-950 font-sans leading-snug">
                {item.role}
              </h3>
              <p className="text-sm text-zinc-900 font-normal">
                {item.company}
                {item.employmentType && <span> · {item.employmentType}</span>}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 font-normal">
                {item.period}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 font-normal">
                {item.location}
              </p>

              {/* Bulleted Accomplishments */}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed list-disc list-outside ml-4">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {/* Skills Tag Strip */}
              {item.skills && item.skills.length > 0 && (
                <div className="pt-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-zinc-500 font-normal mr-1">Skills:</span>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium text-zinc-800 hover:text-zinc-950"
                    >
                      {skill}
                      {sIdx < item.skills.length - 1 && <span className="text-zinc-400 ml-1.5">·</span>}
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
