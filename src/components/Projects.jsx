import { useEffect, useRef, useState } from 'react'
import { projects } from '../data.js'
import useInView from './useInView.js'

// animated arc gauge: Lighthouse 60 -> 80+
function Gauge({ from, to }) {
  const [ref, inView] = useInView(0.5)
  const [score, setScore] = useState(from)
  const r = 30
  const circ = 2 * Math.PI * r
  const frac = score / 100

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setScore(Math.round(from + (to - from) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, from, to])

  return (
    <svg ref={ref} className="gauge" width="76" height="76" viewBox="0 0 76 76" aria-label={`Lighthouse score improved from ${from} to ${to}+`}>
      <circle className="track" cx="38" cy="38" r={r} fill="none" strokeWidth="7" />
      <circle
        className="fill"
        cx="38"
        cy="38"
        r={r}
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - frac)}
        transform="rotate(-90 38 38)"
      />
      <text x="38" y="43" textAnchor="middle" fontSize="18">
        {score}
      </text>
    </svg>
  )
}

// subtle 3D tilt that follows the cursor
function TiltCard({ children, className }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-2px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <article ref={ref} className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </article>
  )
}

export default function Projects({ persona }) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="eyebrow">Selected Work</div>
        <h2 className="section-title">Projects & programs</h2>
        <p className="spot-hint">
          Highlighted for the <b>{persona.label}</b> lens — switch hats above to refocus.
        </p>
        <div className="projects-grid">
          {projects.map((proj) => {
            const spotlit = persona.focus.includes(proj.id)
            return (
              <TiltCard key={proj.id} className={`card ${spotlit ? 'spotlit' : 'dimmed'}`}>
                <div className="org">{proj.org}</div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tags">
                  {proj.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="metric">
                  {proj.metric.type === 'gauge' ? (
                    <>
                      <Gauge from={proj.metric.from} to={proj.metric.to} />
                      <div className="mlbl">
                        {proj.metric.label}
                        <br />
                        {proj.metric.from} → {proj.metric.to}+
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="big">{proj.metric.value}</span>
                      <span className="mlbl">{proj.metric.label}</span>
                    </>
                  )}
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
