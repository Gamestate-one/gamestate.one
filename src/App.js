import Header from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Explore />
      </main>
    </>
  );
}

export default App;
