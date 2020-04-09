import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';
import { WorkItem, WorkTitle, JobTitle } from '../Work/styles';
import { EducationItem, Institution, Degree } from '../Education/styles';

const Me = ({ user }) => {
	return (
		<Layout user={user}>
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
									{education.studyType}, {education.area}
								</Degree>{' '}
								<span> &sdot; </span>
								<span>
									{education.start.year} to {education.end.year}
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
								<JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
								<span> &sdot; </span>
								<span>
									{work.start.month}/{work.start.year} to {work.end.month}/{work.end.year}
								</span>
							</div>
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
								<JobTitle>{work.organization}</JobTitle> <span>{work.location}</span>
								<span> &sdot; </span>
								<span>
									{work.start.month}/{work.start.year} to {work.end.month}/{work.end.year}
								</span>
							</div>
							<Paragraph>{work.summary}</Paragraph>
							{work.highlights.map((highlight) => <Paragraph>{highlight}</Paragraph>)}
						</WorkItem>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default Me;
