import React from 'react';
import PropTypes from 'prop-types';
import { WorkItem, WorkTitle, JobTitle } from '../../style/Work/styles';
import ListExperience from '../ListExperience/ListExperience';

const Involvement = ({ user, SectionTitle, Paragraph }) => (
  <div>
    <div id="Involvement" />
    <SectionTitle>Involvement</SectionTitle>
    <ul>
      {user.volunteer.map((work) => (
        <WorkItem key={Date.now()}>
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

Involvement.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Involvement;
