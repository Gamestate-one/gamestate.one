import styled from "styled-components"
import { useState } from "react"
import Loading from "../Loading"
const StyledLoadingProgress = styled(Loading)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
`
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Div>
      {isLoading && <StyledLoadingProgress done={100} />}
      <video
        width={isLoading ? "0" : "100%"}
        height={isLoading ? "0" : "100%"}
        autoPlay={true}
        loop
        muted
        playsInline
        preload="auto"
        onLoadStart={() => {
          setIsLoading(true)
        }}
        onLoadedData={() => {
          const delay = setTimeout(() => {
            setIsLoading(false)
          }, 3000)
          if (!isLoading) {
            clearTimeout(delay)
          }
        }}
      >
        <source
          src="https://s3.ap-southeast-1.amazonaws.com/defiforyou.uk/GS_Cinematic_v01.mp4"
          type="video/mp4"
        />
      </video>
    </Div>
  )
}
export default Hero

const Div = styled.div`
  /* position: relative; */
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 93px;
  background-color: #05080a;

  @media screen and (max-width: 576px) {
    /* padding-bottom: 30px; */
    padding-top: 66px;
  }
`
