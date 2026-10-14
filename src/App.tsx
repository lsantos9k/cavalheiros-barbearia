import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Team from './components/Team'
import Cuts from './components/Cuts'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain min-h-screen bg-champagne">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Team />
        <Cuts />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
