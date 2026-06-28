import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutAuthor from './pages/AboutAuthor'
import AboutBook from './pages/AboutBook'
import BookTrailer from './pages/BookTrailer'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main key={location.pathname} className="page page-fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-author" element={<AboutAuthor />} />
          <Route path="/about-book" element={<AboutBook />} />
          <Route path="/book-trailer" element={<BookTrailer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
