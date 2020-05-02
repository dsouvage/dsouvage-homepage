import React from 'react';
import PropTypes from 'prop-types';

const badgeInfo = [
  {
    HREF: 'https://travis-ci.org/firefelix/dsouvage-homepage',
    IMGURL: 'https://travis-ci.org/firefelix/dsouvage-homepage.svg?branch=master',
    ALT: 'Build Info from Travis CI',
  },
  {
    HREF: 'https://github.com/firefelix/dsouvage-homepage',
    IMGURL: 'https://img.shields.io/github/languages/top/firefelix/dsouvage-homepage',
    ALT: 'Top Language',
  },
  {
    HREF: 'https://github.com/firefelix/dsouvage-homepage',
    IMGURL: 'https://img.shields.io/github/last-commit/firefelix/dsouvage-homepage',
    ALT: 'Latest Commit',
  },
  {
    HREF: 'https://coveralls.io/github/firefelix/dsouvage-homepage',
    IMGURL: 'https://coveralls.io/repos/github/firefelix/dsouvage-homepage/badge.svg',
    ALT: 'Coverage Status',
  },
  {
    HREF: 'https://codeclimate.com/github/firefelix/dsouvage-homepage/maintainability',
    IMGURL: 'https://api.codeclimate.com/v1/badges/115e839a764da70057db/maintainability',
    ALT: 'Maintainability',
  },
  {
    HREF: 'https://github.com/firefelix/dsouvage-homepage/blob/master/LICENSE',
    IMGURL: 'https://img.shields.io/github/license/firefelix/dsouvage-homepage',
    ALT: 'License',
  },
];

const Badges = ({ Paragraph }) => (
  <Paragraph>
    {badgeInfo.map((badge) => (
      <a href={badge.HREF} rel="noopener noreferrer" target="_blank" key={Date.now()}>
        <img src={badge.IMGURL} alt={badge.ALT} />
      </a>
    ))}
  </Paragraph>
);

Badges.propTypes = {
  Paragraph: PropTypes.object.isRequired,
};

export default Badges;
