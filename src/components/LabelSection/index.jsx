import React from "react"
import styled from "styled-components"
const StyledLabelSection = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 67px;
  min-height: 179px;
  margin-left: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  & span {
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -8px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  }
  & .note {
    font: normal normal normal 16px/21px Whyte;
    letter-spacing: 0px;
    color: #ffffff;
  }
`
const LabelSection = ({ label, note }) => {
  console.log(label, note)
  return (
    <StyledLabelSection>
      {note && <span className="note">{note}</span>}
      <span>{label}</span>
    </StyledLabelSection>
  )
}

export default LabelSection
