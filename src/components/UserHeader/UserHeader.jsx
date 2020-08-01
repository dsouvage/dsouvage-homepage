import React from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => (
  <HeaderContainer>
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
            @{user.basics.username}
          </a>
        </h4>
        <p>{user.basics.label}</p>
        <p>{user.basics.headline}</p>
      </div>
    </Header>
    <div>
      <ViewResumeLink href="#ResumeFrame">
        <span>View Résumé</span>
        <ArrowRight16 />
      </ViewResumeLink>
    </div>
  </HeaderContainer>
);

UserHeader.propTypes = {
  user: PropTypes.any.isRequired,
};

export default UserHeader;
