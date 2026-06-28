export default function PlatformSlider({ platforms, direction = 'left' }) {
  return (
    <div className="ticker-wrap">
      <div className={`ticker-track ${direction === 'right' ? 'right' : ''}`}>
        {[...platforms, ...platforms].map((p, i) => (
          <span key={i}>{p} <span>•</span></span>
        ))}
      </div>
    </div>
  )
}
