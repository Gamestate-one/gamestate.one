import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

const StyledAvatar = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 645px;
  border-radius: 8px;
  margin: 35px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const StyledCardInfo = styled(Card)`
  background: rgba(0, 0, 0, 0.2) 0% 0% no-repeat padding-box;
  min-height: 214px;
  border-radius: 14px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  width: 100%;
  margin: 0 12px 22px 12px;
  text-align: center;
  border: none;
`
const StyledCardName = styled(Card.Title)`
  font: normal normal bold 24px/32px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
  margin-bottom: auto;
  &.h5 {
    margin-bottom: 6px;
  }
`
const StyledCardJob = styled(Card.Text)`
  font: normal normal normal 18px/24px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-decoration: underline;
`
const StyledCardDesc = styled(Card.Text)`
  text-align: center;
  font: normal normal normal 16px/21px Whyte;
  letter-spacing: 0px;
  color: #ededed;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`
const AvatarItem = ({ item }) => {
  return (
    <StyledAvatar image={item.src}>
      <StyledCardInfo border="primary">
        <Card.Body className="d-flex flex-column px-1">
          <StyledCardName>{item.name}</StyledCardName>
          <StyledCardJob>{item.job}</StyledCardJob>
          <StyledCardDesc>{item.desc}</StyledCardDesc>
        </Card.Body>
      </StyledCardInfo>
    </StyledAvatar>
  )
}

export default AvatarItem
