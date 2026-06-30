import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MoonIcon from './MoonIcon'
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function onScroll() { setShow(window.scrollY > 300) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <Link to="/" className="logo">
            <MoonIcon size={18} />
            D.R.&nbsp;GHOLSON
          </Link>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about-author" className="footer-link">About the Author</Link>
            <Link to="/about-book" className="footer-link">About the Book</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <div className="social-row">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook"><FaFacebook/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram"><FaInstagram/></a>
          </div>
        </div>
        <p className="footer-bottom">© 2025 Denise R Gholson — Whispers Beneath Crimson Moon — The Red Ledger Series. All rights reserved.</p>
      </footer>
      <button className={`back-to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        ↑
      </button>
    </>
  )
}
