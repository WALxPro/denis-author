import { useState } from 'react'
import { Link } from 'react-router-dom'
import ParticleCanvas from '../components/ParticleCanvas'
import ScrollReveal from '../components/ScrollReveal'
import AccordionItem from '../components/AccordionItem'

const faqs = [
  { q:'Where can I buy the book?', a:'Whispers Beneath Crimson Moon is available on 35+ platforms worldwide, including Amazon Kindle, Barnes & Noble, Apple Books, Kobo, and more. See the About the Book page for the full list.' },
  { q:'Is this a series?', a:"Yes — this is Book One of The Red Ledger Series. Colleen and Ean's story continues in future installments." },
  { q:'What genre is this book?', a:'It is a historical fantasy romance with mystery and slow-burn elements, set in an 18th-century maritime world inspired by Cornwall, England.' },
  { q:'Is there an audiobook?', a:'An audiobook edition is in the works. Sign up via the Contact page to be notified the moment it releases.' },
  { q:'Will there be signed copies?', a:'Denise plans to offer signed paperback copies for select releases and events — stay tuned via her social channels.' },
  { q:'Can I contact Denise for events?', a:'Absolutely. Use the Contact page to reach out about events, book clubs, or speaking opportunities.' },
  { q:'Is there a sequel coming?', a:'Yes! Book Two of The Red Ledger Series is in development. Follow Denise on social media for updates.' },
  { q:'How long is the book?', a:'Whispers Beneath Crimson Moon is a full-length novel, perfect for a deep, immersive reading experience.' },
  { q:'Is the content suitable for young adults?', a:'The book is written for adult and new-adult readers, with romance and mature themes woven throughout.' },
  { q:'Where can I leave a review?', a:'Reviews are welcome on Amazon, Goodreads, or any platform where you purchased the book — they mean the world to indie authors.' },
  { q:'Does Denise do book clubs?', a:'Yes, Denise loves connecting with book clubs. Reach out through the Contact page to arrange a discussion or Q&A.' },
  { q:'How can I stay updated on new releases?', a:'Follow Denise on Facebook and Instagram, or send a message through the Contact page to stay in the loop.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      <section className="hero" style={{minHeight:'55vh'}}>
        <div className="hero-bg" />
        <ParticleCanvas count={40} />
        <div className="hero-content fade-stagger">
          <h1 className="display-title" style={{fontSize:'clamp(2rem,5vw,3.2rem)'}}>FREQUENTLY ASKED QUESTIONS</h1>
          <p className="subtext" style={{marginTop:16}}>Everything you might want to know about Whispers Beneath Crimson Moon.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container" style={{maxWidth:800}}>
          {faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 30}>
              <AccordionItem
                question={f.q}
                answer={f.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}

          <ScrollReveal delay={100}>
            <div className="feature-card" style={{textAlign:'center', marginTop:40}}>
              <h3>Still have questions?</h3>
              <p style={{marginBottom:20}}>Reach out directly — Denise loves hearing from readers.</p>
              <Link to="/contact" className="btn btn-primary">CONTACT DENISE</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
