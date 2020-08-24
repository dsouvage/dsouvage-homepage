import React from 'react';
import PropTypes from 'prop-types';
import { WorkItem, WorkTitle, JobTitle } from '../../style/Work/styles';
import ListExperience from '../ListExperience/ListExperience';

/**
 * This component creates the Involvement section
 * @param {JSON} user The user JSON
 * @param {Component} SectionTitle The style format to be used for section title
 * @param {Component} Paragraph The style format to be used for the Paragraph
 */
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
