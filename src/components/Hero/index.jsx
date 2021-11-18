import HeroImage from "../../assets/img/HeroBanner/hero.svg";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Div>
      <Container>
        <StyledImg src={HeroImage} alt='Hero' />
      </Container>
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  padding-top: 128px;
  padding-bottom: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #05080a;
  @media screen and (max-width: 768px) {
    padding-bottom: 60px;
  }
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 883px;
  height: auto;
`;
