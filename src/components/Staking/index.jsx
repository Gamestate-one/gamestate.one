import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import StakingNftImage from "../../assets/img/Staking/stakingNft.png"
import StakingCupImage from "../../assets/img/Staking/stakingCup.png"
import StakingGrid from "../../assets/img/Staking/stakingGrid.png"
const StyledContainerFluid = styled.div`
  background-image: url(${StakingGrid});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 315px;
`
const StyledStaking = styled(Container)`
  min-height: 1247px;
  .mt-156 {
    padding-top: 156px;
  }
  .mt-350 {
    margin-top: -350px;
  }
`
const StyledStakingTitleLeft = styled.p`
  font-size: 77px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0;
  line-height: 60px;
  color: #e740f0;
  text-shadow: 0px 3px 6px #9e08a6, 0px 0px 98px #e740f0c4;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  margin-top: 135px;
  margin-left: 4px;
  &::before {
    position: absolute;
    content: "";
    top: -60px;
    left: -16px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    top: -0;
    left: -16px;
    width: 50%;
    height: 40px;
    background: #e740f0 0% 0% no-repeat padding-box;
    filter: blur(50px);
    z-index: -1;
  }
`
const StyledImgNft = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${(props) => props.height}px;
`
const StyledTitleLeft = styled.p`
  font-size: 50px;
  font-weight: normal;
  font-style: normal;
  color: #fff;
  letter-spacing: 0;
  line-height: 60px;
  text-transform: uppercase;
  margin-left: 74px;
  margin-top: 30px;
`
const StyledDescLeft = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #d4d4d4;
  margin-left: 100px;
  display: inline-block;
  max-width: 420px;
`

const StyledStakingTitleRight = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 77px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0;
  line-height: 80px;
  color: #6a9df9;
  text-shadow: 0px 3px 6px #163f8c, 0px 0px 98px #163f8c;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  margin-top: 135px;
  &::after {
    position: absolute;
    content: "";
    top: -14px;
    right: -16px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  }
  & span {
    position: relative;
  }
  & span::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    background: #6294ef 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(39px);
    z-index: -1;
  }
  & span:nth-child(1)::before {
    width: 66%;
  }
  & span:nth-child(2)::before {
    width: 35%;
    top: 10px;
  }
`
const StyledDescRight = styled.span`
  display: block;
  text-align: right;
  float: right;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #d4d4d4;
  margin-left: 100px;
  width: 520px;
  margin-right: -16px;
  margin-top: 26px;
`

const Staking = () => {
  return (
    <>
      <StyledStaking>
        <Row className="mt-156">
          <Col lg={6}>
            <StyledStakingTitleLeft>STAKING &</StyledStakingTitleLeft>
            <StyledTitleLeft>LOTTERY REWARDS</StyledTitleLeft>
            <StyledDescLeft>
              VIP card gives gamers ticket for staking and a chance to spin the
              wheel and win rewards.
            </StyledDescLeft>
          </Col>
          <Col lg={6}>
            <StyledImgNft image={StakingNftImage} height={1186} />
          </Col>
        </Row>
        <Row className="mt-350 grid-image">
          <Col lg={6}>
            <StyledImgNft image={StakingCupImage} height={780} />
          </Col>
          <Col>
            <StyledStakingTitleRight>
              <span>TOURNAMENT</span>
              <span>PRIZES</span>
            </StyledStakingTitleRight>
            <StyledDescRight>
              Gamers can participate in tournaments on Gamestate and win prizes.
            </StyledDescRight>
          </Col>
        </Row>
      </StyledStaking>
      <StyledContainerFluid />
    </>
  )
}

export default Staking
