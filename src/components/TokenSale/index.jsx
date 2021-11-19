import styled from "styled-components";
import CoinBackground from "../../assets/img/TokenSale/coinbackground.png";
import UserGenerated from "../../assets/img/TokenSale/User-generated.png";
import HiveLogo from "../../assets/img/TokenSale/hivelogo.png";
import PolygonLogo from "../../assets/img/TokenSale/polygonlogo.png";
import { Container } from "react-bootstrap";
import Countdown, { zeroPad } from "react-countdown";
const Rendered = ({ days, hours, minutes, seconds }) => (
  <div className='countdown'>
    <div className='countdown__item'>
      <span className='countdown__time'>{zeroPad(days)}</span>
      <span className='countdown__label'>Days</span>
    </div>
    <div className='countdown__item'>
      <span className='countdown__time'>{zeroPad(hours)}</span>
      <span className='countdown__label'>Hours</span>
    </div>
    <div className='countdown__item'>
      <span className='countdown__time'>{zeroPad(minutes)}</span>
      <span className='countdown__label'>Minutes</span>
    </div>
    <div className='countdown__item'>
      <span className='countdown__time'>{zeroPad(seconds)}</span>
      <span className='countdown__label'>Seconds</span>
    </div>
  </div>
);
const TokenSale = () => {
  return (
    <Div>
      <StyledTokenSales>
        <div>
          <StyledTitle>Token</StyledTitle>
          <StyledSubTitle>Sale</StyledSubTitle>
        </div>
        <StyledBar>
          <HiveProgessBar fluid>
            <Bar>
              <img src={HiveLogo} alt='Hive Logo' />
              <span className='title'>HIVE-ENGINE IDO</span>
              {/* <div className="progessBar">
              <div className="progessBar-fill">
                <div className="progessBar-fill-inner"></div>
              </div>
            </div> */}
              <Countdown
                date={new Date("Nov 25 2021").getTime()}
                renderer={Rendered}
              />
            </Bar>
          </HiveProgessBar>
          <PolygonProgessBar fluid>
            <Bar>
              <img src={PolygonLogo} alt='Polygon Logo' />
              <span className='title'>Polygon IDO</span>
              {/* <div className="progessBar">
              <div className="progessBar-fill">
                <div className="progessBar-fill-inner"></div>
              </div>
            </div> */}
              <Countdown
                date={new Date("Dec 7 2021").getTime()}
                renderer={Rendered}
              />
            </Bar>
          </PolygonProgessBar>
        </StyledBar>
        <StyledBarMobile>
          <HiveProgessBarMobile fluid>
            <BarMobile>
              <img src={HiveLogo} alt='Hive Logo' />
              <span className='title'>HIVE-ENGINE IDO</span>
              <div className='progessBar'>
                <div className='progessBar-fill'>
                  <div className='progessBar-fill-inner'></div>
                </div>
              </div>
            </BarMobile>
          </HiveProgessBarMobile>
          <PolygonProgessBarMobile fluid>
            <BarMobile>
              <img src={PolygonLogo} alt='Polygon Logo' />
              <span className='title'>Polygon IDO</span>
              <div className='progessBar'>
                <div className='progessBar-fill'>
                  <div className='progessBar-fill-inner'></div>
                </div>
              </div>
            </BarMobile>
          </PolygonProgessBarMobile>
        </StyledBarMobile>
        <StyledButton>
          <a href='/#' onClick={(e) => e.preventDefault()}>
            Read more
          </a>
        </StyledButton>
        <StyledUserGenerated src={UserGenerated} alt='User' />
      </StyledTokenSales>
    </Div>
  );
};

const Div = styled.div`
  background: url(${CoinBackground}) no-repeat;
  background-position: right center;
`;
const StyledTokenSales = styled(Container)`
  position: relative;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 220px;
  @media screen and (max-width: 991px) {
    padding-top: 42px;
    padding-bottom: 160px;
  }
`;
const Title = styled.span`
  font: normal normal bold 77px/60px Whyte;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  @media screen and (max-width: 991px) {
    font: normal normal bold 46px/60px Whyte;
  }
  @media (max-width: 768px) {
    font: normal normal bold 32px/60px Whyte;
  }
`;
const StyledTitle = styled(Title)`
  color: #6a9df9;
  padding-right: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #4e7fd6 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    max-width: 278px;
    height: 33px;
    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`;
const StyledSubTitle = styled(Title)`
  color: #e740f0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    max-width: 278px;
    height: 33px;
    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`;
