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
          <div key={index} className="px-6 py-5 sm:px-8 sm:py-6 flex gap-4 sm:gap-5 items-start group">
            {/* Institution Crest Tile */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden bg-white border border-[#dfdeda] p-1.5 flex items-center justify-center shadow-2xs">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
              )}
            </div>

            <div className="space-y-2 flex-1 min-w-0">
              {/* Header Row: Institution & Degree on Left, Period & Location on Right */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-sans leading-snug">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-medium text-zinc-800">
                    {item.degree}
                  </p>
                </div>

                <div className="text-left sm:text-right text-xs sm:text-[13px] font-mono text-zinc-500 shrink-0">
                  <div className="font-medium text-zinc-700">{item.period}</div>
                  <div className="text-zinc-400">{item.location}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pt-0.5 text-justify sm:text-left hyphens-auto">
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
