import React from 'react'
import { educationList } from '../data'

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs overflow-hidden scroll-mt-24"
    >
      {/* Section Header */}
      <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex items-baseline justify-between border-b border-[#dfdeda]">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
          Education
        </h2>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Academic Background
        </span>
      </div>

      <div className="divide-y divide-[#dfdeda]">
        {educationList.map((item, index) => (
          <div key={index} className="px-6 py-4.5 sm:px-8 sm:py-5 flex gap-4 sm:gap-5 items-start group">
            {/* Institution Crest Tile */}
            {item.logo && (
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-md overflow-hidden bg-white border border-[#dfdeda]/70 p-1 flex items-center justify-center shadow-2xs">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <div className="space-y-1 flex-1 min-w-0">
              <h3 className="text-base sm:text-[17px] font-bold text-zinc-950 font-sans leading-snug">
                {item.institution}
              </h3>
              <p className="text-sm text-zinc-900 font-normal">
                {item.degree}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 font-normal">
                {item.period} · {item.location}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Education as EducationSection }
