import React, { useState, useEffect } from 'react';
import Staking from '../../pages/Home/components/Staking';
import Header from '../../pages/Home/components/Navbar';
import Hero from '../../pages/Home/components/Hero';
import Explore from '../../pages/Home/components/Explore';
import Partners from '../../pages/Home/components/Partners';
import RoadMap from '../../pages/Home/components/RoadMap';
import Contact from '../../pages/Home/components/Contact';
import Footer from '../../pages/Home/components/Footer';
import TokenSale from '../../pages/Home/components/TokenSale';
import Description from '../../pages/Home/components/Description';
import MarketPlace from '../../pages/Home/components/MarketPlace';
import Igos from '../../pages/Home/components/Igos';
import styled from 'styled-components';
import BackTop from '../../assets/img/backtop.png';
import BackTopBackground from '../../assets/img/backtopBackground.png';
import ExtendedTeam from '../../pages/Home/components/ExtendedTeam';
import CoreTeam from '../../pages/Home/components/CoreTeam';
import Monitor from '../../pages/Home/components/Monitor';

const HomeContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 680) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        <Monitor />
        <TokenSale />
        <Explore />
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
  );
};
const StyledMain = styled.main`
  overflow: hidden;
`;
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
`;
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
    bottom: 0.2em;
    right: 0;
  }
`;
export default HomeContainer;
