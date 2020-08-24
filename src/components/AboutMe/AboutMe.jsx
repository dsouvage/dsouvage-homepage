import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component creates the About Me section
 * @param {JSON} user The user JSON
 * @param {Component} SectionTitle The style format to be used for section title
 * @param {Component} Paragraph The style format to be used for the Paragraph
 */
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
