import HeroImage from "../../assets/img/HeroBanner/hero.svg";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHero>
      <StyledImg src={HeroImage} alt="Hero" />
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.div`
  margin-top: 128px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 883px;
  height: auto;
`;
