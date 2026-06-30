import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import ParticleCanvas from "../components/ParticleCanvas";
import MoonIcon from "../components/MoonIcon";
import AuthorPortrait1 from "../assets/AuthorPortrait1";
import AuthorPortrait2 from "../assets/AuthorPortrait2";
import author_1 from "../assets/author_1.jpeg";
import author_2 from "../assets/author_2.jpeg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Counter({ target, label, isNumeric = true }) {
  const ref = useRef(null);
  const [value, setValue] = useState(isNumeric ? 0 : target);

  useEffect(() => {
    if (!isNumeric) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const num = parseInt(target);
          const duration = 1500;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * num));
            if (progress < 1) requestAnimationFrame(step);
            else setValue(num);
          }
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, isNumeric]);

  return (
    <div ref={ref} className="counter-card">
      <span className="num">
        {isNumeric ? value : target}
        {isNumeric && target === "35" ? "+" : ""}
      </span>
      <span className="label">{label}</span>
    </div>
  );
}

const timeline = [
  {
    era: "Childhood",
    text: "First stories written in notebooks, full of sea monsters and secret maps.",
  },
  {
    era: "Discovery",
    text: "Fell in love with historical fantasy and maritime tales of hidden truths.",
  },
  {
    era: "Cornwall",
    text: "Inspired by England's coastal legends, fog, and rugged shoreline.",
  },
  {
    era: "The Idea",
    text: "Whispers Beneath Crimson Moon begins to take shape, ledger and all.",
  },
  { era: "2025", text: "Debut novel published on 35+ global platforms." },
];

export default function AboutAuthor() {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <div className="hero-bg" />
        <ParticleCanvas count={50} />
        <div className="hero-content fade-stagger">
          <h1
            className="display-title"
            style={{ fontSize: "clamp(2.2rem,6vw,4rem)" }}
          >
            DENISE R GHOLSON
          </h1>
          <p className="eyebrow crimson" style={{ marginTop: 14 }}>
            Author of Whispers Beneath Crimson Moon
          </p>
          <div className="divider">
            <span className="line" />
            <MoonIcon size={18} />
            <span className="line" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PHOTOS + BIO */}
      <section className="section dark">
        <div className="container split">
          <ScrollReveal variant="reveal-left">
            <div className="author-gallery">
              <div className="photo-frame-2 main-photo">
                <img src={author_1} alt="Author" />
              </div>

              <div className="photo-frame-2 small-photo">
                <img src={author_2} alt="Author" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" delay={150}>
            <p className="eyebrow crimson">Her Story</p>
            <h2
              className="display-title"
              style={{ fontSize: "2.2rem", marginBottom: 20 }}
            >
              A Voice Shaped by Fog and Tide
            </h2>
            <p
              style={{
                lineHeight: 1.8,
                marginBottom: 16,
                color: "var(--parchment)",
              }}
            >
              Denise Gholson has been weaving stories since childhood, drawn to
              the unseen threads between resilience and the unknown. Her writing
              blends emotional depth with an undercurrent of mystery, inviting
              readers into worlds where shadows whisper and strength is forged
              in adversity.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                marginBottom: 16,
                color: "var(--parchment)",
              }}
            >
              Inspired by her time in Cornwall, England a place rich with
              legend, rugged coastlines, and maritime history Denise brings to
              life stories that explore what lies just beyond the veil of the
              known world.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                marginBottom: 16,
                color: "var(--parchment)",
              }}
            >
              Her debut novel, Whispers Beneath Crimson Moon, is the first
              chapter in The Red Ledger Series. It is a story born from years of
              imagining what it means to carry a secret so powerful, the sea
              itself remembers it.
            </p>
            <p style={{ lineHeight: 1.8, color: "var(--parchment)" }}>
              When she is not writing, Denise is an avid reader of historical
              fiction and fantasy, a lover of antique maps, and someone who
              believes that every old book has a story beyond its pages.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — STATS */}
      <section className="section darkest">
        <div className="container">
          <div
            className="stats-row"
            style={{ gridTemplateColumns: "repeat(4,1fr)" }}
          >
            <ScrollReveal delay={0}>
              <Counter target="1" label="Debut Novel Published" />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Counter target="35" label="Global Platforms" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Counter
                target="∞"
                label="Stories in Progress"
                isNumeric={false}
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Counter target="2025" label="Year of Debut" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INSPIRATION */}
      <section
        className="section dark"
        style={{ background: "linear-gradient(160deg,#0d1420,#110D14 60%)" }}
      >
        <div className="container split">
          <ScrollReveal variant="reveal-left">
            <p className="pull-quote" style={{ textAlign: "left", margin: 0 }}>
              <span className="quote-mark">“</span>Cornwall gave me the fog, the
              legend, and the sea. The story came from somewhere deeper.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" delay={150}>
            <div
              className="feature-card"
              style={{ borderTop: "2px solid var(--gold)" }}
            >
              <p style={{ lineHeight: 1.8, color: "var(--parchment)" }}>
                Denise's writing process begins long before the page — with long
                walks along the cliffs, research into maritime trade routes, and
                the quiet collection of half-true local legends. She writes in
                layers: first the world, then the wound at its center, then the
                people who must carry it. Cornwall's mist and folklore taught
                her that the most powerful stories are the ones that refuse to
                stay buried.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — TIMELINE */}
      <section className="section darkest">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">The Writing Journey</h2>
          </ScrollReveal>
          <div className="timeline">
            {timeline.map((t, i) => (
              <ScrollReveal
                key={t.era}
                variant={i % 2 === 0 ? "reveal-left" : "reveal-right"}
                delay={i * 80}
                className="timeline-item"
              >
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <h4>{t.era}</h4>
                  <p>{t.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CONNECT */}
      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Stay Connected</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p
              className="subtext"
              style={{ maxWidth: 600, margin: "18px auto" }}
            >
              Follow Denise on social media for updates on The Red Ledger
              Series, behind-the-scenes writing life, and more.
            </p>
          </ScrollReveal>
          <div
            className="social-row"
            style={{ justifyContent: "center", margin: "28px 0" }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              style={{ width: 54, height: 54, fontSize: "1.1rem" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              style={{ width: 54, height: 54, fontSize: "1.1rem" }}
            >
              <FaInstagram />
            </a>
          </div>
          <Link to="/contact" className="btn btn-primary">
            CONTACT DENISE
          </Link>
        </div>
      </section>
    </div>
  );
}
