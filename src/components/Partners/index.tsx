import { Container, Row } from "react-bootstrap"
import styled from "styled-components"
import LabelSection from "../LabelSection"
import logoDig from "../../assets/img/Logo/logoDig.svg"
import logoDefi from "../../assets/img/Logo/logoDefi.svg"
import logoAnother from "../../assets/img/Logo/logoAnother.svg"
import logoSplin from "../../assets/img/Logo/logoSplin.svg"
import logoHive from "../../assets/img/Logo/logoHive.svg"
import logoN from "../../assets/img/Logo/logoN.svg"
import logoBirt from "../../assets/img/Logo/logoBirt.svg"
import logoEdso from "../../assets/img/Logo/logoEdso.svg"
import logoBlockchain from "../../assets/img/Logo/logoDemo.svg"
import logoPolygon from "../../assets/img/Logo/logoPolygon.svg"
import logoArweave from "../../assets/img/Logo/logoArweave.svg"
const StyledBlockLogo = styled(Row)<{ technology?: number }>`
  margin-bottom: 124px;
  ${(props) =>
    props.technology === 1
      ? `
    justify-content: space-evenly;
    width: 82%;
    margin: 0 auto;`
      : `
    justify-content: center; `}

  @media screen and (max-width: 1788px) {
    & img {
      margin: 30px 35px;
    }
  }
  @media screen and (max-width: 414px) {
    & img {
      max-width: 100%;
      margin-bottom: 120px;
    }
  }
`

const StyledLogo = styled.img<{
  width: string
  height: string
  right?: string
}>`
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
  margin-right: ${(props) => props.right}px;
`
const StyledBlockLogoPolygon = styled(Row)`
  justify-content: center;
  margin: 70px 0;
`
const Partners = () => {
  return (
    <Container>
      <Row>
        <LabelSection label="SYNERGY PARTNERS" topAuto="mt-auto" />
      </Row>
      <StyledBlockLogo className="align-items-center flex-wrap mt-5 mb-124">
        <StyledLogo width="260" height="128" src={logoSplin} right="150" />
        <StyledLogo width="600" height="128" src={logoDefi} right="113" />
        <StyledLogo width="264" height="210" src={logoAnother} right="117" />
        <StyledLogo width="141" height="141" src={logoDig} right="0" />
        <StyledLogo width="477" height="76" src={logoHive} right="184" />
        <StyledLogo width="215" height="198" src={logoBirt} />
      </StyledBlockLogo>
      <Row>
        <LabelSection label="TECHNOLOGY PARTNERS" topAuto="mt-auto" />
      </Row>
      <StyledBlockLogo
        className="align-items-center flex-wrap mt-5 mb-124"
        technology={1}
      >
        <StyledLogo width="858" height="186" src={logoBlockchain} />
        <StyledLogo width="314" height="54" src={logoEdso} />
        <StyledLogo width="306" height="157" src={logoN} />
        <StyledLogo width="314" height="54" src={logoArweave} />
        <StyledBlockLogoPolygon>
          <StyledLogo width="314" height="54" src={logoPolygon} />
        </StyledBlockLogoPolygon>
      </StyledBlockLogo>
    </Container>
  )
}

export default Partners
