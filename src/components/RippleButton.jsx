function RippleButton({ children, className = '', href = '#', size = '' }) {
  function handleClick(e) {
    const btn = e.currentTarget
    const circle = document.createElement('span')
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    circle.style.width = circle.style.height = `${size}px`
    circle.style.left = `${e.clientX - rect.left - size / 2}px`
    circle.style.top = `${e.clientY - rect.top - size / 2}px`
    circle.className = 'ripple'
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 650)
  }

  return (
    <a href={href} className={`btn ${className} ${size}`} onClick={handleClick} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  )
}

export default RippleButton
