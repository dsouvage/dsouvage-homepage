import React from 'react';
import { NavBarStyle } from './styles';

// eslint-disable-next-line react/prop-types
const NavBar = () => (
  <NavBarStyle>
    <div className="navbar">
      <a href="#home">About Me</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  </NavBarStyle>
);

export default NavBar;
