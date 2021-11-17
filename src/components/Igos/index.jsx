import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import BannerImage from "../../assets/img/Igos/banner.jpg";

const Igos = () => {
  return (
    <Div>
      <Title>Initial Game Offerings (IGO's)</Title>
      <StyledRow>
        <Col
          className="d-flex align-items-center"
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
          xl={{ span: 5, order: 1 }}
        >
          <Span>
            Provide individuals with an opportunity to invest in gaming projects
            at an early stage that have the potential to offer huge returns
            after their launch.
          </Span>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          xl={{ span: 7, order: 2 }}
        >
          <Banner src={BannerImage} alt="banner" />
        </Col>
      </StyledRow>
    </Div>
  );
};

const Div = styled(Container)`
  opacity: 1;
  padding-top: 92px;
  padding-bottom: 64px;
  max-width: 94%;
  @media screen and (max-width: 576px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;
const Title = styled.span`
  font: normal normal bold 50px/60px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  @media screen and (max-width: 991px) {
    font: normal normal bold 40px/60px Whyte;
  }
  @media screen and (max-width: 768px) {
    font: normal normal bold 30px/60px Whyte;
  }
  @media screen and (max-width: 576px) {
    font: normal normal bold 20px/60px Whyte;
  }
`;
const StyledRow = styled(Row)`
  margin-top: 88px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
const Banner = styled.img`
  width: 100%;
  height: 100%;
`;
const Span = styled.span`
  font: normal normal bold 20px/32px Whyte;
  color: #ffffff;
  @media screen and (max-width: 1199px) {
    text-align: center;
    max-width: 90%;
    margin: 20px auto;
  }
`;
export default Igos;
