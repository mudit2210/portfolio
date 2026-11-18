import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="bg-[#f4f2ee] text-zinc-900">
      {/* 1. Full Window Size Hero Section */}
      <Hero />

      {/* 2. Main Profile Sections (LinkedIn Card Flow) */}
      <div className="py-6 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4.5 sm:space-y-5">
          <About />
          <Experience />
          <Projects />
          <Research />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  )
}
