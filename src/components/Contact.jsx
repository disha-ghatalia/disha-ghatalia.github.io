import { contact } from '../data.js'

export default function Contact({ persona }) {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="eyebrow">Next Chapter</div>
        <h2>Let’s build something good.</h2>
        <p>
          Looking for a {persona.label.toLowerCase()} who ships, mentors, and raises the bar?
          I’m one email away — based in {contact.location}.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
