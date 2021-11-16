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
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -20px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  }
`
const LabelSection = ({ label, note }) => {
  console.log(note)
  return <StyledLabelSection note={note}>{label}</StyledLabelSection>
}

export default LabelSection
