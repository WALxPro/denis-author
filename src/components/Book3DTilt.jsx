import { useRef } from 'react'

export default function Book3DTilt({ children, className = '' }) {
  const cardRef = useRef(null)

  function handleMove(e) {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 22
    const rotateX = ((y / rect.height) - 0.5) * -22
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  function handleLeave() {
    cardRef.current.style.transform = 'rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <div className="tilt-wrap">
      <div
        ref={cardRef}
        className={`tilt-card ${className}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
        <div className="tilt-shimmer" />
      </div>
    </div>
  )
}
