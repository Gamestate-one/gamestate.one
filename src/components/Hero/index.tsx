import styled from "styled-components"
import { useState, useRef, useEffect } from "react"
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
  const [isControls, setIsControls] = useState(false)
  const ios =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
  const handleClickFullscreen = () => {
    const videoElement = videoRef.current
    if (videoElement.requestFullscreen) videoElement.requestFullscreen()
    else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitEnterFullScreen()
    } else if (ios) {
      videoElement.webkitEnterFullScreen()
    } else if (videoElement.msRequestFullscreen)
      videoElement.msRequestFullscreen()
  }
  useEffect(() => {
    videoRef.current?.addEventListener("contextmenu", (e: any) => {
      e.preventDefault()
    })
    if (window.innerWidth < 576) {
      setIsControls(true)
    }
  }, [])
  return (
    <Div>
      {isLoading && <StyledLoadingProgress done={100} />}
      <video
        ref={videoRef}
        width={isLoading ? "0" : "100%"}
        height={isLoading ? "0" : "100%"}
        autoPlay
        controls={isControls}
        loop
        muted={isTurnOnSound}
        playsInline
        preload="auto"
        onLoadStart={() => {
          setIsLoading(true)
        }}
        onCanPlay={() => {
          const delay = setTimeout(() => {
            setIsLoading(false)
          }, 3000)
          !isLoading && clearTimeout(delay)
        }}
      >
        <source
          src="https://s3.ap-southeast-1.amazonaws.com/defiforyou.uk/GS_Cinematic_v04_HQ.mp4"
          type="video/mp4"
        />
      </video>
      {!isLoading && !isControls && (
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
  @media screen and (min-width: 576px) {
    & video {
      &::-webkit-media-controls-volume-slider {
        display: none;
      }

      &::-webkit-media-controls-mute-button {
        display: none;
      }
    }
  }
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
