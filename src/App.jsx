import { useEffect, useRef, useState } from 'react'
import { personas, personaOrder } from './data.js'
import Nav from './components/Nav.jsx'
import BgBlobs from './components/BgBlobs.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [personaKey, setPersonaKey] = useState('engineer')
  const persona = personas[personaKey]
  const glowRef = useRef(null)

  // keyboard shortcuts 1/2/3 switch personas
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      const match = personaOrder.find((k) => personas[k].shortcut === e.key)
      if (match) setPersonaKey(match)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // cursor glow follows the mouse
  useEffect(() => {
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="app">
      <div className="glow" ref={glowRef} aria-hidden="true" />
      <BgBlobs />
      <Nav />
      <main>
        <Hero persona={persona} onSwitch={setPersonaKey} />
        <Stats />
        <Projects persona={persona} />
        <Experience />
        <Skills />
        <Contact persona={persona} />
      </main>
      <footer>
        <div className="wrap">
          Designed & built by <b>Disha Ghatalia</b> · React + Vite · Press 1 / 2 / 3 to switch hats
        </div>
      </footer>
    </div>
  )
}
