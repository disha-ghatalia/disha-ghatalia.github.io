import { contact, type Persona } from "../data.ts";

interface ContactProps {
  persona: Persona;
}

export default function Contact({ persona }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">Next Chapter</p>
        <h2 className="contact__heading">Let's build something good.</h2>
        <p className="contact__sub">
          Looking for a {persona.label.toLowerCase()} who ships, mentors, and
          raises the bar? I'm one email away.
        </p>
        <div className="contact__cta">
          <a href={`mailto:${contact.email}`} className="btn btn--primary">
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
