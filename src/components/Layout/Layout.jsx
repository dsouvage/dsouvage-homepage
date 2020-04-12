import React from 'react';
// import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

import BackgroundComponentStar from '../Background/background';

import NavBar from '../NavBar/NavBar';

// eslint-disable-next-line react/prop-types
const Layout = ({ user, children }) => (
  <>
    <NavBar />
    <div className="wrapper">
      <BackgroundComponentStar />
    </div>
    <MobileNav />
    <StyledContent>
      <UserHeader user={user} />
      <div>{children}</div>
    </StyledContent>
  </>
);

export default Layout;
