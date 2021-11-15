import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Bird from "../../assets/bird.svg";
import Discord from "../../assets/discord.svg";
import Facebook from "../../assets/facebook.svg";
import Medium from "../../assets/medium.svg";
import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";

const Explore = () => {
  return (
    <>
      <StyledContainer>
        <Row>
          <Col>
            <img src={Discord} alt='Discord' />
          </Col>
          <Col>
            <img src={Telegram} alt='Telegram' />
          </Col>
          <Col>
            <img src={Twitter} alt='Twitter' />
          </Col>
          <Col>
            <img src={Medium} alt='Medium' />
          </Col>
          <Col>
            <img src={Bird} alt='Bird' />
          </Col>
          <Col>
            <img src={Facebook} alt='Facebook' />
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};
export default Explore;
const StyledContainer = styled(Container)`
  background: transparent linear-gradient(122deg, #ffffff 0%, #808080 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;
