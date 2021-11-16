import Logo from "../../assets/img/Logo/logo.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <StyledNavbar collapseOnSelect fixed='top' expand='lg' variant='dark'>
        <StyledContainer>
          <Navbar.Brand href='#'>
            <StyledImg src={Logo} alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <StyledNav>
              <StyledLitePaper href='#'>LITE PAPER</StyledLitePaper>
              <StyledNFT href='#'>NFT's</StyledNFT>
              <StyledStaking href='#'>STAKING</StyledStaking>
              <StyledStarted href='#'>GET STARTED</StyledStarted>
            </StyledNav>
          </Navbar.Collapse>
        </StyledContainer>
      </StyledNavbar>
    </>
  );
};
export default Header;

const A = styled.a`
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
`;
const StyledLitePaper = styled(A)`
  padding: 10px 35px;
  color: #ffffff;
  border: 3px solid #ffffff;
  box-shadow: 0px 3px 6px #ffffff;
  text-shadow: 0px 3px 6px #aaa9a96c, 0px 3px 6px #ffffffbe;
  &:hover {
    color: #ffffff;
  }
`;
const StyledNFT = styled(A)`
  padding: 10px 53px;
  color: #81efff;
  border: 3px solid #81efff;
  box-shadow: 0px 0px 6px #406ef8;
  text-shadow: 0px 3px 6px #7ad3e0, 0px 3px 6px #81efff;
  &:hover {
    color: #81efff;
  }
`;
const StyledStaking = styled(A)`
  padding: 10px 43px;
  color: #1ad177;
  border: 3px solid #1ad177;
  text-shadow: 0px 3px 6px #20ac67, 0px 3px 6px #1ad178;
  box-shadow: 0px 0px 6px #1dcc70;
  &:hover {
    color: #1ad177;
  }
`;
const StyledStarted = styled(A)`
  padding: 10px 27px;
  color: #e740f0;
  border: 3px solid #e740f0;
  text-shadow: 0px 3px 6px #9e50a2, 0px 3px 6px #e740f0;
  box-shadow: 0px 0px 6px #e740f0;
  &:hover {
    color: #e740f0;
  }
`;
const StyledNav = styled(Nav)`
  flex: 1;
  justify-content: flex-end;
`;

const StyledContainer = styled(Container)``;
const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;
const StyledNavbar = styled(Navbar)`
  background-color: #000000;
`;
