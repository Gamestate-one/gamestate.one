import React from "react"
import { Card, Container } from "react-bootstrap"
import styled from "styled-components"
import logo from "../../assets/img/Logo/logo.svg"
const StyledFooter = styled(Card.Footer)`
  min-height: 110px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLogoFooter = styled.img`
  max-width: 412px;
  width: 100%;
`
const StyledCopyrightFooter = styled.span`
  font: normal normal medium 16px/19px Whyte;
  color: #ffffff;
`
const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <StyledLogoFooter src={logo} />
        <StyledCopyrightFooter>
          © Copyright Game state Ltd 2021, All Rights Reserved
        </StyledCopyrightFooter>
      </StyledFooter>
    </Container>
  )
}

export default Footer
