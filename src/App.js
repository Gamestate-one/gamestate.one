import Staking from "./components/Staking"
import Header from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Partners from "./components/Partners"
import RoadMap from "./components/RoadMap"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"
import TokenSale from "./components/TokenSale"
import Description from "./components/Description"
import MarketPlace from "./components/MarketPlace"
import Igos from "./components/Igos"
import styled from "styled-components"
import BackTop from "../src/assets/img/backtop.png"
import BackTopBackground from "../src/assets/img/backtopBackground.png"
import ExtendedTeam from "./components/ExtendedTeam"
import CoreTeam from "./components/CoreTeam"

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        <Explore />
        <TokenSale />
        <Description />
        <MarketPlace />
        <Igos />
        <Staking />
        <CoreTeam />
        <ExtendedTeam />
        <Partners />
        <RoadMap />
        <Contact />
        <Footer />
      </StyledMain>
      <StyledBackTop>
        {isVisible && (
          <BackTopBtn onClick={scrollToTop}>
            <img src={BackTop} alt="back to top" />
          </BackTopBtn>
        )}
      </StyledBackTop>
    </>
  )
}

const StyledMain = styled.main`
  overflow: hidden;
`
const BackTopBtn = styled.div`
  position: relative;
  border-radius: 4px;
  background-image: url(${BackTopBackground});
  background-size: contain;
  width: 160px;
  height: 160px;
  img {
    position: absolute;
    top: 31%;
    right: 40%;
  }
  @media (max-width: 991px) {
    width: 100px;
    height: 100px;
    img {
      width: 20px;
      height: 32px;
    }
  }
`
const StyledBackTop = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 1.5em;
  right: 1.2em;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  opacity: 0.51;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 991px) {
    bottom: 0.5em;
    right: 0.5em;
  }
  @media (max-width: 767px) {
  }
`
export default App
