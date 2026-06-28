export default function BookCoverArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moonGlowBC" cx="68%" cy="22%" r="40%">
          <stop offset="0%" stopColor="#C0392B" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#8B0000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bgBC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#150a12" />
          <stop offset="55%" stopColor="#07040A" />
          <stop offset="100%" stopColor="#020103" />
        </linearGradient>
        <linearGradient id="seaBC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0b14" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <rect width="400" height="600" fill="url(#bgBC)" />
      <rect width="400" height="600" fill="url(#moonGlowBC)" />
      <circle cx="270" cy="130" r="60" fill="#3a0a0a" stroke="#C0392B" strokeWidth="1.5" />
      <circle cx="270" cy="130" r="60" fill="#1a0303" opacity="0.55" />
      <path d="M0 420 Q100 400 200 418 T400 410 V600 H0 Z" fill="url(#seaBC)" />
      <path d="M0 460 Q100 445 200 458 T400 450" stroke="#8B0000" strokeOpacity="0.4" fill="none" strokeWidth="2" />
      <path d="M150 440 L160 360 L168 440 Z" fill="#0a0508" />
      <path d="M150 380 L195 400 L150 410 Z" fill="#150a12" stroke="#C9A84C" strokeOpacity="0.3" />
      <path d="M168 390 L130 405 L168 415 Z" fill="#0d0710" stroke="#C9A84C" strokeOpacity="0.2" />
      <ellipse cx="160" cy="445" rx="60" ry="10" fill="#020103" />
      {Array.from({length:40}).map((_,i)=>(
        <circle key={i} cx={(i*37+13)%400} cy={(i*53+8)%260} r={Math.random()*1.4+0.3} fill="#E8C96B" opacity={Math.random()*0.6+0.2} />
      ))}
      <text x="200" y="540" textAnchor="middle" fontFamily="Cinzel Decorative, serif" fontSize="26" fill="#E8C96B" letterSpacing="1">WHISPERS</text>
      <text x="200" y="565" textAnchor="middle" fontFamily="Cinzel Decorative, serif" fontSize="15" fill="#C0392B" letterSpacing="3">BENEATH CRIMSON MOON</text>
      <text x="200" y="585" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="10" fill="#9A8C7E" letterSpacing="2">DENISE R GHOLSON</text>
      <rect x="14" y="14" width="372" height="572" fill="none" stroke="#C9A84C" strokeOpacity="0.35" strokeWidth="1.5" />
    </svg>
  )
}
