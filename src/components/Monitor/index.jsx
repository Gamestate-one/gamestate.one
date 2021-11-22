import { Container } from "react-bootstrap";
import Bird from "../../assets/img/Explore/bird.svg";
import Discord from "../../assets/img/Explore/discord.svg";
import Facebook from "../../assets/img/Explore/facebook.svg";
import Medium from "../../assets/img/Explore/medium.svg";
import Telegram from "../../assets/img/Explore/telegram.svg";
import Twitter from "../../assets/img/Explore/twitter.svg";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
const Monitor = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Gamestate is a cross-chain, multi-world megaverse nexus, uniting gamers, fans, developers, creators, and merchants in a place of fun, discovery, and learning.<br><br>An open world platform, offering sales channels for games, apps, advertising, gaming equipment, music, media, and general merchandise, as well as a Rocket Launchpad accelerator for indie game startups.</br>",
      ],
      typeSpeed: 24,
      backSpeed: 0,
      backDelay: 3000,
      loop: true,
      showCursor: false,
      loopCount: Infinity,
      fadeOut: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <Div>
      <Header>
        <StyledHead>
          <StyledImg
            width='239px'
            target='_blank'
            rel='noreferrer'
            href='https://discord.gamestate.one'
          >
            <img src={Discord} alt='Discord' />
          </StyledImg>
          <StyledImg
            width='75px'
            target='_blank'
            rel='noreferrer'
            href='https://t.me/GamestateOfficial'
          >
            <img src={Telegram} alt='Telegram' />
          </StyledImg>
          <StyledImg
            width='170px'
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/gamestate_one'
          >
            <img src={Twitter} alt='Twitter' />
          </StyledImg>
          <StyledImg
            width='184px'
            target='_blank'
            rel='noreferrer'
            href='https://medium.com/@gamestate'
          >
            <img src={Medium} alt='Medium' />
          </StyledImg>
          <StyledImg
            width='84px'
            target='_blank'
            rel='noreferrer'
            href='https://blurt.blog/@gamestate'
          >
            <img src={Bird} alt='Bird' />
          </StyledImg>
          <StyledImg width='224px' target='_blank' rel='noreferrer' href='/#'>
            <img src={Facebook} alt='Facebook' />
          </StyledImg>
        </StyledHead>
      </Header>
      <StyledContainer>
        <span className='typingEffect' ref={el} />
      </StyledContainer>
    </Div>
  );
};

const Div = styled.div``;
const StyledContainer = styled(Container)`
  opacity: 1;
  text-align: left;
  padding: 60px 0;
  position: relative;
  max-width: 94%;
  min-height: 420px;
  @media (max-width: 1199px) {
    min-height: 480px;
  }
  @media (max-width: 984px) {
    min-height: 520px;
  }
  @media (max-width: 929px) {
    min-height: 540px;
  }
  @media (max-width: 784px) {
    min-height: 590px;
  }
  @media (max-width: 458px) {
    min-height: 640px;
  }
  .typingEffect {
    font-family: Matrix;
    font-size: 28px;
    color: #1ad177;
    @media (max-width: 576px) {
      font-size: 22px;
    }
    @media (max-width: 340px) {
      font-size: 19px;
    }
  }
`;
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: space-between;
  opacity: 0.37;
  @keyframes slideIcon {
    0% {
      left: 0px;
    }
    50% {
      left: -1400px;
    }
    100% {
      left: 0px;
    }
  }
  @media screen and (max-width: 1199px) {
    position: absolute;
    width: 1400px;
    animation: linear infinite;
    -webkit-animation: linear infinite;
    -moz-animation: linear infinite;
    -o-animation: linear infinite;
    animation-name: slideIcon;
    animation-duration: 60s;
  }
  @media screen and (max-width: 576px) {
    max-height: 66px;
  }
`;
const StyledImg = styled.a`
  max-width: ${(props) => props.width};
  @media screen and (max-width: 576px) {
    img {
      max-height: 60px;
    }
  }
`;

const Header = styled.div`
  position: relative;
  background-color: #121212;
  padding: 10px 3%;
  margin: 0 auto;
  @media screen and (max-width: 1199px) {
    height: 95px;
    padding: 0;
  }
  @media screen and (max-width: 576px) {
    height: 66px;
  }
`;
export default Monitor;
