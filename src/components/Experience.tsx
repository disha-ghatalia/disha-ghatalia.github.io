import React from 'react'
import { experience, education } from '../data.ts'
import useInView from './useInView.ts'

interface RevealProps {
  children: React.ReactNode
}

function Reveal({ children }: RevealProps) {
  const [ref, inView] = useInView(0.15)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${inView ? 'reveal--in' : ''}`}>
      {children}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="wrap">
        <p className="eyebrow">The Road So Far</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={job.org + job.when}>
              <div className="timeline__item">
                <div className="timeline__when">{job.when}</div>
                <h3 className="timeline__role">{job.role}</h3>
                <div className="timeline__org">{job.org} · {job.where}</div>
                <p className="timeline__note">{job.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="eyebrow education__eyebrow">Education</p>
        <div className="education__grid">
          {education.map((e) => (
            <div key={e.degree} className="education__card">
              <div className="education__year">{e.year}</div>
              <h4 className="education__degree">{e.degree}</h4>
              <div className="education__school">{e.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
