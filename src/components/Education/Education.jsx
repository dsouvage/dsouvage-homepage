import React from 'react';
import PropTypes from 'prop-types';
import { EducationItem, Institution, Degree } from '../../style/Education/styles';

const Education = ({ user, SectionTitle, Paragraph }) => (
  <div>
    <div id="Education" />
    <SectionTitle>Education</SectionTitle>
    <ul>
      {user.education.map((education) => (
        <EducationItem>
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
  </div>
);

Education.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Education;
