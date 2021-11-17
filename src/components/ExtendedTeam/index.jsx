import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LabelSection from "../LabelSection"
import extAdam from "../../assets/img/Team/extAdam.png"
import extAnkur from "../../assets/img/Team/extAnkur.png"
import extBrenn from "../../assets/img/Team/extBrenn.png"
import extErik from "../../assets/img/Team/extErik.png"
import extJacob from "../../assets/img/Team/extJacob.png"
import extKhanh from "../../assets/img/Team/extKhanh.png"
import extMarco from "../../assets/img/Team/extMarco.png"
import extWilliam from "../../assets/img/Team/extWilliam.png"
import AvatarItem from "../AvatarItem"
import styled from "styled-components"

const StyledItemCol = styled(Col)`
  padding: 0 15px;
`

const EXTENDED_TEAM = [
  {
    src: extErik,
    name: "ERIK CURRE",
    job: "SPLINTERLANDS.COM | HIVE-ENGINE.COM",
    desc: "University of Washington B.S.C. Banking industry developer turned code-slinger for Hive Engine smart contract DEX, and the popular Splinterlands digital trading card game.",
  },
  {
    src: extAdam,
    name: "ADAM CHAPLIN",
    job: "DEFIFORYOU.UK | DIGCHAIN.ORG",
    desc: "CEO of DeFi For You, Dig Chain, and co-founder of Travala. Adam is a seasoned veteran with 30 years of business management experience.",
  },
  {
    src: extWilliam,
    name: "WILLIAM GRAY",
    job: "DEFIFORYOU.UK | DIGCHAIN.ORG",
    desc: "Digital marketing expert and Chief Marketing Officer at DeFi For You and Dig Chain. William’s background includes copywriting, journalism and social media management.",
  },
  {
    src: extJacob,
    name: "JACOB GADIKIAN",
    job: "NOTIONAL | BLURT.BLOG",
    desc: "Decentralised protocol developer since 2013, and a technical powerhouse in edge-of-network validation, blockchain interoperability, and open embedded systems design.",
  },
  {
    src: extBrenn,
    name: "BRENN HILL",
    job: "NOTIONAL",
    desc: "Engineering leader since 2009 focusing on media, sports, and marketing technology. In the blockchain space since 2015, Brenn is a published author with Packt on blockchain topics.",
  },
  {
    src: extKhanh,
    name: "KHANH NGUYEN",
    job: "NOTIONAL",
    desc: "Khanh is a skilled blockchain engineer with deep expertise in cross-chain technology. He has a Bachelors in Computer Science from Hanoi University of Science and Technology.",
  },
  {
    src: extAnkur,
    name: "ANKUR BANERJEE",
    job: "CTO - CHEQD.IO",
    desc: "Engineering and digital identity project leader. Software development innovator, and co-inventor on multiple patent-pending solutions in blockchain and artificial intelligence systems.",
  },
  {
    src: extMarco,
    name: "MARCO STAGLIANO'",
    job: "ANOTHER-1.IO | SNEAKERHEADZ",
    desc: "Digital fashion collectibles marketplace founder, experienced in Corporate Finance, M&A, Fintech, Real-estate, NFT’s and Metaverses. Developed business across Asia and Europe, and acted as head of operations for AngelVest.",
  },
]
const ExtendedTeam = () => {
  return (
    <Container>
      <Row>
        <LabelSection
          label="EXTENDED TEAM / ADVISORS"
          note="MEET &nbsp;THE"
          className="mt-75"
        />
      </Row>
      {/* <Row className="mt-4"></Row> */}
      <Row className="">
        {EXTENDED_TEAM.map((item, idx) => (
          <StyledItemCol md={6} xxl={3} key={idx}>
            <AvatarItem item={item} />
          </StyledItemCol>
        ))}
      </Row>
    </Container>
  )
}

export default ExtendedTeam
