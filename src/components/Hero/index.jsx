import HeroImage from "../../assets/img/HeroBanner/hero.svg";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHero>
      <StyledImg src={HeroImage} alt='Hero' />
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.div`
  margin: 128px 0 0 0;
  display: flex;
  justify-content: center;
`;
const StyledImg = styled.img`
  object-fit: cover;
`;
