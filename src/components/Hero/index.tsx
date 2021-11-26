import styled from "styled-components";

const Hero = () => {
  return (
    <Div>
      <video
        width="100%"
        height="80%"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://gamestatevideo.s3.us-east-2.amazonaws.com/herovideo.mp4"
          type="video/mp4"
        />
      </video>
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-color: #05080a;
  @media screen and (max-width: 991px) {
    padding-bottom: 30px;
  }
`;
