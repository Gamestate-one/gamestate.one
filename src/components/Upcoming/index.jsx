import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import BigImage from "../../assets/img/Upcoming/image1.png";
import SideImage1 from "../../assets/img/Upcoming/image2.png";
import SideImage2 from "../../assets/img/Upcoming/image3.png";

const Upcoming = () => {
  return (
    <Div>
      <Title>Upcoming IGOS</Title>
      <StyledRow>
        <BigBanner lg={8}>
          <img src={BigImage} alt='BigImage' />
        </BigBanner>
        <Col lg={4}>
          <Row>
            <SideBanner src={SideImage1} alt='SideImage1' />
          </Row>
          <Row>
            <SideBanner2 src={SideImage2} alt='SideImage2' />
          </Row>
        </Col>
      </StyledRow>
    </Div>
  );
};

const Div = styled.div`
  background: transparent
    linear-gradient(120deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
  padding-top: 92px;
  padding-bottom: 64px;
`;
const Title = styled.span`
  font: normal normal bold 50px/60px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  margin-left: 70px;
`;
const BigBanner = styled(Col)`
  margin-left: -50px;
  /* margin-right: 30px; */
  img {
    width: 100%;
    height: 100%;
    max-width: 1319px;
    max-height: 954px;
  }
`;
const SideBanner = styled.img`
  max-width: 617px;
  height: 446px;
`;
const SideBanner2 = styled(SideBanner)`
  margin-top: 48px;
`;
const StyledRow = styled(Row)`
  margin-top: 88px;
`;
export default Upcoming;
