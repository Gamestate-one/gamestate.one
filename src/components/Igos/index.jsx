import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import BannerImage from "../../assets/img/Igos/banner.png";

const Igos = () => {
  return (
    <Div>
      <StyledContainer>
        <StyledRow>
          <StyledContent
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
            xl={{ span: 6, order: 1 }}
          >
            <StyledTitle>INITIAL GAME OFFERINGS (IGO's)</StyledTitle>
            <StyledDescription>
              Indie developers can raise funds for games development and
              bootstrap diverse communities of gamers and fans who in turn get
              an early opportunity to become part of games in the early startup
              phase.
            </StyledDescription>
            <StyledButton>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://medium.com/@gamestate/blurt-enginedrop-attestation-gamestate-megaverse-bbc48fd530f8'
              >
                Read more
              </a>
            </StyledButton>
          </StyledContent>
          <Col
            className='pe-0'
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xl={{ span: 6, order: 2 }}
          >
            <Banner src={BannerImage} alt='banner' />
          </Col>
        </StyledRow>
      </StyledContainer>
    </Div>
  );
};

const Div = styled.div`
  background: transparent
    linear-gradient(111deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
    no-repeat padding-box;
`;
const StyledContainer = styled(Container)`
  opacity: 1;
  padding-top: 80px;
  padding-bottom: 108px;
  max-width: 94%;
  @media screen and (max-width: 576px) {
    padding-top: 70px;
    padding-bottom: 60px;
  }
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
`;
const StyledRow = styled(Row)``;
const StyledContent = styled(Col)`
  padding-top: 50px;
  @media screen and (max-width: 1199px) {
    padding-top: 0px;
    text-align: center;
  }
  .progessBar {
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 1;
    height: 96px;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83%;
    margin-top: 90px;
    @media screen and (max-width: 1199px) {
      margin: 60px auto 0 auto;
    }
    @media screen and (max-width: 768px) {
      margin: 40px auto 0 auto;
    }
    .progessBar-fill {
      background-color: #fff;
      width: 90%;
      height: 28px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      .progessBar-fill-inner {
        height: 14px;
        margin-left: 10px;
        border-radius: 8px;
        box-shadow: 8px 0px 12px rgba(255, 0, 0, 0.6);
        background-color: #ff0000;
        width: 50%;
      }
    }
  }
`;
const Banner = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1199px) {
    padding-top: 48px;
  }
`;
const StyledTitle = styled(P)`
  position: relative;
  font: normal normal bold 50px/60px Whyte;
  color: #ffffff;
  height: 77px;
  @media screen and (max-width: 1759px) {
    font: normal normal bold 40px/40px Whyte;
  }
  @media screen and (max-width: 1513px) {
    font: normal normal bold 36px/40px Whyte;
  }
  @media screen and (max-width: 1199px) {
    justify-content: center;
  }
  @media screen and (max-width: 654px) {
    font: normal normal bold 32px/38px Whyte;
    height: auto;
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
`;
const StyledDescription = styled(P)`
  font: normal normal normal 20px/27px Whyte;
  color: #d4d4d4;
  padding-bottom: 20px;
  @media screen and (max-width: 1759px) {
    font: normal normal normal 18px/19px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal normal 16px/19px Whyte;
  }
`;
const StyledButton = styled.button`
  min-width: 160px;
  background-color: transparent;
  border: 3px solid #ffffff;
  box-shadow: 0px 0px 6px 4px #ffffff;
  border-radius: 48px;
  a {
    color: #ffffff;
    text-shadow: 2px 4px 6px #ffffffbe;
    font: normal normal normal 18px/60px Whyte;
    text-decoration: none;
    text-transform: uppercase;
  }
  @media screen and (max-width: 654px) {
    min-width: 140px;
    a {
      font: normal normal normal 14px/50px Whyte;
    }
  }
  @media screen and (max-width: 427px) {
    min-width: 100px;
    a {
      font: normal normal normal 12px/40px Whyte;
    }
  }
`;
export default Igos;
