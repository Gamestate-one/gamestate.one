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
              Provide individuals with an opportunity to invest in gaming
              projects at an early stage that have the potential to offer huge
              returns after their launch.
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
  min-height: 60px;
  border: 3px solid #ffffff;
  box-shadow: 0px 3px 6px #ffffff;
  border-radius: 16px;
  a {
    color: #e740f0;
    font: normal normal bold 18px/28px Whyte;
    text-decoration: none;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1759px) {
  }
  @media screen and (max-width: 654px) {
    min-width: 140px;
    min-height: 50px;
    a {
      font: normal normal bold 14px/28px Whyte;
    }
  }
  @media screen and (max-width: 427px) {
    min-width: 100px;
    min-height: 40px;
    a {
      font: normal normal bold 12px/28px Whyte;
    }
  }
`;
export default Igos;
