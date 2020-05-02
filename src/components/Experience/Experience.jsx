import React from 'react';
import PropTypes from 'prop-types';
import { WorkItem, WorkTitle, JobTitle } from '../../style/Work/styles';
import ListExperience from '../ListExperience/ListExperience';
import urlLoader from '../../data/website-info.json';

function workImage(company) {
  // if (urlLoader[company] !== undefined) {
  //   const url = urlLoader[company];
  //   return url;
  // }
  // return undefined;
  return urlLoader[company];
}

const Experience = ({ user, SectionTitle, Paragraph }) => (
  <div>
    <div id="Experience" />
    <SectionTitle>Work Experience</SectionTitle>
    <ul>
      {user.work.map((work) => (
        <WorkItem key={Date.now()}>
          <a href={work.website} rel="noopener noreferrer" target="_blank">
            <img src={workImage(work.company)} alt={work.company} align="right" />
          </a>
          <ListExperience
            work={work}
            Paragraph={Paragraph}
            WorkTitle={WorkTitle}
            JobTitle={JobTitle}
          />
        </WorkItem>
      ))}
    </ul>
  </div>
);

Experience.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Experience;
