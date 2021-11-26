import styled from 'styled-components';
import CoinBackground from 'app/assets/img/TokenSale/coinbackground.png';
import TokenBackground from 'app/assets/img/TokenSale/token.png';
import HiveLogo from 'app/assets/img/TokenSale/hivelogo.png';
import PolygonLogo from 'app/assets/img/TokenSale/polygonlogo.png';
import { Container } from 'react-bootstrap';
import Countdown, { zeroPad } from 'react-countdown';

export interface CountdownProps {
  days?: any;
  hours?: any;
  minutes?: any;
  seconds?: any;
}
const Rendered = ({ days, hours, minutes, seconds }: CountdownProps) => (
  <div className="countdown">
    <div className="countdown__group">
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(days)}</span>
        <span className="countdown__label">Days</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(hours)}</span>
        <span className="countdown__label">Hours</span>
      </div>
    </div>
    <div className="countdown__group">
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(minutes)}</span>
        <span className="countdown__label">Minutes</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(seconds)}</span>
        <span className="countdown__label">Seconds</span>
      </div>
    </div>
  </div>
);
const TokenSale = () => {
  return (
    <Div>
      <StyledTokenSales>
        <div className="title-main">
          <StyledTitle>Token</StyledTitle>
          <StyledSubTitle>Sale</StyledSubTitle>
        </div>
        <StyledBar>
          <HiveProgessBar fluid>
            <Bar>
              <img src={HiveLogo} alt="Hive Logo" />
              <span className="title">HIVE-ENGINE IDO</span>
              {/* <Countdown
                date={new Date('Nov 26 2021 10:00:00 UTC').getTime()}
                renderer={Rendered}
              /> */}
              <div className="progessBar">
                <div className="progessBar-fill">
                  <div className="progessBar-fill-inner"></div>
                </div>
              </div>
            </Bar>
          </HiveProgessBar>
          <PolygonProgessBar fluid>
            <Bar>
              <img src={PolygonLogo} alt="Polygon Logo" />
              <span className="title">Polygon IDO</span>
              <Countdown
                date={new Date('Dec 7 2021 02:00:00 UTC').getTime()}
                renderer={Rendered}
              />
              {/* <div className="progessBar">
                <div className="progessBar-fill">
                  <div className="progessBar-fill-inner"></div>
                </div>
              </div> */}
            </Bar>
          </PolygonProgessBar>
        </StyledBar>
        <StyledButton>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://getstarted.gamestate.one/"
          >
            Read more
          </a>
        </StyledButton>
        <StyledTokenImage src={TokenBackground} alt="Token Background" />
      </StyledTokenSales>
    </Div>
  );
};

const Div = styled.div`
  /* background: url(${CoinBackground}) no-repeat; */
  background-position: top center;
  background-size: cover;
`;
const StyledTokenSales = styled(Container)`
  position: relative;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 100px;
  & .title-main {
    margin-top: 118px;
  }
  @media screen and (max-width: 991px) {
    padding-top: 42px;
    & .title-main {
      margin-top: 10px;
      margin-bottom: 107px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 94%;
  }
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 77px;
  line-height: 60px;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  z-index: 999;
  @media screen and (max-width: 991px) {
    font-size: 46px;
    line-height: 60px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 60px;
  }
`;
const StyledTitle = styled(Title)`
  color: #6a9df9;
  padding-right: 20px;
  position: relative;
  text-shadow: 0 0 98px #163f8c, 0 3px 6px #163f8c;
  &::before {
    content: '';
    position: absolute;
    background: #4e7fd6 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
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
  text-shadow: 0 0 98px rgba(231, 64, 240, 0.77), 0 3px 6px #9e08a6;
  &::before {
    content: '';
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    height: 33px;

    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`;
const StyledTokenImage = styled.img`
  position: absolute;
  top: 150px;
  right: -200px;
  max-width: 664px;
  max-height: 566px;
  z-index: -10;
`;

const StyledBar = styled.div`
  margin-top: 63px;
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
  @media screen and (max-width: 1700px) {
    max-width: 80%;
  }
  @media screen and (max-width: 1400px) {
    max-width: unset;
  }
`;
const HiveProgessBar = styled(ProgessBar)`
  margin-bottom: 60px;
  display: flex;
  .progessBar-fill-inner {
    background-color: #ff0000;
    width: 15%;
  }
`;
const PolygonProgessBar = styled(ProgessBar)`
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
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    margin-right: 22px;
    min-width: 212px;
    @media (max-width: 1199px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      min-width: 180px;
    }
  }
  .countdown {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding: 19px;
    margin-left: -10px;
    &__group {
      display: flex;
    }
    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      max-width: 123px;
      margin-left: 30px;
      background: #13151f 0% 0% no-repeat padding-box;
      border-radius: 16px;
      padding: 25px 40px;
    }
    &__time {
      font-size: 42px;
      line-height: 50px;
      font-weight: bold;
      color: #ffffff;
    }
    &__label {
      font-size: 17px;
      line-height: 20px;
      font-weight: bold;
      color: #d9d9d9;
    }
    @media screen and (max-width: 991px) {
      flex-direction: column;
      margin-left: 0;
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
    width: 68%;
    @media screen and (max-width: 991px) {
      margin-bottom: 24px;
      margin-top: 12px;
      width: 80%;
    }
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

  @media screen and (max-width: 991px) {
    flex-direction: column;
    & img {
      margin-top: 27px;
      margin-bottom: 24px;
    }
    & .title {
      margin-right: 0;
      text-align: center;
    }
    & .countdown {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      &__group {
        width: 100%;
        justify-content: center;
      }
      &__item {
        margin: 17px 15px;
      }
    }
  }
`;

const StyledButton = styled.button`
  min-width: 160px;
  margin-top: 60px;
  background-color: transparent;
  border: 3px solid #ffffff;
  box-shadow: 0px 0px 6px 4px #ffffff;
  border-radius: 48px;
  height: 50px;
  text-shadow: 2px 4px 6px #ffffffbe;
  text-decoration: none;
  font-size: 18px;
  line-height: 42px;
  font-weight: 500;
  text-transform: uppercase;
  a {
    color: #ffffff;
    text-decoration: none;
  }
  @media screen and (max-width: 654px) {
    min-width: 140px;
    height: 40px;
    font-size: 14px;
    line-height: 34px;
    font-weight: 500;
  }
  @media screen and (max-width: 427px) {
    min-width: 100px;
    height: 40px;
    font-size: 12px;
    line-height: 34px;
    font-weight: 500;
  }
`;
export default TokenSale;
