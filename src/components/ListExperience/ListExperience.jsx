import React from 'react';
import PropTypes from 'prop-types';

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
