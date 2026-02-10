import Navbar from "../components/Landing/Navbar"
import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import Services from "../components/Landing/Services"
import Contact from "../components/Landing/Contact"
import Footer from "../components/Landing/Footer"

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}