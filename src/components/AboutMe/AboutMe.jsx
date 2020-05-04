import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ user, SectionTitle, Paragraph }) => (
  <>
    <SectionTitle>About Me</SectionTitle>
    <img
      src="https://i.imgur.com/6kEYP9a.jpg"
      alt="Dylan Souvage"
      align="right"
      height="200"
      width="160"
    />
    <Paragraph>{user.basics.summary}</Paragraph>
  </>
);

AboutMe.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default AboutMe;
