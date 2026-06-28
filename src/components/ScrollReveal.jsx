import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, variant = 'reveal', delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`${variant} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
