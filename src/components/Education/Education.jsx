import React from 'react';
import PropTypes from 'prop-types';
import { EducationItem, Institution, Degree } from '../../style/Education/styles';

const Education = ({ user, SectionTitle, Paragraph }) => (
  <>
    <div id="Education" />
    <SectionTitle>Education</SectionTitle>
    <ul>
      {user.education.map((education) => (
        <EducationItem key={Date.now()}>
          <Institution>{education.institution}</Institution>
          <div>
            <Degree>
              {education.studyType},{education.area}
            </Degree>{' '}
            <span> &sdot; </span>
            <span>
              {education.start.year} to {education.end.year}
            </span>
          </div>
          <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
          <Paragraph>{education.activities.replace('\n\n', '\n')}</Paragraph>
        </EducationItem>
      ))}
    </ul>
  </>
);

Education.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Education;
