import Staking from "./components/Staking"
import Header from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
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
      </main>
    </>
  )
}

export default App
