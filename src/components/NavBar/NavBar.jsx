import React from 'react';
import { NavBarStyle } from './styles';
import websiteInfo from '../../data/website-info.json';

// eslint-disable-next-line react/prop-types
const NavBar = () => (
  <NavBarStyle>
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#aboutme">About Me</a>
      <a href="#Education">Education</a>
      <a href="#Experience">Experience</a>
      <a href="#Involvement">Involvement</a>
      <a href={websiteInfo.resumeLink} rel="noopener noreferrer" target="_blank">Resume</a>
    </div>
  </NavBarStyle>
);

export default NavBar;
