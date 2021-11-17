import styled from "styled-components";
import Banner from "../../assets/img/MarketPlace/banner.png";

const MarketPlace = () => {
  return (
    <Div>
      <img src={Banner} alt="banner" />
      <div>
        <StyledTitle>NFT</StyledTitle>
        <StyledSubTitle>MARKETPLACE</StyledSubTitle>
        <Description>
          The assets created by gamers can be sold on NFT marrketplace to earn
          royalties.
        </Description>
      </div>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;
  opacity: 1;
  background-color: #0c0c0c;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding-bottom: 138px;
  padding-top: 102px;
  img {
    max-width: 100%;
  }
  @media (max-width: 564px) {
    padding-bottom: 30px;
    padding-top: 40px;
  }
`;
const Title = styled.span`
  font: normal normal bold 50px/60px Whyte;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  @media (max-width: 768px) {
    font: normal normal bold 40px/40px Whyte;
  }
  @media (max-width: 564px) {
    font: normal normal bold 32px/32px Whyte;
  }
`;
const StyledTitle = styled(Title)`
  color: #6a9df9;
  padding-right: 14px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #4e7fd6 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 278px;
    height: 33px;
  }
`;
const StyledSubTitle = styled(Title)`
  color: #e740f0;
  /* text-shadow: 0px 3px 6px #9e08a6, 0px 0px 98px #e740f0c4; */
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    right: 20px;
    max-width: 278px;
    height: 33px;
  }
`;
const Description = styled.p`
  margin: 38px auto 0 auto;
  text-align: center;
  font: normal normal normal 20px/28px Whyte;
  letter-spacing: 0px;
  color: #d4d4d4;
  opacity: 1;
  max-width: 80%;
  @media screen and (max-width: 564px) {
    font: normal normal normal 16px/28px Whyte;
    margin-top: 20px;
  }
`;
export default MarketPlace;
