import styled from "styled-components";
import TokenImage from "../../assets/img/TokenSale/token.png";
import UserGenerated from "../../assets/img/TokenSale/User-generated.png";
import HiveLogo from "../../assets/img/TokenSale/hivelogo.png";
import PolygonLogo from "../../assets/img/TokenSale/polygonlogo.png";
import { Container, Row, Col } from "react-bootstrap";

const TokenSale = () => {
  return (
    <StyledTokenSales>
      <div>
        <StyledTitle blue={true}>Token</StyledTitle>
        <StyledSubTitle>Sale</StyledSubTitle>
      </div>
      <StyledBar>
        <HiveProgessBar fluid>
          <StyledRow>
            <StyledCol sm={1}>
              <img src={HiveLogo} alt='Hive Logo' />
            </StyledCol>
            <StyledCol sm={3}>
              <span className='Title'>HIVE-ENGINE IDO</span>
            </StyledCol>
            <StyledCol>
              <div className='progessBar'>
                <div className='progessBar-fill'>
                  <div className='progessBar-fill-inner'></div>
                </div>
              </div>
            </StyledCol>
          </StyledRow>
        </HiveProgessBar>
        <PolygonProgessBar fluid>
          <StyledRow>
            <StyledCol sm={1}>
              <img src={PolygonLogo} alt='Polygon Logo' />
            </StyledCol>
            <StyledCol sm={3}>
              <span className='Title'>Polygon IDO</span>
            </StyledCol>
            <StyledCol>
              <div className='progessBar'>
                <div className='progessBar-fill'>
                  <div className='progessBar-fill-inner'></div>
                </div>
              </div>
            </StyledCol>
          </StyledRow>
        </PolygonProgessBar>
      </StyledBar>
      <StyledTokenImage src={TokenImage} alt='Token' />
      <StyledUserGenerated src={UserGenerated} alt='User' />
    </StyledTokenSales>
  );
};

const StyledTokenSales = styled.div`
  position: relative;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 470px;
`;
const Title = styled.span`
  font: normal normal bold 77px/60px Whyte;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
`;
const StyledTitle = styled(Title)`
  color: #6a9df9;
  text-shadow: 0px 3px 6px #163f8c, 0px 0px 98px #163f8c;
  padding-right: 48px;
`;
const StyledSubTitle = styled(Title)`
  color: #e740f0;
  text-shadow: 0px 3px 6px #9e08a6, 0px 0px 98px #e740f0c4;
`;
const StyledTokenImage = styled.img`
  position: absolute;
  top: 134px;
  right: -320px;
  max-width: 664px;
  max-height: 566px;
`;
const StyledUserGenerated = styled.img`
  position: absolute;
  left: -60px;
  bottom: 0;
  width: 90%;
`;
const StyledBar = styled.div`
  margin-top: 134px;
`;
const ProgessBar = styled(Container)`
  background: #262626 0% 0% no-repeat padding-box;
  margin: 0 auto;
  border-radius: 13px;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  max-width: 65%;
  height: 122px;
  img {
    padding-left: 30px;
  }
  .Title {
    font: normal normal normal 24px/32px Whyte;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    padding-right: 32px;
    min-width: 202px;
  }
  .progessBar {
    background-color: #13151f;
    opacity: 1;
    height: 81px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
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
const StyledRow = styled(Row)`
  align-items: center;
  width: 100%;
  text-align: left;
`;
const StyledCol = styled(Col)`
  padding: 0;
`;
export default TokenSale;
