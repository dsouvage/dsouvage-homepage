/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../../components/Layout';
import {
  SectionTitle, Paragraph, DarkGrayBlock, RegularBlock,
} from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from '../Work/styles';
import {
  EducationItem, Institution, Degree,
} from '../Education/styles';
import websiteInfo from '../../data/website-info.json';

// TODO move these into seperate components for the layout to build, rather than store all within Me.jsx
const Me = ({ user }) => (
  <Layout user={user}>
    <div>
      <DarkGrayBlock>
        <SectionTitle>Website Information</SectionTitle>
        <ul>
          <Paragraph>
            <a href="https://travis-ci.org/firefelix/dsouvage-homepage" rel="noopener noreferrer" target="_blank"><img src={websiteInfo.buildStatusURL} alt="Build Info from Travis CI" /></a>
            {' '}
            <a href="https://github.com/firefelix/dsouvage-homepage" rel="noopener noreferrer" target="_blank"><img src="https://img.shields.io/github/languages/top/firefelix/dsouvage-homepage" alt="Top Language" /></a>
            {' '}
            <a href="https://github.com/firefelix/dsouvage-homepage" rel="noopener noreferrer" target="_blank"><img src="https://img.shields.io/github/last-commit/firefelix/dsouvage-homepage" alt="Latest Commit" /></a>
          </Paragraph>
          <Paragraph>{websiteInfo.description}</Paragraph>
          <Paragraph>
            <br />
            Do you have any suggestions or maybe just want to browse the code? (Feel free to make an issue on the repo or contact me!)
          </Paragraph>
          <Paragraph>
            <br />
            <a href={websiteInfo.repoURL} rel="noopener noreferrer" target="_blank">{websiteInfo.repoURL}</a>
          </Paragraph>
        </ul>
      </DarkGrayBlock>
    </div>
    <div>
      <RegularBlock>
        <SectionTitle>
          About Me
        </SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </RegularBlock>
    </div>
    <div>
      <DarkGrayBlock>
        <div id="Education" />
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>
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
      </DarkGrayBlock>
    </div>
    <div>
      <RegularBlock>
        <div id="Experience" />
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
              <Paragraph>
                Summary:
                {' '}
                {work.summary}
              </Paragraph>
              {work.highlights.map((highlight) => <Paragraph>{highlight}</Paragraph>)}
            </WorkItem>
          ))}
        </ul>
      </RegularBlock>
    </div>
    <div>
      <DarkGrayBlock>
        <div id="Involvement" />
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
              <Paragraph>
                Summary:
                {' '}
                {work.summary}
              </Paragraph>
              {work.highlights.map((highlight) => <Paragraph>{highlight}</Paragraph>)}
            </WorkItem>
          ))}
        </ul>
      </DarkGrayBlock>
    </div>
  </Layout>
);

export default Me;
