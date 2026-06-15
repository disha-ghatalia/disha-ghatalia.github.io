import { useEffect, useState } from 'react'
import { stats } from '../data.ts'
import useInView from './useInView.ts'

interface CountUpProps {
  value: number
  suffix: string
  start: boolean
}

function CountUp({ value, suffix, start }: CountUpProps) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    const duration = 1200
    const t0 = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return <span className="stat__number">{n}{suffix}</span>
}

export default function Stats() {
  const [ref, inView] = useInView()
  return (
    <section className="stats" ref={ref as React.RefObject<HTMLElement>}>
      <div className="wrap">
        <div className="stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <CountUp value={s.value} suffix={s.suffix} start={inView as boolean} />
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
