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
  background-color: #141414;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding-bottom: 138px;
`;
const Title = styled.span`
  font: normal normal bold 50px/60px Whyte;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
`;
const StyledTitle = styled(Title)`
  color: #6a9df9;
  /* text-shadow: 0px 3px 6px #163f8c, 0px 0px 98px #163f8c; */
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
  margin-top: 38px;
  margin-bottom: 0;
  text-align: center;
  font: normal normal normal 20px/28px Whyte;
  letter-spacing: 0px;
  color: #d4d4d4;
  opacity: 1;
`;
export default MarketPlace;
