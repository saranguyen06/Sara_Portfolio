import React, { useState, lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
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
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* Add your project routes here */}
              {/* Example: <Route path="/projects/my-project" element={<MyProject />} /> */}
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
    </>
  )
}

export default App
