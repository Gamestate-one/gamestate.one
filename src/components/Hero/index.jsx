import styled from "styled-components";
import HeroVideo from "../../assets/videos/herovideo.mp4";
const Hero = () => {
  return (
    <Div>
      <video width='100%' height='80%' autoPlay loop muted playsInline>
        <source src={HeroVideo} type='video/mp4' />
      </video>
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-color: #05080a;
  @media screen and (max-width: 1399px) {
    padding-top: 80px;
  }
`;
