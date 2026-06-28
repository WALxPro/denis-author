import { useState } from 'react'
import ParticleCanvas from '../components/ParticleCanvas'
import ScrollReveal from '../components/ScrollReveal'
import AuthorPortrait2 from '../assets/AuthorPortrait2'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="hero" style={{minHeight:'50vh'}}>
        <div className="hero-bg" />
        <ParticleCanvas count={40} />
        <div className="hero-content fade-stagger">
          <h1 className="display-title" style={{fontSize:'clamp(2rem,5vw,3.2rem)'}}>GET IN TOUCH</h1>
          <p className="subtext" style={{marginTop:16}}>Questions, book clubs, events, or just to say hello — Denise would love to hear from you.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <ScrollReveal variant="reveal-left">
            {submitted ? (
              <div className="form-success">
                <h3 style={{color:'var(--gold)', fontFamily:'var(--font-head)', marginBottom:10}}>Message Sent</h3>
                <p>Thank you for reaching out — Denise will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="6" required value={form.message} onChange={handleChange} placeholder="Write your message..." />
                </div>
                <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal variant="reveal-right" delay={150}>
            <div className="feature-card">
              <h3 style={{marginBottom:18}}>Reach Out</h3>
              <p style={{marginBottom:6, color:'var(--gold)', fontFamily:'var(--font-head)', fontSize:'0.9rem'}}>EMAIL</p>
              <p style={{marginBottom:20}}>hello@denisegholson.com</p>
              <p style={{marginBottom:6, color:'var(--gold)', fontFamily:'var(--font-head)', fontSize:'0.9rem'}}>SOCIAL</p>
              <div className="social-row" style={{marginBottom:20}}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn">f</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">ig</a>
              </div>
              <p style={{fontStyle:'italic'}}>Denise loves hearing from readers, book clubs, and fellow authors.</p>
              <div style={{marginTop:24, display:'flex', alignItems:'center', gap:16}}>
                <div style={{width:70, height:70, borderRadius:'50%', overflow:'hidden', border:'2px solid var(--gold)', boxShadow:'var(--glow-gold)'}}>
                  <AuthorPortrait2 />
                </div>
                <span style={{fontFamily:'var(--font-head)', color:'var(--parchment-muted)'}}>Denise R Gholson</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section darkest" style={{textAlign:'center', background:'linear-gradient(115deg,#2a0606,#07040A)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Follow the Journey</h2>
            <p className="subtext" style={{margin:'14px 0 26px'}}>Follow Denise on social media for updates, behind-the-scenes, and more.</p>
            <div className="social-row" style={{justifyContent:'center'}}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" style={{width:60,height:60,fontSize:'1.2rem'}}>f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" style={{width:60,height:60,fontSize:'1.2rem'}}>ig</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
