import React from 'react';
import PropTypes from 'prop-types';
import websiteInfo from '../../data/website-info.json';
import Badges from '../Badges/Badges';

/**
 * This component creates the Experience section
 * TODO move hardcoded content to websiteInfo json object
 * @param {JSON} user The user JSON
 * @param {Component} SectionTitle The style format to be used for section title
 * @param {Component} Paragraph The style format to be used for the Paragraph
 */
const WebsiteInfo = ({ SectionTitle, Paragraph }) => (
  <div>
    <SectionTitle>Website Information</SectionTitle>
    <ul>
      <Badges Paragraph={Paragraph} />
      <Paragraph>{websiteInfo.description}</Paragraph>
      <Paragraph>
        <br />
        Do you have any suggestions or maybe just want to browse the code? (Feel free to make an
        issue on the repo or contact me!)
      </Paragraph>
      <Paragraph>
        <br />
        <a href={websiteInfo.repoURL} rel="noopener noreferrer" target="_blank">
          {websiteInfo.repoURL}
        </a>
      </Paragraph>
    </ul>
  </div>
);

WebsiteInfo.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
};

export default WebsiteInfo;
