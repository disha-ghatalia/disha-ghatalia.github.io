import { personas, personaOrder, contact } from '../data.js'
import HeroIllustration from './HeroIllustration.jsx'

export default function Hero({ persona, onSwitch }) {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-wrap">

        {/* ── left column: all text content ── */}
        <div className="hero-content">
          <p className="switch-label">✦ switch view to see a different side of me</p>
          <div className="persona-switch" role="tablist" aria-label="Choose how to view Disha's work">
            {personaOrder.map((key) => {
              const p = personas[key]
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={persona.key === key}
                  className={`persona-btn ${persona.key === key ? 'active' : ''}`}
                  onClick={() => onSwitch(key)}
                >
                  {p.label} <kbd>{p.shortcut}</kbd>
                </button>
              )
            })}
          </div>

          {/* key forces the fade animation to re-run on persona switch */}
          <div key={persona.key} className="hero-fade">
            <div className="eyebrow">{persona.eyebrow}</div>
            <h1>
              {persona.headline[0]}
              <span className="line2">{persona.headline[1]}</span>
            </h1>
            <p className="sub">{persona.sub}</p>

            <div className="hero-cta">
              <a className="btn btn-primary" href={`mailto:${contact.email}`}>
                Get in touch
              </a>
              <a className="btn btn-ghost" href={contact.resume} download>
                Download Resume
              </a>
              <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ── right column: illustration ── */}
        <HeroIllustration />

      </div>
    </header>
  )
}
