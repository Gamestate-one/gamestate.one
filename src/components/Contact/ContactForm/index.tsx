import Button from "@restart/ui/esm/Button"
import React, { useState } from "react"
import { Col, FloatingLabel, Form, Row } from "react-bootstrap"
import styled from "styled-components"
import bookIcon from "../../../assets/img/Contact/book.svg"
import emailIcon from "../../../assets/img/Contact/email.svg"
import urlIcon from "../../../assets/img/Contact/url.svg"
import organizationIcon from "../../../assets/img/Contact/organization.svg"

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
  border-radius: 12px;
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
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
  outline: none;
  border-radius: 4px;
  width: 100%;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
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
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  display: block;
  text-align: right;
  opacity: 0.34;
  margin-top: 5px;
`

const ContactForm = () => {
  const [numberChar, setNumberChar] = useState(0)
  const handleTextareaOnChange = (e: any) => {
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
      <Form
        method="post"
        className="af-form-wrapper mt-4"
        acceptCharset="UTF-8"
        action="https://www.aweber.com/scripts/addlead.pl"
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="meta_web_form_id" value="934404387" />
          <input type="hidden" name="meta_split_id" value="" />
          <input type="hidden" name="listname" value="awlist6168738" />
          <input
            type="hidden"
            name="redirect"
            value="https://www.aweber.com/thankyou-coi.htm?m=text"
          />

          <input type="hidden" name="meta_adtracking" value="Gamestate" />
          <input type="hidden" name="meta_message" value="1" />
          <input
            type="hidden"
            name="meta_required"
            value="name,email,custom Message"
          />

          <input type="hidden" name="meta_tooltip" value="" />
        </div>
        <Row className="af-form" id="af-form-934404387">
          <div id="af-header-934404387" className="af-header">
            <div className="bodyText">
              <p>&nbsp;</p>
            </div>
          </div>
          <StyledColInput xxl={12}>
            <StyledInput className="mb-3" controlId="formBasicName">
              <Form.Label>Name *</Form.Label>
              <Form.Control type="text" name="name" className="text" required />
              <StyledIconInput src={bookIcon} />
            </StyledInput>
          </StyledColInput>
          <StyledColInput xxl={12}>
            <StyledInput className="mb-3" controlId="formBasicSocial">
              <Form.Label>Social URL *</Form.Label>
              <Form.Control
                type="text"
                className="text"
                name="custom Social URL"
                required
              />
              <StyledIconInput src={urlIcon} alt="" />
            </StyledInput>
          </StyledColInput>
          <StyledColInput xxl={12}>
            <StyledInput className="mb-3" controlId="formBasicOrganization">
              <Form.Label>Organization *</Form.Label>
              <Form.Control
                type="text"
                className="text"
                name="custom Organization"
                required
              />
              <StyledIconInput src={organizationIcon} width="20px" />
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledInput className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                className="text"
                type="email"
                name="email"
                required
              />
              <StyledIconInput src={emailIcon} />
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledInput className="mb-3" controlId="formBasicMessage">
              <FloatingLabel controlId="formBasicMessage" label="Message">
                <Form.Control
                  as="textarea"
                  style={{ height: "198px" }}
                  maxLength={1000}
                  onChange={handleTextareaOnChange}
                  name="custom Message"
                  required
                />
              </FloatingLabel>
              <StyledCountTextarea>{numberChar}/1000</StyledCountTextarea>
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledButton type="submit">SEND NOW</StyledButton>
          </StyledColInput>
          <div id="af-footer-934404387" className="af-footer">
            <div className="bodyText">
              <p>&nbsp;</p>
            </div>
          </div>
        </Row>
        <div style={{ display: "none" }}>
          <img
            src="https://forms.aweber.com/form/displays.htm?id=nMwsLAwszBzs"
            alt=""
          />
        </div>
      </Form>
    </StyledContactForm>
  )
}

export default ContactForm
