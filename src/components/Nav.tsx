export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top">
          disha<span>.</span>ghatalia
        </a>
        <div className="nav__links">
          {['Work', 'Experience', 'Skills', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
