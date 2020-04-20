import React from 'react';
import PropTypes from 'prop-types';
import { WorkItem, WorkTitle, JobTitle } from '../../style/Work/styles';

const Involvement = ({ user, SectionTitle, Paragraph }) => (
  <div>
    <div id="Involvement" />
    <SectionTitle>Involvement</SectionTitle>
    <ul>
      {user.volunteer.map((work) => (
        <WorkItem key={Date.now()}>
          <WorkTitle>{work.position}</WorkTitle>
          <div>
            <JobTitle>{work.organization}</JobTitle> <span>{work.location}</span>
            <span> &sdot; </span>
            <span>
              {work.start.month}/{work.start.year} to {work.end.month}/{work.end.year}
            </span>
          </div>
          <Paragraph>
            <a href={work.website} rel="noopener noreferrer" target="_blank">
              {work.website}
            </a>
          </Paragraph>
          <Paragraph>Summary: {work.summary}</Paragraph>
          {work.highlights.map((highlight) => (
            <Paragraph key={Date.now()}>{highlight}</Paragraph>
          ))}
        </WorkItem>
      ))}
    </ul>
  </div>
);

Involvement.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Involvement;
