import { useEffect, useRef } from 'react'

export default function ParticleCanvas({ count = 80 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId
    let width, height

    function resize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    function makeParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.6,
        speed: Math.random() * 0.4 + 0.1,
        drift: Math.random() * 0.3 - 0.15,
        gold: Math.random() > 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      }
    }
    particles = Array.from({ length: count }, makeParticle)

    function tick() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -5) { p.y = height + 5; p.x = Math.random() * width }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold ? `rgba(232,201,107,${p.opacity})` : `rgba(240,230,211,${p.opacity})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return <canvas ref={canvasRef} className="particle-canvas" />
}
