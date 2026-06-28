import { Link } from 'react-router-dom'
import ParticleCanvas from '../components/ParticleCanvas'
import Book3DTilt from '../components/Book3DTilt'
import ScrollReveal from '../components/ScrollReveal'
import PlatformSlider from '../components/PlatformSlider'
import RippleButton from '../components/RippleButton'
import MoonIcon from '../components/MoonIcon'
import BookCoverArt from '../assets/BookCoverArt'
import AuthorPortrait1 from '../assets/AuthorPortrait1'

const platformsRow1 = ['Amazon Kindle','Barnes & Noble','Apple Books','Google Play Books','Kobo','Scribd','Smashwords','Draft2Digital','IngramSpark','OverDrive','Bibliotheca','CloudLibrary','Hoopla','Palace Marketplace','Baker & Taylor','Gardners Books']
const platformsRow2 = ['Mondadori','Thalia','Angus & Robertson','Booktopia','Vivlio','Tolino','24symbols','Bookmate','Blio','DigiLibris','Odilo','BorrowBox','Findaway Voices','Audiobooks.com','Libro.fm','Storytel']

const features = [
  { icon:'⚓', title:'Rich Historical World', desc:'Immersive 18th-century maritime atmosphere, built from years of research into ports, ships, and shadowed harbors.' },
  { icon:'🌙', title:'Slow-Burn Romance', desc:'A love story woven through danger and mystery, where every glance carries the weight of a secret.' },
  { icon:'📜', title:'A Mystery at the Heart', desc:'The Crimson Ledger holds secrets that change everything — for Colleen, and for everyone who seeks it.' },
  { icon:'⚔️', title:'Strong Female Lead', desc:'Colleen Ashford is fierce, determined, and unforgettable — a heroine who refuses to be erased.' },
  { icon:'🌊', title:'Atmospheric Writing', desc:"Inspired by Cornwall's coastal legend and fog, every page is steeped in salt air and old magic." },
  { icon:'📚', title:'Series Potential', desc:'Book One of a saga that will keep you hooked — the ledger has only begun to open.' },
]

const testimonials = [
  { quote:'A breathtaking debut. The atmosphere pulls you in from page one and never lets go.', name:'Early Reader' },
  { quote:'Colleen is the kind of heroine you root for from the first sentence. Denise has real talent.', name:'Book Club Member' },
  { quote:'The mystery of the Crimson Ledger kept me reading until 3am. I need Book Two NOW.', name:'Fantasy Romance Reader' },
]

