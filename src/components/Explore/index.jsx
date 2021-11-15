import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Bird from "../../assets/img/Explore/bird.svg";
import Discord from "../../assets/img/Explore/discord.svg";
import Facebook from "../../assets/img/Explore/facebook.svg";
import Medium from "../../assets/img/Explore/medium.svg";
import Telegram from "../../assets/img/Explore/telegram.svg";
import Twitter from "../../assets/img/Explore/twitter.svg";
import HeroImage from "../../assets/img/Explore/hero.png";
const Explore = () => {
  return (
    <>
      <StyledContainer fluid>
        <StyledHead>
          <StyledImg width='239px' height='76px' src={Discord} alt='Discord' />
          <StyledImg width='75px' height='75px' src={Telegram} alt='Telegram' />
          <StyledImg width='170px' height='90px' src={Twitter} alt='Twitter' />
          <StyledImg width='184px' height='77px' src={Medium} alt='Medium' />
          <StyledImg width='84px' height='84px' src={Bird} alt='Bird' />
          <StyledImg
            width='224px'
            height='65px'
            src={Facebook}
            alt='Facebook'
          />
        </StyledHead>
        <div>
          <img src={HeroImage} alt='Hero' />
          <StyledDescription>
            EXPLORE, PLAY, EARN AND SOCIALISE IN THE DECENTRALIZED VIRTUAL
            WORLD.START YOUR METAVERSE GAMING WITH VIP CARD NOW!
          </StyledDescription>
          <StyledButton>Buy Now</StyledButton>
        </div>
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled(Container)`
  opacity: 1;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  text-align: center;
  padding: 0 7%;
`;
const StyledHead = styled(Row)`
  align-items: center;
  margin-top: 33px;
  margin-bottom: 60px;
  height: 90px;
  justify-content: space-between;
  opacity: 0.37;
`;
const StyledImg = styled.img`
  height: ${(props) => props.height};
  max-width: ${(props) => props.width};
`;
const StyledDescription = styled.div`
  font-weight: bold;
  font-style: normal;
  font-size: 50px;
  color: #ffffff;
  line-height: 60px;
  padding-bottom: 70px;
`;
const StyledButton = styled.div`
  width: 292px;
  height: 76px;
  background: transparent
    linear-gradient(104deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 4px;
  opacity: 0.9;
  box-shadow: 5px 10px #e740f0;
`;

export default Explore;
