import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Background from 'app/assets/img/Explore/background.png';
// import HeroBanner from "app/assets/img/Explore/Giff_Chip.gif";
import ChipEffect from 'app/assets/videos/Chip_Effect.mp4';
import { useState } from 'react';

const Explore = () => {
  const [text, setText] = useState('BUY');
  const [textsd, setTextsd] = useState('NOW');
  return (
    <Div>
      <StyledContainer>
        <StyledHeroVideo autoPlay loop muted playsInline>
          <source src={ChipEffect} type="video/mp4" />
        </StyledHeroVideo>
        <StyledDescription>
          <SpanPurple>Quantum Accelerator</SpanPurple> - Experience enhancing
          NFTs, reward holders with airdrop opportunities, staking multipliers
          and early bird access!
        </StyledDescription>
        <StyledButton
          onMouseEnter={() => {
            setText('COMING');
            setTextsd('SOON');
          }}
          onMouseLeave={() => {
            setText('BUY');
            setTextsd('NOW');
          }}
        >
          <StyledSpan>{text}</StyledSpan>
          <StyledSubSpan>{textsd}</StyledSubSpan>
        </StyledButton>
      </StyledContainer>
    </Div>
  );
};

const Div = styled.div`
  /* background-image: url(${Background}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #05080a;
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
const StyledHeroVideo = styled.video`
  /* max-width: 783px; */
  /* margin-top: 80px; */
  margin-bottom: 40px;
  width: 100%;
  max-height: 800px;
`;
const StyledDescription = styled.div`
  font-weight: bold;
  font-size: 46px;
  color: #ffffff;
  line-height: 1.2;
  padding-bottom: 70px;
  margin: 0 auto;
  max-width: 1420px;
  text-transform: uppercase;
  z-index: 999;
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    font-size: 20px;
    line-height: 32px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 28px;
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
    content: '';
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
    content: '';
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
  font-size: 23px;
  font-weight: 500;
  line-height: 66px;
  opacity: 1;
  @media screen and (max-width: 576px) {
    font-size: 14px;
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
  z-index: 99;
  &::before {
    content: '';
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    height: 28px;
    top: 50%;
    transform: translateY(-50%);
    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`;
export default Explore;