export default function Home() {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <ParticleCanvas count={80} />
        <div className="floating-moon hero-moon" />
        <div className="hero-content fade-stagger">
          <p className="eyebrow">The Red Ledger Series — Book One</p>
          <h1 className="display-title">WHISPERS BENEATH<br />CRIMSON MOON</h1>
          <div className="divider"><span className="line" /><MoonIcon size={18} /><span className="line" /></div>
          <p className="hero-tagline subtext">"You can hide the truth. But it never stops existing."</p>
          <p className="author-credit">by DENISE R GHOLSON</p>
          <div className="btn-row">
            <RippleButton className="btn-primary" href="https://amazon.com">🛒 BUY ON AMAZON</RippleButton>
            <RippleButton className="btn-secondary" href="#buy-direct">📖 BUY DIRECTLY</RippleButton>
          </div>
        </div>
        <div className="scroll-chevron" />
      </section>

      {/* SECTION 2 — BOOK SHOWCASE */}
      <section className="section dark">
        <div className="container split">
          <ScrollReveal variant="reveal-left">
            <Book3DTilt><BookCoverArt /></Book3DTilt>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right">
            <p className="eyebrow crimson">The Book</p>
            <h2 className="display-title" style={{fontSize:'2.4rem'}}>Whispers Beneath Crimson Moon</h2>
            <span className="pill badge">The Red Ledger Series</span>
            <p style={{margin:'20px 0', lineHeight:1.7, color:'var(--parchment)'}}>
              Disguised and hunted, Colleen Ashford flees into a port town veiled in fog and old superstition,
              where a sailor named Ean Mercer guards secrets as deep as the tide. When the Crimson Ledger
              resurfaces, the truth Colleen buried begins clawing its way back to the surface — and the sea
              itself seems to remember what she has tried so hard to forget.
            </p>
            <div className="pill-row">
              <span className="pill">Historical Fantasy</span>
              <span className="pill">Romance</span>
              <span className="pill">Mystery</span>
              <span className="pill">Sea Adventure</span>
              <span className="pill">Slow-Burn Love</span>
            </div>
            <div className="stars">★★★★★</div>
            <div className="btn-row" style={{justifyContent:'flex-start'}}>
              <RippleButton className="btn-primary" href="https://amazon.com">🛒 Buy on Amazon</RippleButton>
              <RippleButton className="btn-secondary" href="#buy-direct">📖 Buy Directly</RippleButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — PLATFORM DISTRIBUTION */}
      <section className="section darkest">
        <div className="container" style={{textAlign:'center'}}>
          <ScrollReveal><h2 className="section-title">Available on 35+ Platforms Worldwide</h2></ScrollReveal>
          <ScrollReveal delay={100}><p className="subtext">From Manuscript to Global Shelves — wherever you love to read</p></ScrollReveal>
        </div>
        <PlatformSlider platforms={platformsRow1} direction="left" />
        <PlatformSlider platforms={platformsRow2} direction="right" />
        <div className="container">
          <div className="stats-row">
            <ScrollReveal delay={0}><div className="stat-card"><span className="num">35+</span><span className="label">Platforms</span></div></ScrollReveal>
            <ScrollReveal delay={100}><div className="stat-card"><span className="num">Global</span><span className="label">Distribution</span></div></ScrollReveal>
            <ScrollReveal delay={200}><div className="stat-card"><span className="num">Indie</span><span className="label">Published</span></div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ABOUT AUTHOR TEASER */}
      <section className="section dark">
        <div className="container split">
          <ScrollReveal variant="reveal-left">
            <div className="photo-frame"><AuthorPortrait1 /></div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right">
            <p className="eyebrow crimson">Meet the Author</p>
            <h2 className="display-title" style={{fontSize:'2.6rem'}}>Denise R Gholson</h2>
            <p style={{fontFamily:'var(--font-head)', color:'var(--crimson-bright)', margin:'8px 0 18px', letterSpacing:'0.05em'}}>Author | Storyteller | Dreamer</p>
            <p style={{lineHeight:1.7, marginBottom:14, color:'var(--parchment)'}}>
              Denise has been weaving stories since childhood, drawn to the unseen threads between resilience
              and the unknown. Inspired by her time in Cornwall, England, her writing blends emotional depth
              with an undercurrent of mystery.
            </p>
            <p style={{lineHeight:1.7, marginBottom:24, color:'var(--parchment)'}}>
              Whispers Beneath Crimson Moon is her debut novel — the first chapter in The Red Ledger Series,
              born from years of imagining what it means to carry a secret the sea itself remembers.
            </p>
            <div className="social-row" style={{marginBottom:24}}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">ig</a>
            </div>
            <Link to="/about-author" className="btn btn-ghost">READ FULL BIO →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — SYNOPSIS DEEP DIVE */}
      <section className="section darkest" style={{position:'relative'}}>
        <span className="vertical-label">SYNOPSIS</span>
        <div className="container">
          <ScrollReveal>
            <p className="pull-quote">
              <span className="quote-mark">“</span>Some books are not meant to be read. Some are meant to open doors.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p style={{maxWidth:800, margin:'0 auto', lineHeight:1.85, color:'var(--parchment)', textAlign:'center'}}>
              In a fog-shrouded port town where superstition runs as deep as the tide, Colleen Ashford has
              built a life from borrowed names and careful silence. But the arrival of a battered, leather-bound
              ledger — one she thought lost to the sea forever — drags her past back into the light. As she is
              pulled into an uneasy alliance with Ean Mercer, a sailor with his own buried history, Colleen must
              decide how much of the truth she can survive uncovering, and how much of her heart she is willing
              to risk along the way. Whispers Beneath Crimson Moon is a tale of secrets, identity, and a slow-burn
              love forged in the shadow of the sea.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{marginTop:60, maxWidth:900, marginLeft:'auto', marginRight:'auto'}}>
              <Book3DTilt><BookCoverArt /></Book3DTilt>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — WHY THIS BOOK */}
      <section className="section dark">
        <div className="container">
          <ScrollReveal><h2 className="section-title">Why Readers Love This Story</h2></ScrollReveal>
          <div className="grid-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="feature-card">
                  <span className="icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="section darkest">
        <div className="container">
          <ScrollReveal><h2 className="section-title">What Readers Are Saying</h2></ScrollReveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="quote-card">
                  <span className="quote-mark">“</span>
                  <p>{t.quote}</p>
                  <p className="reviewer">— {t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="cta-section" id="buy-direct">
        <ParticleCanvas count={50} />
        <div className="floating-moon" style={{width:160, height:160, top:'10%', right:'8%'}} />
        <div className="container" style={{position:'relative', zIndex:2}}>
          <ScrollReveal><h2>ARE YOU READY TO OPEN THE LEDGER?</h2></ScrollReveal>
          <ScrollReveal delay={100}><p className="subtext" style={{marginTop:18}}>Begin the journey. Book One is available now across 35+ platforms worldwide.</p></ScrollReveal>
          <div className="btn-row">
            <RippleButton className="btn-primary btn-lg" href="https://amazon.com">🛒 Buy on Amazon</RippleButton>
            <RippleButton className="btn-secondary btn-lg" href="https://books.apple.com">📖 Buy Directly</RippleButton>
          </div>
          <p style={{marginTop:40, fontFamily:'var(--font-head)', color:'var(--gold)', letterSpacing:'0.05em'}}>Join Denise on her journey</p>
          <div className="social-row" style={{justifyContent:'center', marginTop:16}}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn">f</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">ig</a>
          </div>
        </div>
      </section>
    </div>
  )
}
