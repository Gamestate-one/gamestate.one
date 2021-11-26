import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import bookIcon from 'progressassets/img/Contact/book.svg';
import urlIcon from 'progressassets/img/Contact/url.svg';

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
`;
const StyledContactTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 43px;
  font-style: normal;
  color: #fff;
  text-align: center;
`;

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

  & label {
    padding-left: 0 !important;
    border: none;
    opacity: 1 !important;
    width: 100%;
    resize: none;
  }
`;
const StyledIconInput = styled.img`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;
const StyledColInput = styled(Col)`
  padding: 0 6px;
`;
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
    content: '';
    position: absolute;
    width: 60px;
    opacity: 1;
    left: 48%;
    top: 38%;
    height: 10px;
    background-color: rgb(255, 255, 255);
    filter: blur(14px);
  }
`;

const ContactForm = () => {
  const [numberChar, setNumberChar] = useState(0);
  const handleTextareaOnChange = (e: any) => {
    setNumberChar(e.target.value.length);
  };
  return (
    <StyledContactForm>
      <StyledContactTitle className="text-uppercase">
        PROGRESS BAR
      </StyledContactTitle>
      <Form method="post" className=" mt-4">
        <Row>
          <StyledColInput xxl={12}>
            <StyledInput className="mb-3" controlId="formBasicHive">
              <Form.Label>HIVE-ENGINE IDO </Form.Label>
              <Form.Control type="text" name="hive" className="text" />
              <StyledIconInput src={bookIcon} />
            </StyledInput>
          </StyledColInput>
          <StyledColInput xxl={12}>
            <StyledInput className="mb-3" controlId="formBasicPolygon">
              <Form.Label>POLYGON IDO</Form.Label>
              <Form.Control type="text" className="text" name="polygon" />
              <StyledIconInput src={urlIcon} alt="" />
            </StyledInput>
          </StyledColInput>
          <StyledColInput md={12}>
            <StyledButton type="submit">SUBMIT</StyledButton>
          </StyledColInput>
        </Row>
      </Form>
    </StyledContactForm>
  );
};

export default ContactForm;
