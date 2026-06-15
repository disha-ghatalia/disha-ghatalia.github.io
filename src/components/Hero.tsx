import { personas, personaOrder, contact, type Persona } from "../data.ts";
import HeroIllustration from "./HeroIllustration.tsx";

interface HeroProps {
  persona: Persona;
  onSwitch: (key: string) => void;
}

export default function Hero({ persona, onSwitch }: HeroProps) {
  return (
    <header className="hero" id="top">
      <div className="wrap hero__wrap">
        <div className="hero__content">
          <p className="hero__switch-label">
            ✦ switch view to see a different side of me
          </p>

          <div
            className="persona-switch"
            role="tablist"
            aria-label="Choose how to view Disha's work"
          >
            {personaOrder.map((key) => {
              const p = personas[key];
              const active = persona.key === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  className={`persona-switch__btn ${active ? "persona-switch__btn--active" : ""}`}
                  onClick={() => onSwitch(key)}
                >
                  {p.label}
                  <kbd className="persona-switch__kbd">{p.shortcut}</kbd>
                </button>
              );
            })}
          </div>

          <div key={persona.key} className="hero__fade">
            <p className="hero__eyebrow">{persona.eyebrow}</p>
            <h1 className="hero__heading">
              {persona.headline[0]}
              <span className="hero__heading-line2">{persona.headline[1]}</span>
            </h1>
            <p className="hero__sub">{persona.sub}</p>

            <div className="hero__cta">
              <a href={`mailto:${contact.email}`} className="btn btn--primary">
                Get in touch
              </a>
              <a href={contact.resume} download className="btn btn--ghost">
                Download Resume
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <HeroIllustration />
      </div>
    </header>
  );
}
