import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MoonIcon from './MoonIcon'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about-author', label: 'About the Author' },
  { to: '/about-book', label: 'About the Book' },
  { to: '/book-trailer', label: 'Book Trailer' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 80) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="logo">
            <MoonIcon size={20} />
            D.R.&nbsp;GHOLSON
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? 'active' : ''}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span style={open ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? 'active' : ''}`} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
