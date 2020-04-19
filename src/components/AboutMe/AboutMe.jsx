import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ user, SectionTitle, Paragraph }) => (
  <div>
    <SectionTitle>
      About Me
    </SectionTitle>
    <Paragraph>{user.basics.summary}</Paragraph>
  </div>
);

AboutMe.propTypes = {
  Paragraph: PropTypes.element.isRequired,
  SectionTitle: PropTypes.element.isRequired,
  user: PropTypes.element.isRequired,
};

export default AboutMe;
