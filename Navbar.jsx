import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { Bars } from "../images/bars.jpg";
// import { Bars } from "react-icons/fa";
// import { Bars } from "@styled-icons/fa-solid/Bars";

/*ALL STYLES DONE WITH STYLED COMPONENTS */
/*============= Styling for Nav ================*/
const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: red;
`;

/*============= Styling for NavLink ================*/
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

/*============= Styling for Logo ================*/
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

/*============= Styling for MenuBars ================*/
const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

// const App = () => <Bars />

/*============= Styling for NavMenu ================*/
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: -40px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

/*============= Styling for NavMenuLinks ================*/
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

/*============= Styling for Reuseable Button ================*/
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

/*============= NAVBAR FUNCTION COMPONENT ================*/
const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>ELIXR</Logo>
      <MenuBars />
      {Bars}
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
