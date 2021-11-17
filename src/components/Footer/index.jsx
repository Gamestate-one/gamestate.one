import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import logo from "../../assets/img/Logo/logo.svg"
const StyledBlockFooter = styled(Container)`
  max-width: 94%;
  @media screen and (max-width: 991px) {
    & img {
      max-width: 348px;
      height: 86px;
    }
  }
  @media screen and (max-width: 768px) {
    & img {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & span {
      text-align: center;
      margin-bottom: 26px;
      font-size: 12px;
      line-height: 16px;
    }
  }
`
const StyledFooter = styled(Row)`
  min-height: 110px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLogoFooter = styled.img`
  max-width: 412px;
  height: 103px;
  width: 100%;
`
const StyledCopyrightFooter = styled.span`
  font: normal normal 700 16px/19px Whyte;
  display: block;
  text-align: right;
  color: #ffffff;
`
const Footer = () => {
  return (
    <StyledBlockFooter>
      <StyledFooter>
        <Col md={4}>
          <StyledLogoFooter src={logo} />
        </Col>
        <Col md={8}>
          <StyledCopyrightFooter>
            © Copyright Game state Ltd 2021, All Rights Reserved
          </StyledCopyrightFooter>
        </Col>
      </StyledFooter>
    </StyledBlockFooter>
  )
}

export default Footer
