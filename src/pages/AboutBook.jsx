import ScrollReveal from "../components/ScrollReveal";
import ParticleCanvas from "../components/ParticleCanvas";
import Book3DTilt from "../components/Book3DTilt";
import RippleButton from "../components/RippleButton";
import BookCoverArt from "../assets/BookCoverArt";
import BookFullWrapArt from "../assets/BookFullWrapArt";
import moonImage from "../assets/moon.png";
import book from "../assets/book.jpeg";
import bookCover from "../assets/book_cover.jpeg";

const details = [
  { icon: "📖", label: "Genre", value: "Historical Fantasy Romance" },
  { icon: "🌊", label: "Setting", value: "18th Century Maritime World" },
  { icon: "❤️", label: "Romance Type", value: "Slow-Burn" },
  { icon: "📚", label: "Series", value: "The Red Ledger Series" },
  { icon: "🌙", label: "Themes", value: "Secrets, Identity, Resilience, Love" },
  { icon: "🗺️", label: "Inspired By", value: "Cornwall, England" },
];

const characters = [
  {
    name: "Colleen Ashford",
    role: "Hero",
    tag: "The Protagonist",
    quote: "Disguised, hunted, and stronger than she knows.",
  },
  {
    name: "Ean Mercer",
    role: "Love Interest",
    tag: "The Sailor",
    quote: "A man of the sea with secrets of his own.",
  },
  {
    name: "The Crimson Ledger",
    role: "The Catalyst",
    tag: "The Mystery",
    quote: "Not just a book. A force of reckoning.",
  },
];

const themes = [
  {
    icon: "🌙",
    title: "Identity & Disguise",
    desc: "Colleen survives by becoming someone else — but every disguise has a cost.",
  },
  {
    icon: "🌊",
    title: "Secrets & Truth",
    desc: "The Crimson Ledger holds a truth too dangerous to stay buried.",
  },
  {
    icon: "❤️",
    title: "Forbidden Connection",
    desc: "A bond that grows in the spaces between distrust and devotion.",
  },
  {
    icon: "⚓",
    title: "Power & Legacy",
    desc: "What is inherited, what is stolen, and what must be reclaimed.",
  },
];

const reviews = [
  {
    quote:
      "A breathtaking debut. The atmosphere pulls you in from page one and never lets go. Denise writes fog and secrecy like she has lived inside them.",
    name: "Early Reader",
  },
  {
    quote:
      "Colleen is the kind of heroine you root for from the first sentence. Denise has real talent for slow-burn tension.",
    name: "Book Club Member",
  },
  {
    quote:
      "The mystery of the Crimson Ledger kept me reading until 3am. I need Book Two NOW.",
    name: "Fantasy Romance Reader",
  },
  {
    quote:
      "Equal parts romance, mystery, and maritime adventure — this is the kind of debut you remember.",
    name: "Goodreads Reviewer",
  },
];

const platforms = [
  "Amazon Kindle",
  "Barnes & Noble",
  "Apple Books",
  "Google Play Books",
  "Kobo",
  "Scribd",
  "Smashwords",
  "Draft2Digital",
  "IngramSpark",
  "OverDrive",
  "Audiobooks.com",
  "Storytel",
];

