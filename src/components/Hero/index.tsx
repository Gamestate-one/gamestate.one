import styled from "styled-components"
import { useState, useRef } from "react"
import Loading from "../Loading"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
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
  const videoRef = useRef<any>()
  const [isLoading, setIsLoading] = useState(true)
  const [isTurnOnSound, setIsTurnOnSound] = useState(true)
  const handleClickFullscreen = () => {
    const videoElement = videoRef.current
    if (videoElement.requestFullscreen) videoElement.requestFullscreen()
    else if (videoElement.webkitRequestFullscreen)
      videoElement.webkitRequestFullscreen()
    else if (videoElement.msRequestFullscreen)
      videoElement.msRequestFullscreen()
  }
  return (
    <Div>
      {isLoading && <StyledLoadingProgress done={100} />}
      <video
        ref={videoRef}
        width={isLoading ? "0" : "100%"}
        height={isLoading ? "0" : "100%"}
        autoPlay={true}
        loop
        muted={isTurnOnSound}
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
      {!isLoading && (
        <>
          <StyledIconSound onClick={() => setIsTurnOnSound(!isTurnOnSound)}>
            {isTurnOnSound ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </StyledIconSound>
          <StyledIconFullscreen onClick={handleClickFullscreen}>
            <FullscreenIcon />
          </StyledIconFullscreen>
        </>
      )}
    </Div>
  )
}
export default Hero

const Div = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 93px;
  background-color: #05080a;
  @media screen and (max-width: 576px) {
    padding-top: 66px;
  }
`
const StyledIconSound = styled.div`
  position: absolute;
  right: 20px;
  top: 120px;
  color: white;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 576px) {
    top: 80px;
  }
`
const StyledIconFullscreen = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: white;
  & svg {
    font-size: 40px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 576px) {
    & svg {
      font-size: 20px;
    }
  }
`
