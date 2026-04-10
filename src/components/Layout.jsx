import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import ScrollTopButton from './ScrollTopButton'
import StickyCTA from './StickyCTA'
import ProgressBar from './ProgressBar'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  useEffect(() => {
    document.body.classList.add('page-loaded')
  }, [])

  return (
    <>
      <ProgressBar />
      <Navbar />
      <div className="awards-strip">
        DUNS 100 &middot; BDi CODE &middot; מוביל בישראל מאז 2003
      </div>
      <Outlet />
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
      <ScrollTopButton />
    </>
  )
}
