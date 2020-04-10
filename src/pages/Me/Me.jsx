/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from '../Work/styles';
import { EducationItem, Institution, Degree } from '../Education/styles';
import data from '../../data/website-info.json';

const Me = ({ user }) => (
  <Layout user={user}>
    <div>
      <SectionTitle>Website Information</SectionTitle>
      <ul>
        <Paragraph>{data.description}</Paragraph>
        <Paragraph>
          See
          {' '}
          <a href={data.repoURL} rel="noopener noreferrer" target="_blank">{data.repoURL}</a>
          {' '}
          for more information.
        </Paragraph>
      </ul>
    </div>
    <div>
      <SectionTitle>About Me</SectionTitle>
      <Paragraph>{user.basics.summary}</Paragraph>
    </div>
    <div>
      <SectionTitle>Education</SectionTitle>
      <ul>
        {user.education.map((education, i) => (
          <EducationItem key={i}>
            <Institution>{education.position}</Institution>
            <div>
              <Degree>
                {education.studyType}
                ,
                {education.area}
              </Degree>
              {' '}
              <span> &sdot; </span>
              <span>
                {education.start.year}
                {' '}
                to
                {' '}
                {education.end.year}
              </span>
            </div>
            <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
          </EducationItem>
        ))}
      </ul>
    </div>
    <div>
      <SectionTitle>Work</SectionTitle>
      <ul>
        {user.work.map((work, i) => (
          <WorkItem key={i}>
            <WorkTitle>{work.position}</WorkTitle>
            <div>
              <JobTitle>{work.company}</JobTitle>
              {' '}
              <span>{work.location}</span>
              <span> &sdot; </span>
              <span>
                {work.start.month}
                /
                {work.start.year}
                {' '}
                to
                {' '}
                {work.end.month}
                /
                {work.end.year}
              </span>
            </div>
            <Paragraph><a href={work.website} rel="noopener noreferrer" target="_blank">{work.website}</a></Paragraph>
            <Paragraph>{work.summary}</Paragraph>
            {work.highlights.map((highlight) => <Paragraph>{highlight}</Paragraph>)}
          </WorkItem>
        ))}
      </ul>
    </div>
    <div>
      <SectionTitle>Involvement</SectionTitle>
      <ul>
        {user.volunteer.map((work, i) => (
          <WorkItem key={i}>
            <WorkTitle>{work.position}</WorkTitle>
            <div>
              <JobTitle>{work.organization}</JobTitle>
              {' '}
              <span>{work.location}</span>
              <span> &sdot; </span>
              <span>
                {work.start.month}
                /
                {work.start.year}
                {' '}
                to
                {' '}
                {work.end.month}
                /
                {work.end.year}
              </span>
            </div>
            <Paragraph><a href={work.website} rel="noopener noreferrer" target="_blank">{work.website}</a></Paragraph>
            <Paragraph>{work.summary}</Paragraph>
            {work.highlights.map((highlight) => <Paragraph>{highlight}</Paragraph>)}
          </WorkItem>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Me;
