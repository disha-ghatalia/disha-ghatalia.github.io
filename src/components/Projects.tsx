import React, { useEffect, useRef, useState } from 'react'
import { projects, type GaugeMetric, type Persona } from '../data.ts'
import useInView from './useInView.ts'

interface GaugeProps {
  from: number
  to: number
}

function Gauge({ from, to }: GaugeProps) {
  const [ref, inView] = useInView(0.5)
  const [score, setScore] = useState(from)
  const r = 30, circ = 2 * Math.PI * r

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const t0 = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1)
      setScore(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, from, to])

  return (
    <svg ref={ref as React.RefObject<SVGSVGElement>} className="gauge" width="76" height="76" viewBox="0 0 76 76"
         aria-label={`Lighthouse score ${from} → ${to}+`}>
      <circle className="gauge__track" cx="38" cy="38" r={r} fill="none" strokeWidth="7" />
      <circle className="gauge__fill" cx="38" cy="38" r={r} fill="none" strokeWidth="7"
              strokeLinecap="round" strokeDasharray={circ}
              strokeDashoffset={circ * (1 - score / 100)}
              transform="rotate(-90 38 38)" />
      <text x="38" y="43" textAnchor="middle" fontSize="18">{score}</text>
    </svg>
  )
}

interface TiltCardProps {
  children: React.ReactNode
  className: string
}

function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLElement>(null)
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-2px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <article ref={ref} className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </article>
  )
}

interface ProjectsProps {
  persona: Persona
}

export default function Projects({ persona }: ProjectsProps) {
  return (
    <section className="projects" id="work">
      <div className="wrap">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-title">Projects & programs</h2>
        <p className="projects__hint">
          Highlighted for the <b>{persona.label}</b> lens — switch hats above to refocus.
        </p>

        <div className="projects__grid">
          {projects.map((proj) => {
            const spotlit = persona.focus.includes(proj.id)
            return (
              <TiltCard key={proj.id}
                className={`card ${spotlit ? 'card--spotlit' : 'card--dimmed'}`}>
                <div className="card__org">{proj.org}</div>
                <h3 className="card__title">{proj.title}</h3>
                <p className="card__desc">{proj.description}</p>

                <div className="card__tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="card__metric">
                  {proj.metric.type === 'gauge' ? (
                    <>
                      <Gauge from={(proj.metric as GaugeMetric).from} to={(proj.metric as GaugeMetric).to} />
                      <div className="card__metric-label">
                        {proj.metric.label}<br />{(proj.metric as GaugeMetric).from} → {(proj.metric as GaugeMetric).to}+
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="card__metric-value">{proj.metric.type === 'number' ? proj.metric.value : ''}</span>
                      <span className="card__metric-label">{proj.metric.label}</span>
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
