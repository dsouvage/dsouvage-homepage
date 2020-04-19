import React from 'react';
import PropTypes from 'prop-types';
// import Sidebar from '../Sidebar';
// import { Link, animateScroll as scroll } from 'react-scroll';
import UserHeader from '../UserHeader';
// import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

import BackgroundComponentStar from '../Background/background';

import NavBar from '../NavBar/NavBar';

const Layout = ({ user, children }) => (
  <>
    <NavBar />
    <div id="home" />
    <div className="wrapper">
      <BackgroundComponentStar />
    </div>
    <StyledContent>
      <div id="aboutme" />
      <UserHeader user={user} />
      <div>{children}</div>
    </StyledContent>
  </>
);

Layout.propTypes = {
  children: PropTypes.any,
  user: PropTypes.any,
};
Layout.defaultProps = {
  children: PropTypes.any,
  user: PropTypes.any,
};

export default Layout;
