import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Avatar from "../../assets/img/Description/avatar.png";
import Banner from "../../assets/img/Description/banner.png";
import GridBackground from "../../assets/img/Description/gridBackground.png";
import UnifiedBackground from "../../assets/img/Description/unifiedBackground.png";

const Description = () => {
  return (
    <Div>
      <StyledContainer>
        <Row>
          <StyledUserContent
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xxl={{ span: 6, order: 1 }}
          >
            <StyledUserTitle>User-generated</StyledUserTitle>
            <StyledSubUserTitle>CONTENT MONETISATION</StyledSubUserTitle>
            <StyledUserDescription>
              Gamers can create avatars, wearables, guides, virtual objects and
              artwork
            </StyledUserDescription>
          </StyledUserContent>
          <Col
            className='text-center'
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xxl={{ span: 6, order: 2 }}
          >
            <StyledAvatar src={Avatar} alt='avatar' />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xxl={6}>
            <StyledBannerImage src={Banner} alt='Banner' />
          </Col>
          <StyledGameContent xxl={6}>
            <StyledGameTitle>UNIFIED GAME</StyledGameTitle>
            <StyledGameSubTitle>ACHIEVEMENTS PROFILES</StyledGameSubTitle>
            <StyledGameDescription>
              Collating experience, levels and rank in a universal, portable,
              immutable, achievements-based blockchain digital identity profile
              for the ultimate in flexing and bragging rights!
            </StyledGameDescription>
          </StyledGameContent>
        </Row>
      </StyledContainer>
      <img
        className='gridBackground'
        src={GridBackground}
        alt='Grid Background'
      />
      <img
        className='unifiedBackground'
        src={UnifiedBackground}
        alt='Unidiled Background'
      />
    </Div>
  );
};
// Styled Container
const Div = styled.div`
  position: relative;
  padding-bottom: 190px;
  z-index: -1;
  @media screen and (max-width: 1200px) {
    padding-bottom: 140px;
  }
  @media screen and (max-width: 654px) {
    padding-bottom: 70px;
  }
  .gridBackground {
    position: absolute;
    bottom: 0;
    z-index: -50;
    width: 100%;
  }
  .unifiedBackground {
    position: absolute;
    bottom: 9%;
    left: 5%;
    width: 92%;
    z-index: -50;
    height: 221px;
    @media screen and (max-width: 1200px) {
      bottom: 4%;
      width: 100%;
      left: 0;
      height: auto;
    }
  }
`;
const StyledContainer = styled(Container)`
  max-width: 94%;
`;
const P = styled.p`
  letter-spacing: 0px;
  display: flex;
  opacity: 1;
  align-items: center;
  margin-bottom: 28px;
  @media (max-width: 1759px) {
    margin-bottom: 20px;
  }
  @media (max-width: 654px) {
    margin-bottom: 6px;
  }
`;

// User Content
const StyledUserContent = styled(Col)`
  padding-top: 70px;
`;
const StyledAvatar = styled.img`
  max-width: 967px;
  max-height: 967px;
  @media screen and (max-width: 1759px) {
    max-width: 100%;
    max-height: 700px;
  }
`;
const StyledUserTitle = styled(P)`
  position: relative;
  font: normal normal bold 77px/60px Whyte;
  color: #e740f0;
  text-transform: uppercase;
  height: 77px;
  @media screen and (max-width: 1759px) {
    font: normal normal bold 57px/40px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal bold 32px/60px Whyte;
    height: 30px;
  }
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
    @media screen and (max-width: 654px) {
      max-width: 20px;
      height: 88px;
      top: -40px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    filter: blur(50px);
    width: 100%;
    max-width: 728px;
    height: 45px;
    @media screen and (max-width: 1759px) {
      max-width: 550px;
    }
    @media screen and (max-width: 654px) {
      max-width: 300px;
      height: 24px;
    }
  }
`;
const StyledSubUserTitle = styled(P)`
  font: normal normal normal 50px/22px Whyte;
  color: #ffffff;
  text-transform: uppercase;
  height: 50px;
  @media screen and (max-width: 1759px) {
    font: normal normal normal 40px/22px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal normal 24px/22px Whyte;
    height: 24px;
  }
`;
const StyledUserDescription = styled(P)`
  font: normal normal bold 20px/28px Whyte;
  color: #d4d4d4;
  @media screen and (max-width: 1759px) {
    font: normal normal bold 16px/28px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal bold 12px/28px Whyte;
  }
`;
// Game Content
const StyledGameContent = styled(Col)`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 120px;
  padding-right: 40px;
  @media screen and (max-width: 1199px) {
    padding-right: 10px;
  }
`;
const StyledBannerImage = styled.img`
  padding-top: 100px;
  padding-left: 0px;
  @media screen and (max-width: 1759px) {
    max-width: 100%;
    max-height: 700px;
  }
`;
const StyledGameTitle = styled(P)`
  font: normal normal bold 77px/60px Whyte;
  color: #6a9df9;
  text-transform: uppercase;
  height: 77px;
  position: relative;
  @media screen and (max-width: 1759px) {
    font: normal normal bold 57px/40px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal bold 32px/60px Whyte;
    height: 30px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 600px;
    height: 34px;
    background: #6294ef 0% 0% no-repeat padding-box;
    filter: blur(39px);
    @media screen and (max-width: 654px) {
      height: 24px;
    }
  }
`;
const StyledGameSubTitle = styled(P)`
  position: relative;
  color: #ffffff;
  text-shadow: 0px 11px 4px #00000029;
  text-transform: uppercase;
  height: 50px;
  font: normal normal normal 50px/60px Whyte;
  @media screen and (max-width: 1759px) {
    font: normal normal normal 40px/22px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal normal 24px/60px Whyte;
    height: 24px;
  }
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
    @media screen and (max-width: 654px) {
      max-width: 20px;
      height: 88px;
      top: -66px;
      right: -8px;
    }
  }
`;
const StyledGameDescription = styled(P)`
  font: normal normal bold 20px/28px Whyte;
  color: #d4d4d4;
  max-width: 650px;
  @media screen and (max-width: 1759px) {
    font: normal normal bold 16px/28px Whyte;
    max-width: 500px;
  }
  @media screen and (max-width: 654px) {
    font: normal normal bold 12px/28px Whyte;
    max-width: 300px;
  }
`;
export default Description;
