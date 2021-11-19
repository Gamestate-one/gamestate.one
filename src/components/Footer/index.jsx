import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import logo from "../../assets/img/Logo/logo.svg"
const StyledBlockFooter = styled(Container)`
  max-width: 94%;
  /* max-width: 1820px; */
  @media screen and (max-width: 991px) {
    & img {
      max-width: 264px;
      height: 86px;
    }
  }
  @media screen and (max-width: 768px) {
    & img {
      display: flex;
      margin-left: auto;
      margin-right: auto;
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
  & .col-md-4 {
    padding: 0;
  }
  & .col-md-8 {
    padding: 0;
  }
`
const StyledLogoFooter = styled.img`
  max-width: 274px;
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
            © Copyright Gamestate 2021. All Rights Reserved.
          </StyledCopyrightFooter>
        </Col>
      </StyledFooter>
    </StyledBlockFooter>
  )
}

export default Footer
