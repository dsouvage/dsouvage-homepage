import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component creates the list experience section
 * @param {JSON} work The work JSON
 * @param {Component} WorkTitle The style format to be used for work title
 * @param {Component} JobTitle The style format to be used for job title
 * @param {Component} Paragraph The style format to be used for the Paragraph
 */
const ListExperience = ({ work, Paragraph, WorkTitle, JobTitle }) => (
  <>
    <WorkTitle>{work.position}</WorkTitle>
    <div>
      <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
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
  </>
);

ListExperience.propTypes = {
  Paragraph: PropTypes.any.isRequired,
  work: PropTypes.object.isRequired,
  WorkTitle: PropTypes.any.isRequired,
  JobTitle: PropTypes.any.isRequired,
};

export default ListExperience;
