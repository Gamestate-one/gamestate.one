import { useState, useEffect } from "react";
import Logo from "../../assets/img/Logo/logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [text, setText] = useState("LITE PAPER");
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <Div>
      <StyledNavbar
        className={scrolled && "add-boxshadow"}
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <StyledContainer>
          <Navbar.Brand href="#">
            <StyledImg src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <StyledNav>
              <StyledFirstButton
                href="https://docs.google.com/presentation/d/1RnP4BVUzkm8dxNpl9WijcnW4WF5uRqzt/present?slide=id.p1"
                target="_blank"
              >
                PITCH DECK
              </StyledFirstButton>
              <StyledSecondButton
                href="#"
                onMouseEnter={() => setText("COMING SOON")}
                onMouseLeave={() => setText("LITE PAPER")}
              >
                {text}
              </StyledSecondButton>
              <StyledThirdButton href="#staking">STAKING</StyledThirdButton>
              <StyledFourthButton
                href="https://blurt.blog/@gamestate"
                target="_blank"
              >
                GET STARTED
              </StyledFourthButton>
            </StyledNav>
          </Navbar.Collapse>
        </StyledContainer>
      </StyledNavbar>
    </Div>
  );
};
export default Header;

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  font: normal normal medium 16px/19px Whyte;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
  height: 41px;
  min-width: 148px;
  max-width: 150px;
  @media screen and (min-width: 992px) and (max-width: 1310px) {
    font: normal normal medium 12px/12px Whyte;
    min-width: 116px;
  }
  @media (max-width: 991px) {
    min-width: 148px;
    margin-bottom: 50px;
    margin-left: 0;
  }
`;
const StyledFirstButton = styled(A)`
  color: #81efff;
  border: 3px solid #81efff;
  box-shadow: 0px 3px 6px #406ef8;
  text-shadow: 0px 3px 6px #7ad3e0, 0px 3px 6px #81efff;
  &:hover {
    color: #81efff;
    transform: scale(1.05);
  }
`;
const StyledSecondButton = styled(A)`
  color: #ffffff;
  border: 3px solid #ffffff;
  box-shadow: inset 0px 3px 6px #aaa9a96c, 0px 3px 6px #ffffff;
  text-shadow: 0px 3px 6px #aaa9a96c, 0px 3px 6px #ffffffbe;
  &:hover {
    color: #ffffff;
    transform: scale(1.05);
  }
`;

const StyledThirdButton = styled(A)`
  color: #1ad177;
  border: 3px solid #1ad177;
  text-shadow: 0px 3px 6px #20ac67, 0px 3px 6px #1ad178;
  box-shadow: 0px 3px 6px #1dcc70;
  &:hover {
    color: #1ad177;
    transform: scale(1.05);
  }
`;
const StyledFourthButton = styled(A)`
  color: #e740f0;
  border: 3px solid #e740f0;
  text-shadow: 0px 3px 6px rgb(158, 80, 162), 0px 3px 6px rgb(231, 64, 240);
  box-shadow: 0px 3px 6px #e740f0;
  &:hover {
    color: #e740f0;
    transform: scale(1.05);
  }
`;
const StyledNav = styled(Nav)`
  justify-content: flex-end;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 576px) {
    max-width: 195px;
    max-height: 53px;
  }
`;
const StyledContainer = styled(Container)`
  height: 100%;
  max-width: 94%;
  @media screen and (min-width: 2440px) {
    max-width: 1868px;
  }
  @media screen and (max-width: 992px) {
    max-width: 100%;
    padding: 0;
    .navbar-brand {
      margin-left: 3%;
    }
    .navbar-toggler {
      margin-right: 3%;
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  background-color: #000000;
  max-height: 102px;
  .navbar-toggler {
    border-radius: 8px;
    width: 35px;
    height: 35px;
    .navbar-toggler-icon {
      margin-left: -8px;
      width: 25px;
      height: 25px;
    }
  }
  .navbar-collapse {
    background-color: #000000;
    justify-content: flex-end;
    @media screen and (max-width: 991px) {
      margin-top: 16px;
    }
  }
`;
const Div = styled.div`
  .add-boxshadow {
    box-shadow: 0px 3px 6px #9e08a6;
  }
`;
