export default function AuthorPortrait1({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ap1glow" cx="60%" cy="15%" r="45%">
          <stop offset="0%" stopColor="#8B0000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ap1bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#170a14" />
          <stop offset="100%" stopColor="#020103" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#ap1bg)" />
      <rect width="400" height="500" fill="url(#ap1glow)" />
      <circle cx="250" cy="80" r="38" fill="#3a0a0a" opacity="0.8" />
      {/* silhouette: figure with flowing cloak gazing at sea */}
      <path d="M200 160 C220 160 232 180 232 205 C232 230 250 250 260 290 C270 330 268 380 260 420 L140 420 C132 380 130 330 140 290 C150 250 168 230 168 205 C168 180 180 160 200 160 Z" fill="#0a0508" />
      <ellipse cx="200" cy="148" rx="22" ry="26" fill="#0a0508" />
      <path d="M178 150 C178 130 222 130 222 150 C222 165 215 170 200 172 C185 170 178 165 178 150 Z" fill="#0a0508" />
      <path d="M150 250 C130 280 110 340 120 420 L150 420 C145 370 150 310 170 270 Z" fill="#0d0710" opacity="0.9" />
      <path d="M250 250 C270 280 290 340 280 420 L250 420 C255 370 250 310 230 270 Z" fill="#0d0710" opacity="0.9" />
      <path d="M0 430 Q100 415 200 428 T400 420 V500 H0 Z" fill="#000" opacity="0.7" />
      {Array.from({length:25}).map((_,i)=>(
        <circle key={i} cx={(i*41+11)%400} cy={(i*23+9)%200} r={Math.random()*1.2+0.3} fill="#E8C96B" opacity={Math.random()*0.5+0.15} />
      ))}
    </svg>
  )
}
