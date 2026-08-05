import React, { useState } from 'react'
import About from './components/About'
import NavBar from './components/NavBar'
import './App.css'

function HomePage() {
  return (
    <>
      <About />
    </>
  );
}

function AppContent(){
  return (
    <>
      <NavBar />
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
