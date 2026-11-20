import React from 'react'
import { certificationsList } from '../data'

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

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs overflow-hidden scroll-mt-24"
    >
      {/* Section Header */}
      <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex items-baseline justify-between border-b border-[#dfdeda]">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
            Licenses & Certifications
          </h2>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
            Verified Professional & Cloud Credentials
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline-block">
          {certificationsList.length} Credentials
        </span>
      </div>

      {/* Certification Items List */}
      <div className="divide-y divide-[#dfdeda]">
        {certificationsList.map((cert, index) => {
          const certSkills = getSkillList(cert.skills)
          return (
            <div
              key={index}
              className="px-6 py-5 sm:px-8 sm:py-6 flex gap-4 sm:gap-5 items-start group"
            >
              {/* Square Logo Tile */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden bg-white border border-[#dfdeda] p-1.5 flex items-center justify-center shadow-2xs">
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-lg bg-zinc-100 flex items-center justify-center text-xs font-mono font-bold text-zinc-700">
                    CERT
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="space-y-2 flex-1 min-w-0">
                {/* Header Row: Title & Issuer on Left, Period & Location on Right */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-sans leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-800">
                      {cert.issuer}
                      {cert.degree && (
                        <span className="text-zinc-500 font-normal"> · {cert.degree}</span>
                      )}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        Credential ID:{' '}
                        <span className="text-zinc-600 font-medium">
                          {cert.credentialId}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="text-left sm:text-right text-xs sm:text-[13px] font-mono text-zinc-500 shrink-0">
                    <div className="font-medium text-zinc-700">{cert.period}</div>
                    <div className="text-zinc-400">{cert.location}</div>
                  </div>
                </div>

                {/* Summary / Description */}
                {cert.description && (
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pt-0.5 text-justify sm:text-left hyphens-auto">
                    {cert.description}
                  </p>
                )}

                {/* Skills Pills & Certificate Actions */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  {certSkills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                      {certSkills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono bg-zinc-50 border border-[#dfdeda] text-zinc-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {cert.link && (
                    <div className="flex justify-end shrink-0 sm:self-end ml-auto">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-zinc-900 bg-white border border-[#dfdeda] hover:bg-zinc-50 hover:border-zinc-400 hover:shadow-xs transition-all shadow-2xs whitespace-nowrap"
                      >
                        <span>Show Credential</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { Certifications as CertificationsSection }
