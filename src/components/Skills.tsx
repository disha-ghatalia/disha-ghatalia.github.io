import { skills } from '../data.ts'

const marqueeItems = [
  'React', 'TypeScript', 'Next.js', 'Storybook', 'WCAG', 'Lighthouse',
  'Chart.js', 'Tailwind', 'Optimizely', 'AEM', 'Prompt Engineering', 'Vite',
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="marquee" aria-hidden="true">
        <div className="marquee__inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee__item">
              {item} <span className="marquee__dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap skills__content">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title">Skills</h2>

        {skills.map((group) => (
          <div key={group.group} className="skill-group">
            <p className="skill-group__name">{group.group}</p>
            <div className="skill-group__chips">
              {group.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
