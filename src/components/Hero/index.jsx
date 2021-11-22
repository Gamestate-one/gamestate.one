// import HeroImage from "../../assets/img/HeroBanner/hero.svg"
import styled from "styled-components";
import { Container } from "react-bootstrap";
import game from "../../assets/videos/game.mp4";
const Hero = () => {
  return (
    <Div>
      <Container>
        {/* <StyledImg src={HeroImage} alt='Hero' /> */}
        <video width='100%' height='80%' autoPlay muted loop playsinline>
          <source src={game} type='video/mp4' />
        </video>
      </Container>
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  /* padding-bottom: 100px; */
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #05080a;
  @media screen and (max-width: 768px) {
    /* padding-bottom: 60px; */
  }
  @media screen and (max-width: 1399px) {
    padding-top: 128px;
  }
`;
// const StyledImg = styled.img`
//   object-fit: cover;
//   width: 100%;
//   max-width: 883px;
//   height: auto;
// `
