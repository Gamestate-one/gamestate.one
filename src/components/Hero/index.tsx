import styled from "styled-components"
import { useState } from "react"
import { SolarSystemLoading } from "react-loadingg"
const Hero = () => {
  const [isLoading, setIsLoading] = useState(false)
  const StyledLoading = styled(SolarSystemLoading)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
  `
  return (
    <Div>
      {isLoading && <StyledLoading color="yellow" />}
      <video
        width="100%"
        height="80%"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        onLoadStart={() => {
          setIsLoading(true)
        }}
        onCanPlay={() => {
          setIsLoading(false)
        }}
      >
        <source
          src="https://s3.ap-southeast-1.amazonaws.com/defiforyou.uk/Logo_Effect_VS1.mp4"
          type="video/mp4"
        />
      </video>
    </Div>
  )
}
export default Hero
const Div = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-color: #05080a;
  @media screen and (max-width: 991px) {
    padding-bottom: 30px;
  }
`
