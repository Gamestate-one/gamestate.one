/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
const StyledLoading = styled.div`
  /* height: 800px; */
  /* min-height: 34vw; */
  min-height: 58vw;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  top: 50%; */
  /* left: 50%; */
  /* background-color: #000; */
  padding: 10px;
  border-radius: 10px;
  & .progress {
    background-color: black;
    border-radius: 20px;
    /* position: relative; */
    margin: 15px 0;
    margin-top: -8vw;
    height: 10px;
    width: 60%;
  }

  & .progress-done {
    background: white;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 1;
    transition: ease-in 3s;
  }
`
const Loading = ({ done }: any) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const loading = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      }
      setStyle(newStyle)
    }, 300)
    return () => clearTimeout(loading)
  })

  return (
    <StyledLoading>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </StyledLoading>
  )
}

export default Loading
