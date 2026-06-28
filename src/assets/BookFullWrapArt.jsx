export default function BookFullWrapArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wrapBg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0610" />
          <stop offset="48%" stopColor="#1a0303" />
          <stop offset="52%" stopColor="#1a0303" />
          <stop offset="100%" stopColor="#07040A" />
        </linearGradient>
        <radialGradient id="wrapMoon" cx="82%" cy="20%" r="35%">
          <stop offset="0%" stopColor="#C0392B" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="900" height="480" fill="url(#wrapBg)" />
      <rect width="900" height="480" fill="url(#wrapMoon)" />
      <rect x="430" y="0" width="40" height="480" fill="#000" opacity="0.55" />
      <circle cx="730" cy="100" r="46" fill="#3a0a0a" stroke="#C0392B" strokeWidth="1.2" />
      <path d="M0 340 Q150 320 300 335 T600 325 T900 330 V480 H0 Z" fill="#000" opacity="0.6" />
      {Array.from({length:60}).map((_,i)=>(
        <circle key={i} cx={(i*53+9)%900} cy={(i*31+6)%220} r={Math.random()*1.3+0.3} fill="#E8C96B" opacity={Math.random()*0.5+0.15} />
      ))}
      <text x="640" y="420" textAnchor="middle" fontFamily="Cinzel Decorative, serif" fontSize="34" fill="#E8C96B">WHISPERS</text>
      <text x="640" y="450" textAnchor="middle" fontFamily="Cinzel Decorative, serif" fontSize="18" fill="#C0392B" letterSpacing="3">BENEATH CRIMSON MOON</text>
      <text x="450" y="240" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="13" fill="#C9A84C" letterSpacing="2" transform="rotate(90 450 240)">THE RED LEDGER — BOOK ONE</text>
      <g opacity="0.85">
        <text x="220" y="430" textAnchor="middle" fontFamily="Crimson Text, serif" fontStyle="italic" fontSize="14" fill="#9A8C7E">"You can hide the truth.</text>
        <text x="220" y="450" textAnchor="middle" fontFamily="Crimson Text, serif" fontStyle="italic" fontSize="14" fill="#9A8C7E">But it never stops existing."</text>
      </g>
      <rect x="10" y="10" width="880" height="460" fill="none" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1.2" />
    </svg>
  )
}
