import styled from "styled-components";
import game from "../../assets/videos/game.mp4";
const Hero = () => {
  return (
    <Div>
      <video width='100%' height='80%' autoPlay loop muted playsInline>
        <source src={game} type='video/mp4' />
      </video>
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #05080a;
  @media screen and (max-width: 1399px) {
    padding-top: 80px;
  }
`;
