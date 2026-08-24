import React, { useState, lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import About from './components/About'
import NavBar from './components/NavBar'
import './App.css'

const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
//const Experience = lazy(() => import('./components/section/Experience'))
const Footer = lazy(() => import('./components/Footer'))

function HomePage() {
  return (
    <>
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Certifications />
      </Suspense>
    </>
  );
}

function AppContent(){
  return (
    <>
      <NavBar />
      <div>
        <main id="main-content" className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <AppContent />
      <Analytics />
    </>
  )
}

export default App
