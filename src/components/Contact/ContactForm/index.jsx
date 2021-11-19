import Button from "@restart/ui/esm/Button"
import React, { useState } from "react"
import { Col, FloatingLabel, Form, Row } from "react-bootstrap"
import styled from "styled-components"
import bookIcon from "../../../assets/img/Contact/book.svg"
import emailIcon from "../../../assets/img/Contact/email.svg"

const StyledContactForm = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 40px 20px;
    & button {
      font-size: 16px;
      line-height: 19px;
      padding: 16px 0;
      &:before {
        display: none;
      }
    }
  }
`
const StyledContactTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 43px;
  font-style: normal;
  color: #fff;
  text-align: center;
`
const StyledDesc = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: #ebebeb;
  text-align: center;
  display: inline-block;
  /* width: 100%; */
  width: 96%;
`
const StyledInput = styled(Form.Group)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 16px;
  border-radius: 16px;
  border: 1px solid transparent;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  position: relative;
  &:focus-within {
    border: 1px solid #e740f0;
  }
  & input,
  & textarea {
    background: transparent;
    border: none;
    font-size: 16px;
    line-height: 21px;
    font-style: normal;
    font-weight: 600;
    color: #fff;
    padding-left: 0;
    width: 90%;
    padding-top: 0px;
    padding-bottom: 0px;
    &:focus {
      background: transparent;
      color: #fff;
      outline: none;
      box-shadow: unset;
    }
  }
  & textarea {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      border-radius: 10px;
      height: 90%;
    }

    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 10px;
      background-color: #f5f5f5;
      height: 90%;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      height: 90%;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.72, rgb(73, 125, 189)),
        color-stop(0.86, rgb(28, 58, 148))
      );
    }
  }

  & textarea,
  & label {
    padding-left: 0 !important;
    border: none;
    opacity: 1 !important;
    width: 100%;
    resize: none;
  }
`
const StyledIconInput = styled.img`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`
const StyledColInput = styled(Col)`
  padding: 0 6px;
`
const StyledButton = styled(Button)`
  padding: 22px 0;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  width: 100%;
  font: normal normal bold 24px/32px Whyte;
  color: #ffffff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 60px;
    opacity: 1;
    left: 48%;
    top: 38%;
    height: 10px;
    background-color: rgb(255, 255, 255);
    filter: blur(14px);
  }
`
const StyledCountTextarea = styled.span`
  font: normal normal normal 12px/14px Whyte;
  color: #ffffff;
  display: block;
  text-align: right;
  opacity: 0.34;
  margin-top: 5px;
`
const ContactForm = () => {
  const [numberChar, setNumberChar] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleTextareaOnChange = (e) => {
    setNumberChar(e.target.value.length)
  }
  return (
    <StyledContactForm>
      <StyledContactTitle className="text-uppercase">
        CONTACT US
      </StyledContactTitle>
      <StyledDesc>
        Get in touch for Launchpad IGO's, Synergy Partnerships, Game
        Development, Press, and Co-branding.
      </StyledDesc>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Row>
          <StyledColInput xxl={6}>
            <StyledInput className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name *</Form.Label>
              <Form.Control type="text" />
              <StyledIconInput src={bookIcon} />
            </StyledInput>
          </StyledColInput>

          <StyledColInput xxl={6}>
            <StyledInput className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control type="text" />
              <StyledIconInput src={bookIcon} />
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledInput className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" />
              <StyledIconInput src={emailIcon} />
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledInput className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  style={{ height: "198px" }}
                  maxLength="1000"
                  onChange={handleTextareaOnChange}
                />
              </FloatingLabel>
              <StyledCountTextarea>{numberChar}/1000</StyledCountTextarea>
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledButton variant="primary" type="submit">
              SEND NOW
            </StyledButton>
          </StyledColInput>
        </Row>
      </Form>
    </StyledContactForm>
  )
}

export default ContactForm
