import React from "react"
import { Container, Row } from "react-bootstrap"
import LabelSection from "../LabelSection"
import roadMap from "../../assets/img/RoadMap/roadMap.png"
import styled from "styled-components"
import CardItem from "./CardItem"
const StyledBackgroundRoadMap = styled.div`
  background-image: url(${roadMap});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 1280px;
  margin-top: 126px;
  margin-bottom: 200px;
`
const StyledListCards = styled(Container)`
  position: relative;
  height: 100%;
  & .card_top_left {
    position: absolute;
    top: -40px;
    left: 184px;
  }
  & .card_top_right {
    position: absolute;
    top: 0;
    right: -13px;
  }
  & .card_bottom_left {
    position: absolute;
    left: 66px;
    bottom: -152px;
  }
  & .card_bottom_right {
    position: absolute;
    right: 398px;
    bottom: 245px;
  }
`
const CONTENT = [
  {
    className: "card_top_left",
    color: "#FA0E86",
    label: "Q1 2021",
    description: [
      "Launch own layer-1 NFT & E-commerce Nexus marketplace platform",
    ],
  },
  {
    className: "card_top_right",
    color: "#1F95FF",
    label: "Q3 2022",
    description: ["Expand Gamestate to include game world, economy, staking"],
  },
  {
    className: "card_bottom_left",
    color: "#FE6B1B",
    label: "Q4 2021",
    description: [
      "Ethereum NFT sale",
      "Metaverse architecture & economy design",
    ],
  },
  {
    className: "card_bottom_right",
    color: "#560DB1",
    label: "Q2 2022",
    description: ["Launch Gamestate metaverse mvp"],
  },
]
const RoadMap = () => {
  return (
    <>
      <Container>
        <Row>
          <LabelSection label="ROAD MAP" />
        </Row>
      </Container>
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
    </>
  )
}

export default RoadMap
