/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import {
  HeaderContainer, Header, Image, ViewResumeLink,
} from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @
              {user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>{user.basics.headline}</p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href="https://www.cosc.brocku.ca/~ds16bz/resume/Dylan_Souvage_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
