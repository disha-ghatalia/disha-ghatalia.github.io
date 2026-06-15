import { useEffect, useRef, useState } from 'react'

// returns [ref, inView] — true once the element scrolls into the viewport
export default function useInView(threshold = 0.25): [React.RefObject<Element | null>, boolean] {
  const ref = useRef<Element | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}
