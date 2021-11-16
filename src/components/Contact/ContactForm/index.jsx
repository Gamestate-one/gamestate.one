import Button from "@restart/ui/esm/Button"
import React, { useState } from "react"
import { Col, FloatingLabel, Form, Row } from "react-bootstrap"
import styled from "styled-components"
import bookIcon from "../../../assets/img/Contact/book.svg"
import emailIcon from "../../../assets/img/Contact/email.svg"

const StyledContactForm = styled.div`
  background: #9e08a6;
  padding: 30px 80px;
  border-radius: 8px;
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
  width: 100%;
`
const StyledInput = styled(Form.Group)`
  background-color: #b163d5;
  padding: 10px 16px;
  border: 1px solid #e740f0;
  border-radius: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  position: relative;
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
  background-color: #b163d5;
  border: none;
  border-radius: 4px;
  width: 100%;
  font: normal normal bold 24px/32px Whyte;
  color: #ffffff;
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
    console.log(e.target.value.length)
    setNumberChar(e.target.value.length)
  }
  return (
    <StyledContactForm>
      <StyledContactTitle className="text-uppercase">
        SEND EMAIL
      </StyledContactTitle>
      <StyledDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu
      </StyledDesc>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Row>
          <StyledColInput md={6}>
            <StyledInput className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name *</Form.Label>
              <Form.Control type="text" />
              <StyledIconInput src={bookIcon} />
            </StyledInput>
          </StyledColInput>

          <StyledColInput md={6}>
            <StyledInput className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control type="text" />
              <StyledIconInput src={bookIcon} />
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledInput className="mb-3" controlId="formBasicPassword">
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
