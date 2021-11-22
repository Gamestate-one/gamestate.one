import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LabelSection from "../LabelSection"
import roadMap from "../../assets/img/RoadMap/roadMap.png"
import styled from "styled-components"
import CardItem from "./CardItem"
import q1 from "../../assets/img/RoadMap/q1.png"
import q2 from "../../assets/img/RoadMap/q2.png"
import q3 from "../../assets/img/RoadMap/q3.png"
import q4 from "../../assets/img/RoadMap/q4.png"
const StyledBlockRoadMap = styled.div`
  height: 66vw;
  margin-top: 126px;
  margin-bottom: 286px;
  @media screen and (min-width: 1920px) {
    & div.card_top_right {
      top: -60px;
    }
    & div.card_bottom_right {
      bottom: 160px;
    }
    & div.card_bottom_left {
      bottom: -190px;
    }
  }
  @media screen and (max-width: 1919px) {
    & div.card_top_right {
      top: -60px;
    }
    & div.card_bottom_right {
      bottom: 100px;
    }
    & div.card_bottom_left {
      bottom: -190px;
      left: 140px;
    }
  }
  @media screen and (max-width: 1860px) {
    & div.card_top_right {
      right: 70px;
      top: -70px;
    }
  }

  @media screen and (max-width: 1600px) {
    & div.card_top_right {
      top: -140px;
    }
    & div.card_top_left {
      top: -100px;
    }
  }
  @media screen and (max-width: 1399px) {
    & div.card_top_right {
      right: 0px;
    }
    & div.card_bottom_right {
      right: 20px;
      bottom: 0px;
    }
    & div.card_top_left {
      left: 0;
      top: -140px;
    }
    & div.card_bottom_left {
      left: 0;
    }
  }

  @media screen and (max-width: 1199px) {
    & div.card_top_right {
      right: 0px;
    }
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`
const StyledBackgroundRoadMap = styled.div`
  background-image: url(${roadMap});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
`
const StyledListCards = styled(Container)`
  position: relative;
  height: 100%;
  & .card_top_left {
    position: absolute;
    top: -100px;
    left: 184px;
  }
  & .card_top_right {
    position: absolute;
    top: 0;
    right: 50px;
  }
  & .card_bottom_left {
    position: absolute;
    left: 66px;
    bottom: -152px;
  }
  & .card_bottom_right {
    position: absolute;
    right: 325px;
    bottom: 245px;
  }
`

const StyledRoadMapMobile = styled(Row)`
  @media screen and (max-width: 991px) {
    display: flex;
  }
  @media screen and (max-width: 414px) {
    & > div:first-child > div:first-child {
      height: 62vw;
    }
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`
const StyledIconMobile = styled(Col)`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 58%;
  height: 410px;
  @media screen and (max-width: 767px) {
    /* background-size: cover; */
    width: 100%;
    /* height: 354px; */
    height: 70vw;
  }
`
const StyledItemMobile = styled(Col)`
  align-items: center;
  margin-bottom: 30px;
  display: flex;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
const CONTENT = [
  {
    className: "card_bottom_left",
    color: "#FE6B1B",
    label: "Q4 2021",
    image: q4,
    description: [
      "Initial Partnerships",
      "Community building",
      "Hive-Engine IDO",
      "Polygon main event IDO",
    ],
  },
  {
    className: "card_top_left",
    color: "#FA0E86",
    label: "Q1 2022",
    image: q1,
    description: [
      "NFT collection design",
      "Metaverse development",
      "Launch NFT collection",
      "Unveil marketplace",
    ],
  },
  {
    className: "card_bottom_right",
    color: "#560DB1",
    label: "Q2 2022",
    image: q2,
    description: [
      "Launch metaverse MVP",
      "Community artist NFT collections",
      "Multi-chain Integration",
    ],
  },

  {
    className: "card_top_right",
    color: "#1F95FF",
    label: "Q3 2022",
    image: q3,
    description: [
      "Introduce game world economy",
      "Accelerate marketing",
      "Increase onboarding",
      "Expand integrations",
    ],
  },
]
const RoadMap = () => {
  return (
    <>
      <Container>
        <Row>
          <LabelSection label="ROAD MAP" topAuto="mt-auto" />
        </Row>
        <StyledRoadMapMobile>
          {CONTENT.map((card, idx) => (
            <StyledItemMobile key={idx} md={12}>
              <StyledIconMobile md={7} image={card.image} />
              <Col md={5} xs={12}>
                <CardItem
                  key={idx}
                  className={card.className}
                  label={card.label}
                  content={card.description}
                  color={card.color}
                />
              </Col>
            </StyledItemMobile>
          ))}
        </StyledRoadMapMobile>
      </Container>
      <StyledBlockRoadMap>
        <StyledBackgroundRoadMap>
          <StyledListCards>
            {CONTENT.map((card, idx) => (
              <CardItem
                key={idx}
                className={card.className}
                label={card.label}
                content={card.description}
                color={card.color}
              />
            ))}
          </StyledListCards>
        </StyledBackgroundRoadMap>
      </StyledBlockRoadMap>
    </>
  )
}

export default RoadMap