export default function AboutBook() {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <ParticleCanvas count={70} />
        <img
          src={moonImage}
          alt="Crimson Moon"
          className="hero-moon moon-image"
        />
        <div className="hero-content fade-stagger" style={{ maxWidth: 600 }}>
          <Book3DTilt>
            {/* <BookCoverArt /> */}
            <img src={book} className="book-image" alt="book cover" />
          </Book3DTilt>
          <h1
            className="display-title"
            style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginTop: 30 }}
          >
            WHISPERS BENEATH CRIMSON MOON
          </h1>
          <p className="eyebrow crimson">The Red Ledger Series — Book One</p>
          <div className="btn-row">
            <RippleButton className="btn-primary" href="https://amazon.com">
              Buy on Amazon
            </RippleButton>
            <RippleButton className="btn-secondary" href="#buy">
              {" "}
              Buy Directly
            </RippleButton>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FULL SYNOPSIS */}
      <section className="section dark">
        <div className="container split">
          <ScrollReveal variant="reveal-left">
            <div className="pill-row">
              <span className="pill">Historical Fantasy</span>
              <span className="pill">Romance</span>
              <span className="pill">Mystery</span>
              <span className="pill">Sea Adventure</span>
            </div>
            <h2
              className="display-title"
              style={{ fontSize: "2rem", margin: "14px 0 20px" }}
            >
              The Full Story
            </h2>
            <p
              style={{
                lineHeight: 1.8,
                marginBottom: 14,
                color: "var(--parchment)",
              }}
            >
              In a fog-shrouded port town where superstition runs as deep as the
              tide, Colleen Ashford has built a life from borrowed names and
              careful silence. She has buried her past beneath false papers and
              a closed-off heart until the Crimson Ledger resurfaces.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                marginBottom: 14,
                color: "var(--parchment)",
              }}
            >
              Ean Mercer, a sailor with secrets of his own, finds himself drawn
              into Colleen's orbit, first by chance, then by choice. As the
              ledger's pages reveal names, debts, and betrayals that reach into
              the town's most powerful families, Colleen and Ean must decide how
              much truth they can survive and how much of themselves they're
              willing to risk for each other.
            </p>
            <p style={{ lineHeight: 1.8, color: "var(--parchment)" }}>
              Whispers Beneath Crimson Moon is a slow-burn tale of identity,
              resilience, and a love that refuses to stay hidden, set against
              the salt-soaked backdrop of an 18th-century coastal world.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" delay={150}>
            <Book3DTilt className="wide">
              {" "}
              <img src={bookCover} className="book-image" alt="book cover" />
            </Book3DTilt>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — BOOK DETAILS */}
      <section className="section darkest">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Book Details</h2>
          </ScrollReveal>
          <div className="grid-3">
            {details.map((d, i) => (
              <ScrollReveal key={d.label} delay={i * 80}>
                <div className="feature-card">
                  <span className="icon">{d.icon}</span>
                  <h3>{d.label}</h3>
                  <p>{d.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CHARACTER SPOTLIGHT */}
      <section className="section dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Meet the Characters</h2>
          </ScrollReveal>
          <div className="grid-3">
            {characters.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 100}>
                <div className="feature-card" style={{ textAlign: "center" }}>
                  <span className="pill badge" style={{ marginBottom: 14 }}>
                    {c.role}
                  </span>
                  <h3 style={{marginTop:30}}>{c.name}</h3>
                  <p className="eyebrow crimson" style={{ margin: "8px 0" }}>
                    {c.tag}
                  </p>
                  <p style={{ fontStyle: "italic" }}>"{c.quote}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — THEMES */}
      <section className="section darkest">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Themes That Run Deep</h2>
          </ScrollReveal>
          <div className="grid-2">
            {themes.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 80}>
                <div className="feature-card">
                  <span className="icon">{t.icon}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — REVIEWS */}
      <section className="section dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Reader Reviews</h2>
          </ScrollReveal>
          <div className="grid-2">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 100}>
                <div className="quote-card">
                  <span className="quote-mark">“</span>
                  <p>{r.quote}</p>
                  <p className="reviewer">— {r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHERE TO BUY */}
      <section
        className="section darkest"
        id="buy"
        style={{ textAlign: "center" }}
      >
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Get Your Copy Today</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div
              className="pill-row"
              style={{ justifyContent: "center", marginTop: 30 }}
            >
              {platforms.map((p) => (
                <a
                  key={p}
                  href="#"
                  className="pill"
                  style={{ cursor: "pointer" }}
                >
                  {p}
                </a>
              ))}
            </div>
          </ScrollReveal>
          <div className="btn-row">
            <RippleButton
              className="btn-primary btn-lg"
              href="https://amazon.com"
            >
               Buy on Amazon
            </RippleButton>
            <RippleButton
              className="btn-secondary btn-lg"
              href="https://books.apple.com"
            >
               Buy Directly
            </RippleButton>
          </div>
          <p className="subtext" style={{ marginTop: 24 }}>
            Available in eBook, Paperback, and more formats
          </p>
        </div>
      </section>
    </div>
  );
}
