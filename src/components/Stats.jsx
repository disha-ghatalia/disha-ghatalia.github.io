import { useEffect, useState } from 'react'
import { stats } from '../data.js'
import useInView from './useInView.js'

function CountUp({ value, suffix, start }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 1200
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return (
    <span className="num">
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section className="stats" ref={ref}>
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <CountUp value={s.value} suffix={s.suffix} start={inView} />
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
