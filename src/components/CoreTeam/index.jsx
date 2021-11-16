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
    src: extErik,
    name: "ERIK CURRE",
    job: "SPLINTERLANDS.COM | HIVE-ENGINE.COM",
    desc: "B.S. in Computer Science from the University of Washington. After a lengthy career as a software developer in the finance industry, he fell down the blockchain rabbit hole. Currently he spends his days writing code for crypto projects based on the Hive blockchain, including the Hive Engine DEX & smart contracts platform, and popular Splinterlands digital trading card game.",
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
    desc: "Digital marketing wiz and CMO at DeFi For You and Dig Chain. William’s background includes copywriting, journalism and SMM.",
  },
  {
    src: extJacob,
    name: "JACOB GADIKIAN",
    job: "NOTIONAL | BLURT.BLOG",
    desc: "IT professional since 2003 and blockchains with emphasis on decentralized protocols since 2013. Jacob is a technical powerhouse in blockchain-based consumer facing mobile apps, economic exchanges between free-standing blockchain systems, edge-of-network validation and in designing open embedded systems.",
  },
  {
    src: extBrenn,
    name: "BRENN HILL",
    job: "NOTIONAL",
    desc: "Engineering leader since 2009 focusing on media, sports, and marketing technology. In the blockchain space since 2015, Brenn is a published author with Packt on blockchain topics",
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
    name: "MARCO STAGLIANO",
    job: "ANOTHER-1.IO | SNEAKERHEADZ",
    desc: "Marco has extensive experience in Corporate Finance, M&A, Fintech, Real-estate, NFT’s and Metaverses. In recent years, he has developed business across Asia and Europe, acted as head of operations for AngelVest and founded a marketplace for digital fashion collectibles.",
  },
]
const CoreTeam = () => {
  return (
    <StyledBlockCoreTeam>
      <Container>
        <Row>
          <LabelSection label="CORE TEAM" note="MEET THE" />
        </Row>
        <Row className="mt-4">
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
