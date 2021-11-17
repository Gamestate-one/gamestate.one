import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LabelSection from "../LabelSection"
import coreCong from "../../assets/img/Team/coreCong.png"
import coreKobus from "../../assets/img/Team/coreKobus.png"
import coreLocke from "../../assets/img/Team/coreLocke.png"
import corePeter from "../../assets/img/Team/corePeter.png"
import coreRicardo from "../../assets/img/Team/coreRicardo.png"
import coreSang from "../../assets/img/Team/coreSang.png"
import coreTung from "../../assets/img/Team/coreTung.png"
import coreViet from "../../assets/img/Team/coreViet.png"
import AvatarItem from "../AvatarItem"
import team from "../../assets/img/Team/team.png"
import styled from "styled-components"

const StyledItemCol = styled(Col)`
  padding: 0 15px;
`
const StyledBlockCoreTeam = styled.div`
  width: 100%;
  background: url(${team}),
    transparent linear-gradient(128deg, #163f8c 0%, #8f65be 48%, #e740f0 100%)
      0% 0% no-repeat padding-box;
  background-repeat: no-repeat;
  background-position: right top;
`
const EXTENDED_TEAM = [
  {
    src: coreRicardo,
    name: "RICARDO FERREIRA",
    job: "CO-FOUNDER & TECHNICAL DIRECTOR",
    desc: "Bachelor of Commerce thought leader, with wide entrepreneurial and business development experience in real estate, manufacturing, information technology, fintech, and blockchain social media sectors.",
  },
  {
    src: corePeter,
    name: "PETER HJORTSOE",
    job: "CO-FOUNDER",
    desc: "M.Sc. International Business. Professional experience in real estate, FMCG, retail, renewable energy & finance. Serial entrepreneur, building and scaling businesses in Asia since 2014",
  },
  {
    src: coreKobus,
    name: "KOBUS KOTZE",
    job: "CREATIVE LEAD",
    desc: "12 Years’ experience in broadcasting, branding, marketing, and strategy. Literary Theory and Writing graduate; currently a brand advisor to Bundesliga, Netflix, Discovery, and other major players.",
  },
  {
    src: coreLocke,
    name: "LOCKE KOSNOFF",
    job: "MARKETING SPECIALIST & BIZ DEV",
    desc: "BBA and PGCEi graduate with significant experience in the fields of blockchain marketing, project management, communications and advisory roles in various fintech start-ups. Locke is driven and passionate about changing the world by leveraging strong business and interpersonal relationships.",
  },
  {
    src: coreCong,
    name: "CONG NGUYEN",
    job: "CEO - BLOCKCHAIN DEVELOPER ASIA",
    desc: "An experienced leader in modern technological innovation. Developed the DeFi For You platform and several ongoing blockchain projects for the Vietnamese government, banks, and local industries.",
  },
  {
    src: coreTung,
    name: "TUNG DUONG THANH",
    job: "DEV. LEAD - BLOCKCHAIN DEVELOPER ASIA",
    desc: "Project manager in multiple blockchain engineering teams, most recently, Travala and Defi For You. Tung is a leading-edge developer; constantly pushing the boundaries of modern technology.",
  },
  {
    src: coreViet,
    name: "VIET TUAN VU",
    job: "VRTECH CEO",
    desc: "18 years’ experience in the fields of telecommunications and IT. More than 5 years involved in collaborating and providing AR/VR solutions to a wide range of industries.",
  },
  {
    src: coreSang,
    name: "SANG THE DUONG",
    job: "3D DESIGNER",
    desc: "More than 5 years’ experience designing for various AR/VR applications, ranging from games, simulation, travel, and education",
  },
]
const CoreTeam = () => {
  return (
    <StyledBlockCoreTeam>
      <Container>
        <Row>
          <LabelSection
            label="CORE TEAM"
            note="MEET THE"
            className="mt-120"
            before
          />
        </Row>
        <Row>
          {EXTENDED_TEAM.map((item, idx) => (
            <StyledItemCol lg={3} key={idx}>
              <AvatarItem item={item} />
            </StyledItemCol>
          ))}
        </Row>
      </Container>
    </StyledBlockCoreTeam>
  )
}

export default CoreTeam
