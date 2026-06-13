import { skills } from '../data.js'

const marqueeItems = [
  'React', 'TypeScript', 'Next.js', 'Storybook', 'WCAG', 'Lighthouse',
  'Chart.js', 'Tailwind', 'Optimizely', 'AEM', 'Prompt Engineering', 'Vite',
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>
              {item} <span className="dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 70 }}>
        <div className="eyebrow">Toolbox</div>
        <h2 className="section-title">Skills</h2>
        {skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <div className="g-name">{group.group}</div>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
