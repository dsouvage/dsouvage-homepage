import React from 'react';
import PropTypes from 'prop-types';
import websiteInfo from '../../data/website-info.json';


// TODO move hardcoded content to websiteInfo json object
const WebsiteInfo = ({ SectionTitle, Paragraph }) => (
  <div>
    <SectionTitle>Website Information</SectionTitle>
    <ul>
      <Paragraph>
        <a href="https://travis-ci.org/firefelix/dsouvage-homepage" rel="noopener noreferrer" target="_blank"><img src={websiteInfo.buildStatusURL} alt="Build Info from Travis CI" /></a>
        {' '}
        <a href="https://github.com/firefelix/dsouvage-homepage" rel="noopener noreferrer" target="_blank"><img src="https://img.shields.io/github/languages/top/firefelix/dsouvage-homepage" alt="Top Language" /></a>
        {' '}
        <a href="https://github.com/firefelix/dsouvage-homepage" rel="noopener noreferrer" target="_blank"><img src="https://img.shields.io/github/last-commit/firefelix/dsouvage-homepage" alt="Latest Commit" /></a>
      </Paragraph>
      <Paragraph>{websiteInfo.description}</Paragraph>
      <Paragraph>
        <br />
        Do you have any suggestions or maybe just want to browse the code?
        (Feel free to make an issue on the repo or contact me!)
      </Paragraph>
      <Paragraph>
        <br />
        <a href={websiteInfo.repoURL} rel="noopener noreferrer" target="_blank">{websiteInfo.repoURL}</a>
      </Paragraph>
    </ul>
  </div>
);

WebsiteInfo.propTypes = {
  Paragraph: PropTypes.element.isRequired,
  SectionTitle: PropTypes.element.isRequired,
};

export default WebsiteInfo;
