import React from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"
import girl from "../../assets/img/Contact/girl.png"
import ContactForm from "./ContactForm"
const StyledBlockContact = styled(Row)`
  display: flex;
  background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #707070;
  margin-right: 0;
`
const StyledImageContact = styled(Col)`
  min-height: 702px;
  background-image: url(${girl});
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 768px) {
    min-height: 560px;
  }
`
const StyledBlockForm = styled(Col)`
  background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
    0% no-repeat padding-box;
  padding: 50px 84px 52px 243px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    opacity: 0.91;
    filter: blur(16px);
    width: 100px;
    height: 100%;
  }
  @media screen and (max-width: 1399px) {
    padding: 40px 0 40px 50px;
  }
  @media screen and (max-width: 991px) {
    padding: 0;
    padding: 20px 10px 40px 20px;
    &:before {
      width: 100%;
      height: 76px;
      top: -50px;
      left: 0;
      right: 0;
    }
  }
`
const Contact = () => {
  return (
    <StyledBlockContact>
      <StyledImageContact md={12} lg={5} />
      <StyledBlockForm md={12} lg={7}>
        <ContactForm />
      </StyledBlockForm>
    </StyledBlockContact>
  )
}

export default Contact
