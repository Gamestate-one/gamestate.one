import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Avatar from "../../assets/img/Description/avatar.png";
import Banner from "../../assets/img/Description/banner.png";
import GridBackground from "../../assets/img/Description/gridBackground.png";
import UnifiledBackground from "../../assets/img/Description/unifiledBackground.png";

const Description = () => {
  return (
    <Div>
      <Container>
        <Row>
          <StyledUserContent>
            <StyledUserTitle>User-generated</StyledUserTitle>
            <StyledSubUserTitle>CONTENT MONETISATION</StyledSubUserTitle>
            <StyledUserDescription>
              Gamers can create avatars, skins, guides, artworks, and more.
            </StyledUserDescription>
          </StyledUserContent>
          <Col>
            <StyledAvatar src={Avatar} alt='avatar' />
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledBannerImage src={Banner} alt='Banner' />
          </Col>
          <StyledGameContent>
            <StyledGameTitle>UNIFIED GAME</StyledGameTitle>
            <StyledGameSubTitle>ACHIEVEMENTS PROFILES</StyledGameSubTitle>
            <StyledGameDescription>
              Gamers' achievement profile includes collating experience, levels
              and rank in a universal immutable profile
            </StyledGameDescription>
          </StyledGameContent>
        </Row>
      </Container>
      <img
        className='gridBackground'
        src={GridBackground}
        alt='Grid Background'
      />
      <img
        className='unifiledBackground'
        src={UnifiledBackground}
        alt='Unidiled Background'
      />
    </Div>
  );
};
// Styled Container
const Div = styled.div`
  position: relative;
  padding-bottom: 170px;
  .gridBackground {
    position: absolute;
    bottom: 0;
    z-index: -50;
    width: 100%;
  }
  .unifiledBackground {
    position: absolute;
    bottom: 140px;
    left: 200px;
    width: 86%;
    z-index: -50;
  }
`;
// User Content
const StyledUserContent = styled(Col)`
  padding-top: 120px;
`;
const StyledAvatar = styled.img`
  max-width: 967px;
  max-height: 967px;
`;
const P = styled.p`
  letter-spacing: 0px;
  display: flex;
  opacity: 1;
  align-items: center;
  margin-bottom: 28px;
`;
const StyledUserTitle = styled(P)`
  position: relative;
  font: normal normal bold 77px/60px Whyte;
  color: #e740f0;
  text-shadow: 0px 3px 6px #9e08a6, 0px 0px 98px #e740f0c4;
  text-transform: uppercase;
  height: 77px;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    max-width: 44px;
    height: 179px;
    left: -6px;
    top: -58px;
    background: linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0% 0%
      no-repeat padding-box;
  }
  &::after {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    filter: blur(50px);
    width: 100%;
    max-width: 728px;
    height: 45px;
  }
`;
const StyledSubUserTitle = styled(P)`
  font: normal normal normal 50px/22px Whyte;
  color: #ffffff;
  text-transform: uppercase;
  height: 50px;
`;
const StyledUserDescription = styled(P)`
  font: normal normal normal 20px/28px Whyte;
  color: #d4d4d4;
  margin-left: 8px;
`;
// Game Content
const StyledGameContent = styled(Col)`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 120px;
`;
const StyledBannerImage = styled.img`
  padding-top: 80px;
  padding-left: 40px;
`;
const StyledGameTitle = styled(P)`
  font: normal normal bold 77px/60px Whyte;
  color: #6a9df9;
  text-shadow: 0px 3px 6px #163f8c, 0px 0px 98px #163f8c;
  text-transform: uppercase;
  height: 77px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 600px;
    height: 34px;
    background: #6294ef 0% 0% no-repeat padding-box;
    filter: blur(39px);
  }
`;
const StyledGameSubTitle = styled(P)`
  position: relative;
  color: #ffffff;
  text-shadow: 0px 11px 4px #00000029;
  text-transform: uppercase;
  height: 50px;
  font: normal normal normal 50px/60px Whyte;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 44px;
    height: 179px;
    right: -22px;
    top: -120px;
    background: linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0% 0%
      no-repeat padding-box;
  }
`;
const StyledGameDescription = styled(P)`
  font: normal normal normal 20px/28px Whyte;
  color: #d4d4d4;
  max-width: 556px;
`;
export default Description;
