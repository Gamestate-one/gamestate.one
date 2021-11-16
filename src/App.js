import Staking from "./components/Staking"
import Header from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Partners from "./components/Partners"
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
      </main>
    </>
  )
}

export default App
