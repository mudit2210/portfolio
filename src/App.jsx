import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './head_foot_other/Header'
import Footer from './head_foot_other/Footer'
import NotFound from './head_foot_other/NotFound'
import ErrorBoundary from './head_foot_other/ErrorBoundary'
import ScrollManager from './head_foot_other/ScrollManager'
import Home from './project/Home'
import ProjectDetail from './project/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
      {/* Route & Hash Scroll Restoration Manager */}
      <ScrollManager />

      <div className="min-h-screen bg-[#f4f2ee] text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
        {/* Scroll-Reactive Header */}
        <Header />

        {/* Main Content Area Protected by ErrorBoundary */}
        <main className="flex-1">
          <ErrorBoundary>
            <Routes>
              {/* Main LinkedIn Profile Flow */}
              <Route path="/" element={<Home />} />

              {/* Individual Project Case Study Deep-Dives */}
              <Route path="/projects/:slug" element={<ProjectDetail />} />

              {/* Direct Section Redirects */}
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/experience" element={<Navigate to="/#experience" replace />} />
              <Route path="/education" element={<Navigate to="/#education" replace />} />
              <Route path="/projects" element={<Navigate to="/#projects" replace />} />
              <Route path="/research" element={<Navigate to="/#research" replace />} />
              <Route path="/skills" element={<Navigate to="/#skills" replace />} />
              <Route path="/certifications" element={<Navigate to="/#certifications" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
