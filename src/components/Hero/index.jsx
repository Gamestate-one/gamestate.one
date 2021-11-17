import HeroImage from "../../assets/img/HeroBanner/hero.svg";
import styled from "styled-components";

const Hero = () => {
  return (
    <Div>
      <StyledImg src={HeroImage} alt='Hero' />
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  margin-top: 102px;
  padding-top: 26px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  background-color: #05080a;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 883px;
  height: auto;
`;
