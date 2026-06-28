export default function AuthorPortrait2({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ap2bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0d16" />
          <stop offset="100%" stopColor="#040203" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#ap2bg)" />
      {/* writing desk scene silhouette */}
      <rect x="60" y="260" width="280" height="14" fill="#0a0508" />
      <rect x="80" y="274" width="14" height="80" fill="#0a0508" />
      <rect x="306" y="274" width="14" height="80" fill="#0a0508" />
      <ellipse cx="200" cy="230" rx="40" ry="46" fill="#0a0508" />
      <path d="M160 250 C150 270 140 260 200 320 C260 260 250 270 240 250 Z" fill="#0a0508" />
      <rect x="170" y="248" width="60" height="16" rx="2" fill="#150a12" stroke="#C9A84C" strokeOpacity="0.35" />
      <circle cx="240" cy="245" r="10" fill="#3a0a0a" />
      <path d="M236 245 Q240 235 244 245" stroke="#C0392B" strokeWidth="1.5" fill="none" opacity="0.7" />
      {Array.from({length:18}).map((_,i)=>(
        <circle key={i} cx={(i*47+9)%400} cy={(i*29+12)%180} r={Math.random()*1.1+0.3} fill="#E8C96B" opacity={Math.random()*0.45+0.1} />
      ))}
      <rect x="8" y="8" width="384" height="384" fill="none" stroke="#C9A84C" strokeOpacity="0.25" />
    </svg>
  )
}
