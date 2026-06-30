import { Link } from 'react-router-dom'
import { useState } from 'react'
import ParticleCanvas from '../components/ParticleCanvas'
import MoonIcon from '../components/MoonIcon'
import RippleButton from '../components/RippleButton'
import Toast from '../components/Toast'
import ScrollReveal from '../components/ScrollReveal'
import moonImage from "../assets/moon.png";

export default function BookTrailer() {
  const [toast, setToast] = useState(null)

  function handleNotify() {
    setToast("Thank you! We'll keep you posted.")
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div>
      <section className="hero" style={{minHeight:'100vh'}}>
        <div className="hero-bg" />
        <ParticleCanvas count={90} />
        <img
                  src={moonImage}
                  alt="Crimson Moon"
                  className="hero-moon moon-image"
                />
        <div className="hero-content fade-stagger">
          <h1 className="display-title" style={{fontSize:'clamp(2rem,5vw,3.4rem)'}}>THE OFFICIAL BOOK TRAILER</h1>
          <div style={{marginTop:18}}><span className="coming-soon-badge">COMING SOON</span></div>

          <div className="trailer-box">
            {/* TODO: Replace with <iframe> YouTube embed when trailer is ready */}
            <ParticleCanvas count={40} />
            <div style={{position:'relative', zIndex:2, textAlign:'center'}}>
              <MoonIcon size={48} />
              <p style={{fontFamily:'var(--font-display)', color:'var(--gold-light)', fontSize:'1.4rem', marginTop:14}}>
                WHISPERS BENEATH CRIMSON MOON
              </p>
            </div>
          </div>

          <p className="subtext" style={{maxWidth:560, margin:'10px auto 0'}}>
            The world of Whispers Beneath Crimson Moon is coming to life. The official trailer is on its way.
          </p>
          <div className="btn-row">
            <button className="btn btn-ghost" onClick={handleNotify}>NOTIFY ME</button>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <ScrollReveal><h2 className="section-title">In the Meantime</h2></ScrollReveal>
          <div className="grid-3">
            <ScrollReveal delay={0}>
              <div className="feature-card" style={{textAlign:'center'}}>
                <span className="icon">📖</span>
                <h3>Read the Book</h3>
                <p>Begin Colleen's story today, available across 35+ platforms.</p>
                <div style={{marginTop:18}}><RippleButton className="btn-primary" href="https://amazon.com">Buy on Amazon</RippleButton></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="feature-card" style={{textAlign:'center'}}>
                <span className="icon">👩</span>
                <h3>Meet the Author</h3>
                <p>Discover the woman behind the ledger and the Cornwall coast that inspired it.</p>
                <div style={{marginTop:18}}><Link to="/about-author" className="btn btn-ghost">About Denise</Link></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="feature-card" style={{textAlign:'center'}}>
                <span className="icon">📜</span>
                <h3>Read the Synopsis</h3>
                <p>Dive deeper into the world, characters, and themes of the novel.</p>
                <div style={{marginTop:18}}><Link to="/about-book" className="btn btn-ghost">About the Book</Link></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Toast message={toast} />
    </div>
  )
}
