export default function HeroIllustration() {
  return (
    <div className="hero-illo-wrap" aria-hidden="true">
      <div className="hero-photo-frame">
        {/* decorative dashed ring */}
        <svg className="hero-photo-ring" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="210" r="200" stroke="#D9A6B0" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.55" />
          <circle cx="210" cy="210" r="184" stroke="#4D5B9E" strokeWidth="1" strokeDasharray="3 14" opacity="0.30" />

          {/* floating rose dots */}
          <circle cx="36"  cy="155" r="10" fill="#D9A6B0" opacity="0.85" />
          <circle cx="24"  cy="180" r="6"  fill="#B4707E" opacity="0.70" />
          <circle cx="384" cy="145" r="8"  fill="#D9A6B0" opacity="0.80" />
          <circle cx="396" cy="170" r="5"  fill="#B4707E" opacity="0.65" />
          <circle cx="72"  cy="58"  r="7"  fill="#D9A6B0" opacity="0.55" />
          <circle cx="348" cy="62"  r="9"  fill="#D9A6B0" opacity="0.50" />
          <circle cx="50"  cy="330" r="8"  fill="#D9A6B0" opacity="0.40" />
          <circle cx="370" cy="340" r="7"  fill="#D9A6B0" opacity="0.40" />

          {/* sparkle crosses */}
          <line x1="56"  y1="72"  x2="68"  y2="60"  stroke="#4D5B9E" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="62"  y1="60"  x2="62"  y2="74"  stroke="#4D5B9E" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="352" y1="68"  x2="364" y2="56"  stroke="#4D5B9E" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="358" y1="56"  x2="358" y2="70"  stroke="#4D5B9E" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
        </svg>

        {/* the actual photo, circular clipped */}
        <img
          src="/disha.jpg"
          alt="Disha Ghatalia"
          className="hero-photo"
        />
      </div>

      {/* floating badge */}
      <div className="hero-badge">10+ yrs · React · TypeScript</div>
      <p className="hero-meta">try pressing 1, 2, or 3</p>
    </div>
  )
}
