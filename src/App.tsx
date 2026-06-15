import { useEffect, useRef, useState } from 'react'
import { personas, personaOrder } from './data.ts'
import Nav from './components/Nav.tsx'
import BgBlobs from './components/BgBlobs.tsx'
import Hero from './components/Hero.tsx'
import Stats from './components/Stats.tsx'
import Projects from './components/Projects.tsx'
import Experience from './components/Experience.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'

export default function App() {
  const [personaKey, setPersonaKey] = useState('engineer')
  const persona = personas[personaKey]
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      const match = personaOrder.find((k) => personas[k].shortcut === e.key)
      if (match) setPersonaKey(match)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
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
      <main className="app__main">
        <Hero persona={persona} onSwitch={setPersonaKey} />
        <Stats />
        <Projects persona={persona} />
        <Experience />
        <Skills />
        <Contact persona={persona} />
      </main>
      <footer className="footer">
        <div className="wrap">
          Designed & built by <b>Disha Ghatalia</b> · React + Vite + Tailwind · Press 1 / 2 / 3 to switch hats
        </div>
      </footer>
    </div>
  )
}
