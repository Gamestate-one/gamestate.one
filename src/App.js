import Staking from "./components/Staking"
import Header from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Partners from "./components/Partners"
import RoadMap from "./components/RoadMap"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Explore />
        <Staking />
        <Partners />
        <RoadMap />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