// const StyledTokenImage = styled.img`
//   position: absolute;
//   top: 134px;
//   right: -324px;
//   max-width: 664px;
//   max-height: 566px;
//   z-index: -10;
//   @media screen and (max-width: 991px) {
//     max-height: 313px;
//     max-width: 368px;
//   }
// `;
const StyledUserGenerated = styled.img`
  position: absolute;
  display: block;
  left: -60px;
  bottom: 0;
  width: 106%;
  max-height: 211px;
  animation: linear infinite;
  -webkit-animation: linear infinite;
  -moz-animation: linear infinite;
  -o-animation: linear infinite;
  animation-name: run;
  animation-duration: 40s;
  @keyframes run {
    0% {
      left: -60px;
    }
    50% {
      left: 50%;
    }
    100% {
      left: -60px;
    }
  }
`;

const StyledBar = styled.div`
  margin-top: 134px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const ProgessBar = styled(Container)`
  background: #262626 0% 0% no-repeat padding-box;
  margin: 0 auto;
  border-radius: 13px;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  max-width: 60%;
  /* height: 122px; */
  min-height: 157px;
  @media screen and (max-width: 1600px) {
    max-width: 80%;
  }
  @media screen and (max-width: 1400px) {
    max-width: unset;
  }
`;
const HiveProgessBar = styled(ProgessBar)`
  margin-bottom: 70px;
  display: flex;
  .progessBar-fill-inner {
    background-color: #ff0000;
    width: 50%;
  }
`;
const PolygonProgessBar = styled(ProgessBar)`
  display: flex;
  .progessBar-fill-inner {
    background-color: #1969ff;
    width: 35%;
  }
`;
const HiveProgessBarMobile = styled(ProgessBar)`
  margin-bottom: 70px;
  display: flex;
  .progessBar-fill-inner {
    background-color: #ff0000;
    width: 50%;
  }
`;
const PolygonProgessBarMobile = styled(ProgessBar)`
  display: flex;
  .progessBar-fill-inner {
    background-color: #1969ff;
    width: 35%;
  }
`;
const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  img {
    margin-left: 30px;
    margin-right: 24px;
    @media (max-width: 1199px) {
      width: 36px;
      margin-left: 20px;
      margin-right: 16px;
    }
  }
  .title {
    font: normal normal normal 24px/32px Whyte;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    margin-right: 22px;
    min-width: 212px;
    @media (max-width: 1199px) {
      font: normal normal normal 20px/28px Whyte;
      min-width: 180px;
    }
  }
  .progessBar {
    background-color: #13151f;
    opacity: 1;
    height: 81px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62%;
    .progessBar-fill {
      background-color: #000000;
      width: 90%;
      height: 10px;
      border-radius: 13px;
      .progessBar-fill-inner {
        height: 10px;
        border-radius: 13px;
      }
    }
  }
  .countdown {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding: 19px;
    margin-left: -10px;

    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      /* width: calc(25% - 10px); */
      max-width: 123px;
      margin-left: 30px;
      background: #13151f 0% 0% no-repeat padding-box;
      border-radius: 16px;
      padding: 25px 40px;
    }
    &__time {
      font: normal normal bold 42px/50px Whyte;
      letter-spacing: 0px;
      color: #ffffff;
    }
    &__label {
      font: normal normal normal 17px/20px Whyte;
      letter-spacing: 0px;
      color: #d9d9d9;
    }
  }
`;
const BarMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: left;
  img {
    position: absolute;
    top: -30px;
    margin: auto;
  }
  .title {
    font: normal normal normal 20px/24px Whyte;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    margin: 32px 0;
  }
  .progessBar {
    background-color: #13151f;
    opacity: 1;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 13px;
    .progessBar-fill {
      background-color: #000000;
      width: 100%;
      height: 10px;
      border-radius: 13px;
      .progessBar-fill-inner {
        height: 10px;
        border-radius: 13px;
      }
    }
  }
`;
const StyledBarMobile = styled.div`
  margin-top: 117px;
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;
const StyledButton = styled.button`
  min-width: 160px;
  margin-top: 60px;
  background-color: transparent;
  min-height: 60px;
  border: 3px solid #ffffff;
  box-shadow: 0px 0px 6px 4px #ffffff;
  border-radius: 16px;
  a {
    color: #ffffff;
    text-shadow: 2px 4px 6px #ffffffbe;
    font: normal normal medium 25px/30px Whyte;
    text-decoration: none;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1759px) {
  }
  @media screen and (max-width: 654px) {
    min-width: 140px;
    min-height: 50px;
    a {
      font: normal normal medium 14px/28px Whyte;
    }
  }
  @media screen and (max-width: 427px) {
    min-width: 100px;
    min-height: 40px;
    a {
      font: normal normal medium 12px/28px Whyte;
    }
  }
`;
export default TokenSale;
