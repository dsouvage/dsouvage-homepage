import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ user, SectionTitle, Paragraph }) => (
  <div>
    <SectionTitle>About Me</SectionTitle>
    <Paragraph>{user.basics.summary}</Paragraph>
  </div>
);

AboutMe.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default AboutMe;
