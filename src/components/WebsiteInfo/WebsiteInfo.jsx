import React from 'react';
import PropTypes from 'prop-types';
import websiteInfo from '../../data/website-info.json';
import Badges from '../Badges/Badges';

// TODO move hardcoded content to websiteInfo json object
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
