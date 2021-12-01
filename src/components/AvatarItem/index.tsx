import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import { AvatarItemInterface } from "../../types/AvatarItemInterface"
const StyledAvatar = styled.div<{ image: string }>`
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
  @media screen and (max-width: 1660px) {
    margin: 8px 0;
  }
  @media screen and (max-width: 414px) {
    height: 265px;
    width: 93%;
  }
`
const StyledCardInfo = styled(Card)`
  background: rgba(0, 0, 0, 0.2) 0% 0% no-repeat padding-box;
  min-height: 214px;
  /* min-height: 234px; */
  border-radius: 14px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  width: 100%;
  margin: 0 12px 12px 12px;
  text-align: center;
  border: none;
  display: ${(props) => props.anonymous === 1 && "none"};
  @media screen and (max-width: 1791px) {
    min-height: 239px;
  }
  @media screen and (max-width: 1572px) {
    min-height: 260px;
  }
  @media screen and (max-width: 1399px) {
    min-height: 194px;
  }
  @media screen and (max-width: 1199px) {
    min-height: 215px;
  }
  @media screen and (max-width: 991px) {
    min-height: 236px;
  }

  @media screen and (max-width: 767px) {
    min-height: 200px;
  }
`
const StyledCardName = styled(Card.Title)`
  font-size: 24px;
  line-height: 32px;
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
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  @media screen and (max-width: 1791px) {
    min-height: 48px;
  }
  @media screen and (max-width: 1399px) {
    min-height: 0px;
  }
`
const StyledCardDesc = styled(Card.Text)`
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #ededed;
  flex: 1;
  margin-bottom: auto;
`

const AvatarItem = ({
  item,
  anonymous,
}: {
  item: AvatarItemInterface
  anonymous?: boolean
}) => {
  return anonymous ? (
    <a href="#contact-form">
      <StyledAvatar image={item.src}>
        <StyledCardInfo border="primary" anonymous={anonymous ? 1 : 0}>
          <Card.Body className="d-flex flex-column px-1">
            <StyledCardName dangerouslySetInnerHTML={{ __html: item.name }} />
            <StyledCardJob>{item.job}</StyledCardJob>
            <StyledCardDesc>{item.desc}</StyledCardDesc>
          </Card.Body>
        </StyledCardInfo>
      </StyledAvatar>
    </a>
  ) : (
    <StyledAvatar image={item.src}>
      <StyledCardInfo border="primary" anonymous={anonymous ? 1 : 0}>
        <Card.Body className="d-flex flex-column px-1">
          <StyledCardName dangerouslySetInnerHTML={{ __html: item.name }} />
          <StyledCardJob>{item.job}</StyledCardJob>
          <StyledCardDesc>{item.desc}</StyledCardDesc>
        </Card.Body>
      </StyledCardInfo>
    </StyledAvatar>
  )
}

export default AvatarItem
