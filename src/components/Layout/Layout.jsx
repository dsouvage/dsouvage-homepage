import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

// eslint-disable-next-line react/prop-types
const Layout = ({ user, children }) => (
  <>
    <MobileNav />
    <Sidebar />
    <StyledContent>
      <UserHeader user={user} />
      <div>{children}</div>
    </StyledContent>
  </>
);

export default Layout;
