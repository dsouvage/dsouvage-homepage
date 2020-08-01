import React from 'react';
import { NavBarStyle } from './styles';

const NavBar = () => (
  <NavBarStyle>
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#aboutme">About Me</a>
      <a href="#Timeline">Timeline</a>
      {/* <a href="#Education">Education</a>
      <a href="#Experience">Experience</a>
      <a href="#Involvement">Involvement</a> */}
      <a href="#Gallery">Gallery</a>
      <a href="#ResumeFrame">Resume</a>
    </div>
  </NavBarStyle>
);

export default NavBar;
