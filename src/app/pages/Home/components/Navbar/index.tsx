import { useState, useEffect } from 'react';
import Logo from 'app/assets/img/Logo/logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import close from 'app/assets/img/close.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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
        className={scrolled && 'add-boxshadow'}
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <StyledContainer>
          <Navbar.Brand href="#">
            <StyledImg src={Logo} alt="Logo" />
          </Navbar.Brand>
          <StyledNavbarToggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <StyledNav>
              <StyledFirstButton
                href="https://docs.google.com/presentation/d/1RnP4BVUzkm8dxNpl9WijcnW4WF5uRqzt/present?slide=id.p1"
                target="_blank"
              >
                PITCH DECK
              </StyledFirstButton>
              <StyledSecondButton
                href="https://s3.ap-southeast-1.amazonaws.com/defiforyou.uk/Gamestate-Meta-Paper-v1.pdf"
                target="_blank"
              >
                META PAPER
              </StyledSecondButton>
              <StyledThirdButton href="#staking">STAKING</StyledThirdButton>
              <StyledFourthButton
                href="https://getstarted.gamestate.one"
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
  text-align: center;
  margin-left: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
  min-width: 148px;
  max-width: 150px;
  transition: 0.2s;
  height: 41px;
  @media screen and (min-width: 992px) and (max-width: 1310px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 36px;
    min-width: 116px;
  }
  @media (max-width: 991px) {
    min-width: 148px;
    margin-bottom: 22px;
    margin-left: 0;
  }
  @media (max-width: 414px) {
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
const StyledNavbarToggle = styled(Navbar.Toggle)`
  /* &:focus {
    outline: none;
    border: none;
  }
  & > .navbar-toggler-icon {
  } */
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
  & > .navbar-toggler.collapsed {
    & > .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }
  & > .navbar-toggler {
    & > .navbar-toggler-icon {
      background-image: url(${close});
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
      padding-bottom: 20px;
    }
  }
`;
const Div = styled.div`
  .add-boxshadow {
    box-shadow: 0px 3px 6px #9e08a6;
  }
`;
