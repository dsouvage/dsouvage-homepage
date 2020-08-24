import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component creates the Resume PDF section
 * @param {Component} SectionTitle The style format to be used for section title
 * @param {Component} Paragraph The style format to be used for the Paragraph
 */
const ResumeFrame = ({ SectionTitle, Paragraph }) => (
  <>
    <div id="ResumeFrame" />
    <SectionTitle>Resume</SectionTitle>
    <Paragraph>
      <iframe
        title="Resume"
        src="https://www.cosc.brocku.ca/~ds16bz/resume/Dylan_Souvage_Resume.pdf"
        width="100%"
        height="1400px"
      />
    </Paragraph>
  </>
);

ResumeFrame.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
};

export default ResumeFrame;
