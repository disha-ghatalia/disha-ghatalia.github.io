import { experience, education } from '../data.js'
import useInView from './useInView.js'

function Reveal({ children }) {
  const [ref, inView] = useInView(0.15)
  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
      {children}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">The Road So Far</div>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={job.org + job.when}>
              <div className="t-item">
                <div className="when">{job.when}</div>
                <h3>{job.role}</h3>
                <div className="org">
                  {job.org} · {job.where}
                </div>
                <div className="note">{job.note}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="eyebrow" style={{ marginTop: 40 }}>
          Education
        </div>
        <div className="edu-grid">
          {education.map((e) => (
            <div className="edu" key={e.degree}>
              <div className="yr">{e.year}</div>
              <h4>{e.degree}</h4>
              <div className="sch">{e.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
