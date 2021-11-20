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
import mobileExtAdam from "../../assets/img/Team/mobileExtAdam.png"
import mobileExtAnkur from "../../assets/img/Team/mobileExtAnkur.png"
import mobileExtBrenn from "../../assets/img/Team/mobileExtBrenn.png"
import mobileExtErik from "../../assets/img/Team/mobileExtErik.png"
import mobileExtJacob from "../../assets/img/Team/mobileExtJacob.png"
import mobileExtKhanh from "../../assets/img/Team/mobileExtKhanh.png"
import mobileExtMarco from "../../assets/img/Team/mobileExtMarco.png"
import mobileExtWilliam from "../../assets/img/Team/mobileExtWilliam.png"
import AvatarItem from "../AvatarItem"
import styled from "styled-components"

const StyledItemCol = styled(Col)`
  padding: 0 15px;
  @media screen and (max-width: 1660px) {
    padding: 0 4px;
  }
  @media screen and (max-width: 414px) {
    width: 50%;
  }
`
const StyledTeamRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: none;
  }
`
const StyledMobileTeamRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: flex;
  }
  @media screen and (min-width: 415px) {
    display: none;
  }
`

const StyledItemColMobile = styled.div`
  padding: 0px 6px 40px;
  width: 50%;
  margin-top: 28px;
`
const StyledItemImage = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 265px;
  border-radius: 8px;
`
const StyledItemName = styled.h5`
  font: normal normal bold 16px/19px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  margin-top: 12px;
`
const StyledItemJob = styled.span`
  font: normal normal normal 14px/20px Whyte !important;
  min-height: 40px;
  letter-spacing: 0px;
  color: #ffffff;
  display: inline-block;
  margin-top: 3px;
  width: 190px;
`
const StyledItemDesc = styled.p`
  font: normal normal normal 12px/16px Whyte;
  letter-spacing: 0px;
  color: #ededed;
  flex: 1;
  margin-top: 8px;
`
const StyledLabelSectionRow = styled(Row)`
  @media screen and (max-width: 415px) {
    display: none;
  }
`
const StyledMobileLabelRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 45px;
    & span {
      font: normal normal 700 16px/19px Whyte;
      letter-spacing: 0px;
      color: #ffffff;
    }
    & h3 {
      font: normal normal bold 32px/36px Whyte;
      letter-spacing: 0px;
      color: #ffffff;
      width: 77%;
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 415px) {
    display: none;
  }
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

const MOBILE_EXTENDED_TEAM = [
  {
    image: mobileExtErik,
    name: "ERIK CURRE",
    job: "SPLINTERLANDS.COM | HIVE-ENGINE.COM",
    desc: "University of Washington B.S.C. Banking industry developer turned code-slinger for Hive Engine smart contract DEX, and the popular Splinterlands digital trading card game.",
  },
  {
    image: mobileExtAdam,
    name: "ADAM CHAPLIN",
    job: "DEFIFORYOU.UK | DIGCHAIN.ORG",
    desc: "CEO of DeFi For You, Dig Chain, and co-founder of Travala. Adam is a seasoned veteran with 30 years of business management experience.",
  },
  {
    image: mobileExtWilliam,
    name: "WILLIAM GRAY",
    job: "DEFIFORYOU.UK | DIGCHAIN.ORG",
    desc: "Digital marketing expert and Chief Marketing Officer at DeFi For You and Dig Chain. William’s background includes copywriting, journalism and social media management.",
  },
  {
    image: mobileExtJacob,
    name: "JACOB GADIKIAN",
    job: "NOTIONAL | BLURT.BLOG",
    desc: "Decentralised protocol developer since 2013, and a technical powerhouse in edge-of-network validation, blockchain interoperability, and open embedded systems design.",
  },
  {
    image: mobileExtBrenn,
    name: "BRENN HILL",
    job: "NOTIONAL",
    desc: "Engineering leader since 2009 focusing on media, sports, and marketing technology. In the blockchain space since 2015, Brenn is a published author with Packt on blockchain topics.",
  },
  {
    image: mobileExtKhanh,
    name: "KHANH NGUYEN",
    job: "NOTIONAL",
    desc: "Khanh is a skilled blockchain engineer with deep expertise in cross-chain technology. He has a Bachelors in Computer Science from Hanoi University of Science and Technology.",
  },
  {
    image: mobileExtAnkur,
    name: "ANKUR BANERJEE",
    job: "CTO - CHEQD.IO",
    desc: "Engineering and digital identity project leader. Software development innovator, and co-inventor on multiple patent-pending solutions in blockchain and artificial intelligence systems.",
  },
  {
    image: mobileExtMarco,
    name: "MARCO STAGLIANO'",
    job: "ANOTHER-1.IO | SNEAKERHEADZ",
    desc: "Digital fashion collectibles marketplace founder, experienced in Corporate Finance, M&A, Fintech, Real-estate, NFT’s and Metaverses. Developed business across Asia and Europe, and acted as head of operations for AngelVest.",
  },
]
const ExtendedTeam = () => {
  return (
    <Container>
      <StyledLabelSectionRow>
        <LabelSection
          label="EXTENDED TEAM / ADVISORS"
          note="MEET &nbsp;THE"
          className="mt-75"
        />
      </StyledLabelSectionRow>
      <StyledMobileLabelRow>
        <span>MEET &nbsp;THE</span>
        <h3>EXTENDED TEAM & ADVISORS</h3>
      </StyledMobileLabelRow>
      <StyledTeamRow>
        {EXTENDED_TEAM.map((item, idx) => (
          <StyledItemCol md={6} xxl={3} key={idx}>
            <AvatarItem item={item} />
          </StyledItemCol>
        ))}
      </StyledTeamRow>
      <StyledMobileTeamRow>
        {MOBILE_EXTENDED_TEAM.map((item, idx) => (
          <StyledItemColMobile key={idx}>
            <StyledItemImage image={item.image} />
            <StyledItemName>{item.name}</StyledItemName>
            <StyledItemJob>{item.job}</StyledItemJob>
            <StyledItemDesc>{item.desc}</StyledItemDesc>
          </StyledItemColMobile>
        ))}
      </StyledMobileTeamRow>
    </Container>
  )
}

export default ExtendedTeam
