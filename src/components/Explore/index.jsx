import { Container } from "react-bootstrap";
import styled from "styled-components";
import Background from "../../assets/img/Explore/background.png";
import HeroBanner from "../../assets/img/Explore/Giff_Chip.gif";

const Explore = () => {
  return (
    <Div>
      <StyledContainer>
        <StyledHeroImage src={HeroBanner} alt='Hero' />
        <StyledDescription>
          <SpanPurple>Quantum Accelerator</SpanPurple> - Experience enhancing
          NFTs, reward holders with airdrop opportunities, staking multipliers
          and early bird access!
        </StyledDescription>
        <StyledButton>
          <StyledSpan>BUY</StyledSpan>
          <StyledSubSpan>NOW</StyledSubSpan>
        </StyledButton>
      </StyledContainer>
    </Div>
  );
};

const Div = styled.div`
  /* background-image: url(${Background}); */
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledContainer = styled(Container)`
  opacity: 1;
  text-align: center;
  opacity: 1;
  padding-bottom: 110px;
  position: relative;
  @media (max-width: 767px) {
    padding-bottom: 51px;
  }
`;
const StyledHeroImage = styled.img`
  max-width: 783px;
  margin-top: 80px;
  margin-bottom: 60px;
  width: 100%;
  height: auto;
`;
const StyledDescription = styled.div`
  font-weight: bold;
  font-style: normal;
  font-size: 40px;
  color: #ffffff;
  line-height: 50px;
  padding-bottom: 70px;
  margin: 0 auto;
  max-width: 1420px;
  text-transform: uppercase;
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    font: normal normal bold 20px/32px Whyte;
  }
  @media screen and (max-width: 767px) {
    font: normal normal bold 16px/28px Whyte;
    padding-bottom: 40px;
  }
`;
const StyledButton = styled.button`
  position: relative;
  width: 100%;
  max-width: 292px;
  height: 76px;
  background-color: #000000;
  border-radius: 4px;
  opacity: 0.9;
  z-index: 1;
  color: #ffffff;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #e740f0, #8f65be, #254492);
  @media screen and (max-width: 576px) {
    max-width: 170px;
    height: 47px;
  }
  &::before {
    content: "";
    position: absolute;
    background: transparent
      linear-gradient(104deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
      no-repeat;
    width: 300px;
    height: 80px;
    top: -8px;
    left: -8px;
    z-index: -1;
    filter: blur(15px);
    @media screen and (max-width: 576px) {
      width: 176px;
      height: 49px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    background: #000000;
    width: 282px;
    height: 66px;
    top: 0;
    left: 0px;
    z-index: -1;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    @media screen and (max-width: 576px) {
      width: 160px;
      height: 37px;
    }
  }
`;
const Span = styled.span`
  font: normal normal normal 23px/28px Whyte;
  letter-spacing: 0px;
  opacity: 1;
  line-height: 66px;
  @media screen and (max-width: 576px) {
    font: normal normal normal 14px/17px Whyte;
    line-height: 37px;
  }
`;
const StyledSpan = styled(Span)`
  padding-right: 13px;
  color: #2f85ff;
  text-shadow: 0px 3px 6px #7fb0f5, 0px 3px 6px #2f85ff;
`;
const StyledSubSpan = styled(Span)`
  text-shadow: 0px 3px 6px #da87de, 0px 3px 6px #e740f0;
  color: #e740f0;
`;
const SpanPurple = styled.span`
  color: #e740f0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    /* max-width: 278px; */
    height: 33px;
    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`;
export default Explore;
