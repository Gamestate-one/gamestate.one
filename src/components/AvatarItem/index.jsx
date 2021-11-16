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
  /* background: #ffffff 0% 0% no-repeat padding-box; */
  background: black;
  min-height: 214px;
  border-radius: 14px;
  opacity: 1;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  width: 100%;
  margin: 0 12px 24px 12px;
  text-align: center;
  /* background: transparent
    linear-gradient(147deg, #163f8c 0%, #c0d8db 52%, #9e08a6 100%) 0% 0%
    no-repeat padding-box;
  mix-blend-mode: color; */
`
const StyledCardName = styled(Card.Title)`
  font: normal normal bold 24px/32px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
`
const StyledCardJob = styled(Card.Text)`
  font: normal normal normal 18px/24px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-decoration: underline;
`
const StledCardDesc = styled(Card.Text)`
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
        <Card.Body>
          <StyledCardName>{item.name}</StyledCardName>
          <StyledCardJob>{item.job}</StyledCardJob>
          <StledCardDesc>{item.desc}</StledCardDesc>
        </Card.Body>
      </StyledCardInfo>
    </StyledAvatar>
  )
}

export default AvatarItem
